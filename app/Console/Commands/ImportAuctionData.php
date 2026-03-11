<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ImportAuctionData extends Command
{
    protected $signature = 'auction:import {--force : Force re-download even if file exists}';
    protected $description = 'Download auction data from FTP, import new records, and store images';

    private string $downloadPath;

    // Column order from the auct_lots_xml_jp_op CREATE TABLE in the SQL dump
    private const AUCTION_COLUMNS = [
        'id', 'date', 'bid', 'auct_ref', 'auction_system', 'datetime',
        'company', 'company_en', 'company_ref',
        'model_name', 'model_name_en', 'model_name_ref',
        'model_year', 'model_year_en',
        'model_details_en', 'model_grade', 'model_grade_en',
        'model_type', 'model_type_en',
        'mileage', 'mileage_en', 'mileage_num',
        'inspection', 'inspection_en',
        'equipment', 'equipment_en',
        'transmission', 'transmission_en',
        'awd_num', 'sw_type', 'truck_ref', 'is_special',
        'displacement', 'displacement_num',
        'start_price', 'start_price_num', 'end_price', 'end_price_num',
        'color', 'color_en', 'color_ref',
        'scores', 'scores_en',
        'result', 'result_ref',
        'vin',
        'pictures', 'parsed_data', 'parsed_data_en', 'parsed_data_ru',
        'download_time', 'pics_downloaded', 'service_data',
    ];

    public function handle(): int
    {
        $this->downloadPath = config('auction-import.download_path');

        if (!is_dir($this->downloadPath)) {
            mkdir($this->downloadPath, 0755, true);
        }

        $this->info('[' . now() . '] Starting auction data import...');

        try {
            $sqlFile = $this->downloadFromFtp();
            if (!$sqlFile) {
                $this->error('Failed to download or decompress FTP file.');
                return self::FAILURE;
            }

            $imported = $this->importSqlData($sqlFile);

            $this->processImages($imported);

            $this->info("Import complete. {$imported['vehicles']} new vehicles, {$imported['pictures']} new pictures, {$imported['skipped']} skipped.");
            Log::info("Auction import complete", [
                'vehicles' => $imported['vehicles'],
                'pictures' => $imported['pictures'],
                'skipped' => $imported['skipped'],
            ]);

            return self::SUCCESS;
        } catch (\Throwable $e) {
            $this->error("Import failed: {$e->getMessage()}");
            Log::error("Auction import failed", ['error' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
            return self::FAILURE;
        }
    }

    private function downloadFromFtp(): ?string
    {
        $ftpConfig = config('auction-import.ftp');
        $bz2File = $this->downloadPath . DIRECTORY_SEPARATOR . $ftpConfig['filename'];
        $sqlFile = $this->downloadPath . DIRECTORY_SEPARATOR . str_replace('.bz2', '', $ftpConfig['filename']);

        if (!$this->option('force') && file_exists($sqlFile)) {
            $fileAge = time() - filemtime($sqlFile);
            if ($fileAge < 82800) {
                $this->info('Using existing SQL file (less than 23 hours old).');
                return $sqlFile;
            }
        }

        $ftpUrl = sprintf(
            'ftp://%s:%s@%s%s/%s',
            rawurlencode($ftpConfig['username']),
            rawurlencode($ftpConfig['password']),
            $ftpConfig['host'],
            $ftpConfig['path'],
            $ftpConfig['filename']
        );

        $this->info("Downloading from FTP: {$ftpConfig['host']}{$ftpConfig['path']}/{$ftpConfig['filename']}...");

        $outFh = fopen($bz2File, 'wb');
        if (!$outFh) {
            $this->error("Cannot create local file: {$bz2File}");
            return null;
        }

        $ch = curl_init($ftpUrl);
        curl_setopt_array($ch, [
            CURLOPT_FILE => $outFh,
            CURLOPT_TIMEOUT => 600,
            CURLOPT_CONNECTTIMEOUT => 30,
            CURLOPT_FTP_USE_EPSV => false,
        ]);

        $ok = curl_exec($ch);
        $error = curl_error($ch);
        curl_close($ch);
        fclose($outFh);

        if (!$ok) {
            $this->error("FTP download failed: {$error}");
            @unlink($bz2File);
            return null;
        }

        $fileSize = filesize($bz2File);
        $this->info("Download complete ({$fileSize} bytes). Decompressing...");

        if (!$this->decompressBz2($bz2File, $sqlFile)) {
            return null;
        }

        @unlink($bz2File);

        $sqlSize = filesize($sqlFile);
        $this->info("Decompression complete: " . basename($sqlFile) . " ({$sqlSize} bytes)");
        return $sqlFile;
    }

    private function decompressBz2(string $bz2File, string $sqlFile): bool
    {
        if (function_exists('bzopen')) {
            $bz = bzopen($bz2File, 'r');
            if (!$bz) {
                $this->error('Cannot open bz2 file.');
                return false;
            }
            $out = fopen($sqlFile, 'w');
            while (!feof($bz)) {
                $chunk = bzread($bz, 65536);
                if ($chunk === false) break;
                fwrite($out, $chunk);
            }
            bzclose($bz);
            fclose($out);
            return true;
        }

        $bz2Escaped = escapeshellarg($bz2File);
        $sqlEscaped = escapeshellarg($sqlFile);

        $result = null;
        $output = [];
        exec("bunzip2 -k -c {$bz2Escaped} > {$sqlEscaped} 2>&1", $output, $result);
        if ($result === 0 && file_exists($sqlFile) && filesize($sqlFile) > 0) {
            return true;
        }

        exec("python -c \"import bz2,sys;o=open(sys.argv[2],'wb');o.write(bz2.open(sys.argv[1],'rb').read());o.close()\" {$bz2Escaped} {$sqlEscaped} 2>&1", $output, $result);
        if ($result === 0 && file_exists($sqlFile) && filesize($sqlFile) > 0) {
            return true;
        }

        $this->error('Cannot decompress bz2: no bz2 PHP extension, bunzip2, or python available.');
        return false;
    }

    private function importSqlData(string $sqlFile): array
    {
        $handle = fopen($sqlFile, 'r');
        if (!$handle) {
            throw new \RuntimeException("Cannot open SQL file: {$sqlFile}");
        }

        $stats = ['vehicles' => 0, 'pictures' => 0, 'skipped' => 0, 'new_stock_nos' => []];

        // Ensure index exists for fast duplicate lookups
        $this->info('Preparing duplicate check index...');
        try {
            $indexExists = DB::select("SHOW INDEX FROM vehicle_details WHERE Key_name = 'idx_vd_bid_number'");
            if (empty($indexExists)) {
                DB::unprepared('CREATE INDEX idx_vd_bid_number ON vehicle_details(bid_number)');
            }
        } catch (\Throwable $e) {
            // Table or index issue - non-fatal
        }

        $existingCount = DB::table('vehicle_details')
            ->where('data_source', 'ftp_jp_oneprice')
            ->count();
        $this->info("Found {$existingCount} existing auction imports.");

        $this->info('Parsing SQL file...');
        $lineCount = 0;
        $buffer = '';

        while (($line = fgets($handle)) !== false) {
            $line = trim($line);

            // Skip non-data lines
            if ($line === '' || $line[0] === '-' || $line[0] === '/' || $line[0] === '*' ||
                str_starts_with($line, 'LOCK') || str_starts_with($line, 'UNLOCK') ||
                str_starts_with($line, 'DROP') || str_starts_with($line, 'SET') ||
                str_starts_with($line, 'ALTER') || str_starts_with($line, '/*!')) {
                continue;
            }

            // Skip CREATE TABLE block
            if (str_starts_with($line, 'CREATE TABLE')) {
                while (($skipLine = fgets($handle)) !== false) {
                    if (str_contains($skipLine, ';')) break;
                }
                continue;
            }

            // Detect INSERT INTO line
            if (preg_match('/^INSERT\s+INTO\s+`?auct_lots_xml_jp_op`?\s+VALUES\s*/i', $line)) {
                // Strip the INSERT INTO prefix, keep the values part
                $line = preg_replace('/^INSERT\s+INTO\s+`?auct_lots_xml_jp_op`?\s+VALUES\s*/i', '', $line);
            }

            // Process value tuples from this line
            if ($line !== '' && ($line[0] === '(' || $line[0] === ',')) {
                $line = ltrim($line, ', ');
                $tuples = $this->extractRowTuples($line);

                foreach ($tuples as $tuple) {
                    $values = $this->parseTupleValues($tuple);
                    if (count($values) < 46) continue;

                    $row = $this->mapPositionalToAssoc($values);
                    if (!$row) continue;

                    // Duplicate check: use combo of date + bid + auct_ref as unique key
                    $uniqueKey = $row['date'] . '_' . $row['bid'] . '_' . ($row['auct_ref'] ?? '');
                    $exists = DB::table('vehicle_details')
                        ->where('bid_number', $uniqueKey)
                        ->exists();
                    if ($exists) {
                        $stats['skipped']++;
                        continue;
                    }

                    $vehicle = $this->mapToVehicleDetail($row);
                    if (!$vehicle) continue;

                    try {
                        $stockNo = DB::table('vehicle_details')->insertGetId($vehicle);
                        $stats['vehicles']++;

                        // Process pictures from the pictures URLs field
                        $picCount = $this->importPicturesFromUrls($stockNo, $row['pictures'] ?? '', $stats);

                        if ($picCount > 0) {
                            $stats['new_stock_nos'][] = $stockNo;
                        }
                    } catch (\Throwable $e) {
                        Log::warning("Failed to insert vehicle", ['bid' => $row['bid'] ?? '', 'error' => $e->getMessage()]);
                    }

                    $lineCount++;
                    if ($lineCount % 5000 === 0) {
                        $this->info("  Processed {$lineCount} records ({$stats['vehicles']} new, {$stats['skipped']} skipped)...");
                    }
                }
            }
        }

        fclose($handle);
        $this->info("Parsing complete. Processed {$lineCount} total records.");
        return $stats;
    }

    private function mapPositionalToAssoc(array $values): ?array
    {
        $row = [];
        foreach (self::AUCTION_COLUMNS as $i => $col) {
            if (!isset($values[$i])) break;
            $val = trim($values[$i]);
            if (strtoupper($val) === 'NULL') {
                $row[$col] = null;
            } elseif (preg_match("/^'(.*)'$/s", $val, $m)) {
                $unescaped = str_replace("\\'", "'", $m[1]);
                $unescaped = str_replace('\\"', '"', $unescaped);
                $unescaped = str_replace('\\\\', '\\', $unescaped);
                $row[$col] = $unescaped;
            } else {
                $row[$col] = $val;
            }
        }
        return $row;
    }

    private function mapToVehicleDetail(array $row): ?array
    {
        $make = $row['company_en'] ?? $row['company'] ?? '';
        $model = $row['model_name_en'] ?? $row['model_name'] ?? '';

        if (!$make && !$model) return null;

        // Parse year
        $year = null;
        if (!empty($row['model_year_en']) && is_numeric($row['model_year_en'])) {
            $year = (int) $row['model_year_en'];
        }

        // Parse mileage
        $mileage = null;
        if (!empty($row['mileage_num']) && is_numeric($row['mileage_num'])) {
            $mileage = (int) $row['mileage_num'];
        }

        // Parse engine cc
        $engineCc = null;
        if (!empty($row['displacement_num']) && is_numeric($row['displacement_num'])) {
            $engineCc = (int) $row['displacement_num'];
        }

        // Parse price (start_price_num is in 万円 units from the raw number)
        $priceJpy = null;
        if (!empty($row['start_price_num']) && is_numeric($row['start_price_num'])) {
            $priceJpy = (float) $row['start_price_num'];
        }

        // Determine transmission
        $transmission = $row['transmission_en'] ?? $row['transmission'] ?? '';

        // Determine color
        $extColor = $row['color_en'] ?? $row['color'] ?? '';

        // Build title
        $grade = $row['model_grade_en'] ?? $row['model_grade'] ?? '';
        $title = trim("{$make} {$model} {$grade}");

        return [
            'user_profile_id' => 0,
            'stock_number' => '',
            'default_price' => 0,
            'price' => $priceJpy,
            'price_jpy' => $priceJpy ?? 0,
            'actual_price' => 0,
            'commission' => 0,
            'status' => 1,
            'display' => 1,
            'make' => $make,
            'maker' => $make,
            'model' => $model,
            'grade' => $grade,
            'mfg_year' => $year,
            'chassis_no' => $row['vin'] ?? '',
            'vin_number' => $row['vin'] ?? '',
            'mileage' => $mileage,
            'engine_cc' => $engineCc,
            'ext_color' => $extColor,
            'transmission' => $transmission,
            'model_code' => $row['model_type_en'] ?? $row['model_type'] ?? '',
            'auction_grade' => $row['scores_en'] ?? $row['scores'] ?? '',
            'veh_title' => $title,
            'auction' => $row['auction_system'] ?? '',
            'auction_system' => $row['auction_system'] ?? '',
            'auction_name' => $row['company_en'] ?? $row['company'] ?? '',
            'auction_date' => $row['date'] ?? '',
            'lot_no' => $row['bid'] ?? '',
            'bid_number' => $row['date'] . '_' . $row['bid'] . '_' . ($row['auct_ref'] ?? ''),
            'is_auction' => 1,
            'auc_import' => 1,
            'show_auc' => 1,
            'data_source' => 'ftp_jp_oneprice',
            'create_date' => now()->toDateTimeString(),
            'update_date' => now()->toDateTimeString(),
            'auc_pics' => $row['pictures'] ?? '',
        ];
    }

    private function importPicturesFromUrls(int $stockNo, string $picturesField, array &$stats): int
    {
        if (empty($picturesField)) return 0;

        // Pictures field contains URLs separated by #
        $urls = array_filter(explode('#', $picturesField));
        $count = 0;

        foreach ($urls as $i => $url) {
            $url = trim($url);
            if (empty($url)) continue;

            $pictureId = $i + 1;
            // Generate a filename from the URL
            $filename = "auc_{$stockNo}_{$pictureId}.jpg";

            try {
                DB::table('pictures')->insert([
                    'stock_no' => $stockNo,
                    'picture_id' => (string) $pictureId,
                    'picture_name' => $filename,
                    'picture_large' => $url,
                    'img_permission' => 1,
                    'flg' => 0,
                    'data_source' => 'ftp_jp_oneprice',
                    'upload_date' => now()->toDateString(),
                ]);
                $stats['pictures']++;
                $count++;
            } catch (\Throwable $e) {
                Log::warning("Failed to insert picture", ['stock_no' => $stockNo, 'error' => $e->getMessage()]);
            }
        }

        return $count;
    }

    private function extractRowTuples(string $input): array
    {
        $tuples = [];
        $depth = 0;
        $current = '';
        $inString = false;
        $escaped = false;

        for ($i = 0, $len = strlen($input); $i < $len; $i++) {
            $char = $input[$i];

            if ($escaped) {
                $current .= $char;
                $escaped = false;
                continue;
            }

            if ($char === '\\') {
                $current .= $char;
                $escaped = true;
                continue;
            }

            if ($inString) {
                $current .= $char;
                if ($char === '\'') {
                    $inString = false;
                }
                continue;
            }

            if ($char === '\'') {
                $inString = true;
                $current .= $char;
                continue;
            }

            if ($char === '(') {
                $depth++;
                if ($depth === 1) {
                    $current = '';
                    continue;
                }
            }

            if ($char === ')') {
                $depth--;
                if ($depth === 0) {
                    $tuples[] = $current;
                    $current = '';
                    continue;
                }
            }

            if ($depth > 0) {
                $current .= $char;
            }
        }

        return $tuples;
    }

    private function parseTupleValues(string $tuple): array
    {
        $values = [];
        $current = '';
        $inString = false;
        $escaped = false;

        for ($i = 0, $len = strlen($tuple); $i < $len; $i++) {
            $char = $tuple[$i];

            if ($escaped) {
                $current .= $char;
                $escaped = false;
                continue;
            }

            if ($char === '\\') {
                $escaped = true;
                $current .= $char;
                continue;
            }

            if ($inString) {
                $current .= $char;
                if ($char === '\'') {
                    // Check for '' escape
                    if ($i + 1 < $len && $tuple[$i + 1] === '\'') {
                        $current .= $tuple[++$i];
                        continue;
                    }
                    $inString = false;
                }
                continue;
            }

            if ($char === '\'') {
                $inString = true;
                $current .= $char;
                continue;
            }

            if ($char === ',') {
                $values[] = trim($current);
                $current = '';
                continue;
            }

            $current .= $char;
        }

        $values[] = trim($current);
        return $values;
    }

    private function processImages(array $stats): void
    {
        if (empty($stats['new_stock_nos'])) {
            $this->info('No new images to process.');
            return;
        }

        $this->info('Processing images for ' . count($stats['new_stock_nos']) . ' new vehicles...');
        $downloaded = 0;

        foreach ($stats['new_stock_nos'] as $stockNo) {
            $pictures = DB::table('pictures')
                ->where('stock_no', $stockNo)
                ->where('data_source', 'ftp_jp_oneprice')
                ->get();

            foreach ($pictures as $picture) {
                $this->downloadAndStoreImage($picture);
                $downloaded++;

                if ($downloaded % 100 === 0) {
                    $this->info("  Downloaded {$downloaded} images...");
                }
            }
        }

        $this->info("Image processing complete. {$downloaded} images processed.");
    }

    private function downloadAndStoreImage(object $picture): void
    {
        // picture_large contains the source URL for auction images
        $sourceUrl = $picture->picture_large;
        if (!$sourceUrl || !str_starts_with($sourceUrl, 'http')) {
            return;
        }

        $filename = $picture->picture_name;
        if (!$filename) return;

        try {
            $ch = curl_init($sourceUrl);
            curl_setopt_array($ch, [
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_SSL_VERIFYPEER => false,
            ]);
            $imageData = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);

            if (!$imageData || $httpCode !== 200) {
                return;
            }

            $isLocal = app()->environment('local');

            if ($isLocal) {
                Storage::disk('public')->put("auction-images/medium/{$filename}", $imageData);
            } else {
                $s3Path = config('auction-import.s3_image_path') . "/medium/{$filename}";
                Storage::disk('s3')->put($s3Path, $imageData, 'public');

                DB::table('pictures')
                    ->where('stock_no', $picture->stock_no)
                    ->where('picture_id', $picture->picture_id)
                    ->update([
                        'aws_copied' => 1,
                        'imgmove_aws_date' => now()->toDateString(),
                    ]);
            }
        } catch (\Throwable $e) {
            Log::warning("Failed to download image: {$sourceUrl}", ['error' => $e->getMessage()]);
        }
    }
}
