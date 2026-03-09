<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class VehicleDetailSeeder extends Seeder
{
    public function run(): void
    {
        Schema::dropIfExists('vehicle_details');

        DB::unprepared("
            CREATE TABLE vehicle_details (
                stock_no INTEGER PRIMARY KEY AUTOINCREMENT,
                user_profile_id INTEGER NOT NULL DEFAULT 0,
                stock_number TEXT DEFAULT NULL,
                default_price REAL NOT NULL DEFAULT 0,
                price REAL DEFAULT NULL,
                price_update_date TEXT NOT NULL DEFAULT '',
                actual_price REAL NOT NULL DEFAULT 0,
                commission REAL NOT NULL DEFAULT 0,
                buying_price REAL DEFAULT NULL,
                consumption_tax TEXT DEFAULT NULL,
                status INTEGER NOT NULL DEFAULT 0,
                display INTEGER DEFAULT 1,
                location_id INTEGER DEFAULT NULL,
                location TEXT DEFAULT NULL,
                port_id INTEGER DEFAULT NULL,
                port TEXT DEFAULT NULL,
                new_used INTEGER DEFAULT NULL,
                yard_id INTEGER DEFAULT NULL,
                type_id INTEGER DEFAULT NULL,
                subtype_id INTEGER DEFAULT NULL,
                make_id INTEGER DEFAULT NULL,
                maker_id INTEGER DEFAULT NULL,
                model_id INTEGER DEFAULT NULL,
                type TEXT DEFAULT NULL,
                subtype TEXT DEFAULT NULL,
                make TEXT DEFAULT NULL,
                maker TEXT DEFAULT NULL,
                model TEXT DEFAULT NULL,
                grade TEXT DEFAULT NULL,
                mfg_year INTEGER DEFAULT NULL,
                mfg_month INTEGER DEFAULT NULL,
                chassis_no TEXT DEFAULT NULL,
                mileage INTEGER DEFAULT NULL,
                engine_cc INTEGER DEFAULT NULL,
                drive TEXT DEFAULT NULL,
                grade_ext TEXT DEFAULT '',
                grade_int TEXT DEFAULT '',
                auction_grade TEXT DEFAULT '',
                doors TEXT DEFAULT NULL,
                seat_capacity TEXT DEFAULT NULL,
                fuel TEXT DEFAULT NULL,
                transmission TEXT DEFAULT NULL,
                model_code TEXT NOT NULL DEFAULT '',
                length INTEGER DEFAULT NULL,
                width INTEGER DEFAULT NULL,
                height INTEGER DEFAULT NULL,
                weight INTEGER DEFAULT NULL,
                m3 REAL NOT NULL DEFAULT 0,
                purchase_date TEXT DEFAULT NULL,
                extend_date TEXT NOT NULL DEFAULT '',
                supplier_id INTEGER DEFAULT NULL,
                spare_supplier_id INTEGER NOT NULL DEFAULT 0,
                purchased_by INTEGER DEFAULT NULL,
                requested_by INTEGER NOT NULL DEFAULT 0,
                requested_reason INTEGER NOT NULL DEFAULT 0,
                show_auc INTEGER DEFAULT NULL,
                create_date TEXT DEFAULT NULL,
                update_date TEXT DEFAULT NULL,
                int_color TEXT DEFAULT NULL,
                ext_color TEXT DEFAULT NULL,
                wd TEXT DEFAULT '0',
                other_option TEXT DEFAULT NULL,
                start_date TEXT DEFAULT NULL,
                close_date TEXT NOT NULL DEFAULT '',
                data_source TEXT DEFAULT NULL,
                confirm_time TEXT DEFAULT NULL,
                data_sites TEXT DEFAULT '',
                veh_title TEXT DEFAULT '',
                accident INTEGER DEFAULT 0,
                vin_number TEXT DEFAULT '',
                ext_info_pos TEXT DEFAULT '',
                ext_info_pos_2 TEXT NOT NULL DEFAULT '',
                ext_info_neg TEXT DEFAULT '',
                sellArea TEXT DEFAULT '',
                is_tcv INTEGER DEFAULT 0,
                export_area_id TEXT DEFAULT '',
                dead_stock TEXT NOT NULL DEFAULT '0',
                is_spare TEXT NOT NULL DEFAULT '0',
                watch_list_status INTEGER NOT NULL DEFAULT 0,
                market_price REAL NOT NULL DEFAULT 0,
                market_price_date TEXT NOT NULL DEFAULT '',
                customer_id INTEGER NOT NULL DEFAULT 0,
                engine_type TEXT NOT NULL DEFAULT '',
                model_description TEXT NOT NULL DEFAULT '',
                engine_description TEXT NOT NULL DEFAULT '',
                transport_comp_id INTEGER NOT NULL DEFAULT 0,
                cost_type_status INTEGER NOT NULL DEFAULT 2,
                videoFor TEXT NOT NULL DEFAULT '',
                youtube_url TEXT NOT NULL DEFAULT '',
                is_auction INTEGER NOT NULL DEFAULT 2,
                auction_system TEXT NOT NULL DEFAULT '',
                lot_no TEXT NOT NULL DEFAULT '',
                hall_name TEXT NOT NULL DEFAULT '',
                hall_location TEXT NOT NULL DEFAULT '',
                input_date TEXT NOT NULL DEFAULT '',
                jays_lk INTEGER NOT NULL DEFAULT 2,
                total_price REAL NOT NULL DEFAULT 0,
                price_jpy REAL NOT NULL DEFAULT 0,
                quantity INTEGER NOT NULL DEFAULT 1,
                currency INTEGER NOT NULL DEFAULT 0,
                part_number TEXT NOT NULL DEFAULT '',
                description TEXT NOT NULL DEFAULT '',
                keyword_tag TEXT NOT NULL DEFAULT '',
                main_category_id INTEGER NOT NULL DEFAULT 0,
                sub_category_id INTEGER NOT NULL DEFAULT 0,
                sort_order INTEGER NOT NULL DEFAULT 10,
                sold_shipped_30 INTEGER NOT NULL DEFAULT 2,
                auction_name TEXT NOT NULL DEFAULT '',
                auction_charge REAL NOT NULL DEFAULT 0,
                is_green_paper INTEGER NOT NULL DEFAULT 2,
                purchased_by_value TEXT NOT NULL DEFAULT '',
                requested_by_value TEXT NOT NULL DEFAULT '',
                yard_id_value TEXT NOT NULL DEFAULT '',
                is_completed INTEGER NOT NULL DEFAULT 1,
                country TEXT NOT NULL DEFAULT '',
                special_price REAL NOT NULL DEFAULT 0,
                yard_date TEXT NOT NULL DEFAULT '',
                transport_company_id INTEGER NOT NULL DEFAULT 0,
                transport_company TEXT NOT NULL DEFAULT '',
                remarks TEXT NOT NULL DEFAULT '',
                auction TEXT NOT NULL DEFAULT '',
                bid_number TEXT NOT NULL DEFAULT '',
                auction_date TEXT NOT NULL DEFAULT '',
                auc_import INTEGER NOT NULL DEFAULT 0,
                img_copy INTEGER NOT NULL DEFAULT 2,
                hit_counter INTEGER NOT NULL DEFAULT 0,
                pics TEXT NOT NULL DEFAULT '',
                auc_pics TEXT NOT NULL DEFAULT '',
                enquiry_counter INTEGER NOT NULL DEFAULT 0,
                customer_name TEXT NOT NULL DEFAULT '',
                is_import INTEGER NOT NULL DEFAULT 2,
                mail_sent INTEGER NOT NULL DEFAULT 2,
                checked_date TEXT NOT NULL DEFAULT '',
                yard_photo_count INTEGER NOT NULL DEFAULT 0,
                uploaded_docs TEXT NOT NULL DEFAULT '',
                is_updated INTEGER NOT NULL DEFAULT 2,
                check_spare_key INTEGER NOT NULL DEFAULT 2,
                check_sd_card INTEGER NOT NULL DEFAULT 2,
                remove_hard_copy INTEGER NOT NULL DEFAULT 2,
                transport_comment TEXT NOT NULL DEFAULT '',
                re_auction INTEGER NOT NULL DEFAULT 2,
                gp_mail_sent INTEGER NOT NULL DEFAULT 2,
                gp_sent_date TEXT NOT NULL DEFAULT '',
                is_repair INTEGER NOT NULL DEFAULT 2,
                is_repair_invoice INTEGER NOT NULL DEFAULT 2,
                create_by INTEGER NOT NULL DEFAULT 0,
                create_by_name TEXT NOT NULL DEFAULT '',
                update_by INTEGER NOT NULL DEFAULT 0,
                update_by_name TEXT NOT NULL DEFAULT '',
                agasta_stock_no INTEGER NOT NULL DEFAULT 0,
                agasta_stock_img TEXT NOT NULL DEFAULT '',
                to_be_delete INTEGER NOT NULL DEFAULT 2,
                agasta_commission REAL NOT NULL DEFAULT 0,
                agasta_price REAL NOT NULL DEFAULT 0,
                office TEXT NOT NULL DEFAULT '',
                ass_ids TEXT NOT NULL DEFAULT '',
                ass_vals TEXT NOT NULL DEFAULT '',
                d_stock_number TEXT NOT NULL DEFAULT '',
                dealer_ref_no TEXT NOT NULL DEFAULT '',
                d_stock_no INTEGER NOT NULL DEFAULT 0,
                sync_as TEXT NOT NULL DEFAULT '',
                reg_year INTEGER NOT NULL DEFAULT 0,
                reg_month INTEGER NOT NULL DEFAULT 0,
                customer_canceled INTEGER NOT NULL DEFAULT 2,
                production_year INTEGER NOT NULL DEFAULT 0,
                production_month INTEGER NOT NULL DEFAULT 0,
                shaken_date TEXT NOT NULL DEFAULT '',
                send_to_recycle INTEGER NOT NULL DEFAULT 2,
                autotax_date_of_apply TEXT NOT NULL DEFAULT '',
                autotax_apply INTEGER NOT NULL DEFAULT 2,
                autotax_refund_amt INTEGER NOT NULL DEFAULT 0,
                autotax_rcv_date TEXT NOT NULL DEFAULT '',
                autotax_completed INTEGER NOT NULL DEFAULT 2,
                insurance_date_of_apply TEXT NOT NULL DEFAULT '',
                insurance_apply INTEGER NOT NULL DEFAULT 2,
                insurance_refund_amt INTEGER NOT NULL DEFAULT 0,
                insurance_rcv_date TEXT NOT NULL DEFAULT '',
                insurance_completed INTEGER NOT NULL DEFAULT 2,
                radiation_date_of_apply TEXT NOT NULL DEFAULT '',
                radiation_apply INTEGER NOT NULL DEFAULT 2,
                radiation_refund_amt INTEGER NOT NULL DEFAULT 0,
                radiation_rcv_date TEXT NOT NULL DEFAULT '',
                radiation_completed INTEGER NOT NULL DEFAULT 2,
                non_radiation INTEGER NOT NULL DEFAULT 2,
                bando_stock INTEGER NOT NULL DEFAULT 2,
                autotax_fax_auction INTEGER NOT NULL DEFAULT 2,
                autotax_application_poa INTEGER NOT NULL DEFAULT 2,
                autotax_certificate_seal INTEGER NOT NULL DEFAULT 2,
                cert_autotax_payment INTEGER NOT NULL DEFAULT 2,
                liability_insurance INTEGER NOT NULL DEFAULT 2,
                date_of_entry TEXT NOT NULL DEFAULT '',
                numbers_of_months_remaining INTEGER NOT NULL DEFAULT 0,
                date_of_expiry TEXT NOT NULL DEFAULT '',
                radiation_insu_no TEXT NOT NULL DEFAULT '',
                radiation_insu_company TEXT NOT NULL DEFAULT '',
                radiation_insu_reg_no TEXT NOT NULL DEFAULT '',
                aucnet_img_status INTEGER NOT NULL DEFAULT 2,
                pic_status INTEGER NOT NULL DEFAULT 2,
                admin_comment TEXT NOT NULL DEFAULT '',
                end_date TEXT NOT NULL DEFAULT '',
                arai_img_status INTEGER NOT NULL DEFAULT 2,
                arai_img_check_date TEXT NOT NULL DEFAULT '',
                bl_sent_copy INTEGER NOT NULL DEFAULT 0,
                good_value INTEGER NOT NULL DEFAULT 0,
                img_restored INTEGER NOT NULL DEFAULT 1,
                check_one_price_del INTEGER NOT NULL DEFAULT 2,
                sent_for_srilanka INTEGER NOT NULL DEFAULT 0
            );
        ");

        $sqlPath = database_path('seeders/sql/vehicle_details.sql');
        $this->command->info('Loading vehicle_details data from SQL file in chunks...');

        $this->importLargeSqlFile($sqlPath, 'vehicle_details');

        DB::unprepared("CREATE INDEX idx_vd_stock_number ON vehicle_details(stock_number);");
        DB::unprepared("CREATE INDEX idx_vd_display ON vehicle_details(display);");
        DB::unprepared("CREATE INDEX idx_vd_status ON vehicle_details(status);");
        DB::unprepared("CREATE INDEX idx_vd_make ON vehicle_details(make);");
        DB::unprepared("CREATE INDEX idx_vd_fuel ON vehicle_details(fuel);");
        DB::unprepared("CREATE INDEX idx_vd_create_date ON vehicle_details(create_date);");
        DB::unprepared("CREATE INDEX idx_vd_display_status_date ON vehicle_details(display, status, create_date);");

        $count = DB::table('vehicle_details')->count();
        $this->command->info("Seeded {$count} vehicle_details records.");
    }

    private function importLargeSqlFile(string $filePath, string $tableName): void
    {
        $handle = fopen($filePath, 'r');
        if (!$handle) {
            throw new \RuntimeException("Cannot open file: {$filePath}");
        }

        $batchSize = 200;
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

            // Convert MySQL \' to SQLite ''
            $row = str_replace('\\\\', '{{BSLASH}}', $row);
            $row = str_replace("\\'", "''", $row);
            $row = str_replace('{{BSLASH}}', '\\', $row);

            $rows[] = $row;

            if (count($rows) >= $batchSize) {
                $this->insertBatch($tableName, $rows);
                $totalInserted += count($rows);
                $rows = [];

                if ($totalInserted % 10000 === 0) {
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
        $sql = "INSERT INTO \"{$tableName}\" VALUES\n{$values};";
        DB::unprepared($sql);
    }
}
