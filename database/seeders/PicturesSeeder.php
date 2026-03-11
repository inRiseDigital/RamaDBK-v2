<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class PicturesSeeder extends Seeder
{
    public function run(): void
    {
        Schema::dropIfExists('pictures');

        DB::unprepared("
            CREATE TABLE pictures (
                stock_no VARCHAR(255) NOT NULL DEFAULT '',
                picture_id VARCHAR(255) NOT NULL DEFAULT '',
                picture_name VARCHAR(255) DEFAULT NULL,
                picture_large VARCHAR(255) NOT NULL DEFAULT '',
                img_permission INT DEFAULT 1,
                flg INT NOT NULL DEFAULT 0,
                img_for_jctjson INT NOT NULL DEFAULT 2,
                imgmove_aws_date VARCHAR(255) NOT NULL DEFAULT '',
                pic_copy_date VARCHAR(255) NOT NULL DEFAULT '',
                img_restored INT NOT NULL DEFAULT 1,
                aws_copied INT NOT NULL DEFAULT 2,
                data_source VARCHAR(255) NOT NULL DEFAULT '',
                upload_date VARCHAR(255) NOT NULL DEFAULT ''
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ");

        $sqlPath = database_path('seeders/sql/pictures.sql');
        $this->command->info('Loading pictures data from SQL file in chunks...');

        $this->importLargeSqlFile($sqlPath, 'pictures');

        DB::unprepared("CREATE INDEX idx_pic_stock_no ON pictures(stock_no);");
        DB::unprepared("CREATE INDEX idx_pic_stock_picture ON pictures(stock_no, picture_id);");
        DB::unprepared("CREATE INDEX idx_pic_stock_permission ON pictures(stock_no, img_permission);");

        $count = DB::table('pictures')->count();
        $this->command->info("Seeded {$count} pictures records.");
    }

    private function importLargeSqlFile(string $filePath, string $tableName): void
    {
        $handle = fopen($filePath, 'r');
        if (!$handle) {
            throw new \RuntimeException("Cannot open file: {$filePath}");
        }

        $batchSize = 500;
        $rows = [];
        $totalInserted = 0;

        while (($line = fgets($handle)) !== false) {
            $line = trim($line);

            // Skip non-data lines
            if ($line === '' ||
                str_starts_with($line, 'LOCK TABLES') ||
                str_starts_with($line, 'UNLOCK TABLES') ||
                str_starts_with($line, '/*!') ||
                str_starts_with($line, 'INSERT INTO')) {
                continue;
            }

            // Strip trailing comma and semicolon from each row
            $row = rtrim($line, ',;');

            $rows[] = $row;

            if (count($rows) >= $batchSize) {
                $this->insertBatch($tableName, $rows);
                $totalInserted += count($rows);
                $rows = [];

                if ($totalInserted % 50000 === 0) {
                    $this->command->info("  Inserted {$totalInserted} rows...");
                }
            }
        }

        if (!empty($rows)) {
            $this->insertBatch($tableName, $rows);
            $totalInserted += count($rows);
        }

        fclose($handle);
        $this->command->info("  Total inserted: {$totalInserted} rows.");
    }

    private function insertBatch(string $tableName, array $rows): void
    {
        $values = implode(",\n", $rows);
        $sql = "INSERT INTO `{$tableName}` VALUES\n{$values};";
        DB::unprepared($sql);
    }
}
