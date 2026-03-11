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
                stock_no INT PRIMARY KEY AUTO_INCREMENT,
                user_profile_id INT NOT NULL DEFAULT 0,
                stock_number TEXT DEFAULT NULL,
                default_price DOUBLE NOT NULL DEFAULT 0,
                price DOUBLE DEFAULT NULL,
                price_update_date TEXT DEFAULT NULL,
                actual_price DOUBLE NOT NULL DEFAULT 0,
                commission DOUBLE NOT NULL DEFAULT 0,
                buying_price DOUBLE DEFAULT NULL,
                consumption_tax TEXT DEFAULT NULL,
                status INT NOT NULL DEFAULT 0,
                display INT DEFAULT 1,
                location_id INT DEFAULT NULL,
                location TEXT DEFAULT NULL,
                port_id INT DEFAULT NULL,
                port TEXT DEFAULT NULL,
                new_used INT DEFAULT NULL,
                yard_id INT DEFAULT NULL,
                type_id INT DEFAULT NULL,
                subtype_id INT DEFAULT NULL,
                make_id INT DEFAULT NULL,
                maker_id INT DEFAULT NULL,
                model_id INT DEFAULT NULL,
                type TEXT DEFAULT NULL,
                subtype TEXT DEFAULT NULL,
                make TEXT DEFAULT NULL,
                maker TEXT DEFAULT NULL,
                model TEXT DEFAULT NULL,
                grade TEXT DEFAULT NULL,
                mfg_year INT DEFAULT NULL,
                mfg_month INT DEFAULT NULL,
                chassis_no TEXT DEFAULT NULL,
                mileage INT DEFAULT NULL,
                engine_cc INT DEFAULT NULL,
                drive TEXT DEFAULT NULL,
                grade_ext TEXT DEFAULT NULL,
                grade_int TEXT DEFAULT NULL,
                auction_grade TEXT DEFAULT NULL,
                doors TEXT DEFAULT NULL,
                seat_capacity TEXT DEFAULT NULL,
                fuel TEXT DEFAULT NULL,
                transmission TEXT DEFAULT NULL,
                model_code TEXT DEFAULT NULL,
                length INT DEFAULT NULL,
                width INT DEFAULT NULL,
                height INT DEFAULT NULL,
                weight INT DEFAULT NULL,
                m3 DOUBLE NOT NULL DEFAULT 0,
                purchase_date TEXT DEFAULT NULL,
                extend_date TEXT DEFAULT NULL,
                supplier_id INT DEFAULT NULL,
                spare_supplier_id INT NOT NULL DEFAULT 0,
                purchased_by INT DEFAULT NULL,
                requested_by INT NOT NULL DEFAULT 0,
                requested_reason INT NOT NULL DEFAULT 0,
                show_auc INT DEFAULT NULL,
                create_date TEXT DEFAULT NULL,
                update_date TEXT DEFAULT NULL,
                int_color TEXT DEFAULT NULL,
                ext_color TEXT DEFAULT NULL,
                wd TEXT DEFAULT NULL,
                other_option TEXT DEFAULT NULL,
                start_date TEXT DEFAULT NULL,
                close_date TEXT DEFAULT NULL,
                data_source TEXT DEFAULT NULL,
                confirm_time TEXT DEFAULT NULL,
                data_sites TEXT DEFAULT NULL,
                veh_title TEXT DEFAULT NULL,
                accident INT DEFAULT 0,
                vin_number TEXT DEFAULT NULL,
                ext_info_pos TEXT DEFAULT NULL,
                ext_info_pos_2 TEXT DEFAULT NULL,
                ext_info_neg TEXT DEFAULT NULL,
                sellArea TEXT DEFAULT NULL,
                is_tcv INT DEFAULT 0,
                export_area_id TEXT DEFAULT NULL,
                dead_stock TEXT DEFAULT NULL,
                is_spare TEXT DEFAULT NULL,
                watch_list_status INT NOT NULL DEFAULT 0,
                market_price DOUBLE NOT NULL DEFAULT 0,
                market_price_date TEXT DEFAULT NULL,
                customer_id INT NOT NULL DEFAULT 0,
                engine_type TEXT DEFAULT NULL,
                model_description TEXT DEFAULT NULL,
                engine_description TEXT DEFAULT NULL,
                transport_comp_id INT NOT NULL DEFAULT 0,
                cost_type_status INT NOT NULL DEFAULT 2,
                videoFor TEXT DEFAULT NULL,
                youtube_url TEXT DEFAULT NULL,
                is_auction INT NOT NULL DEFAULT 2,
                auction_system TEXT DEFAULT NULL,
                lot_no TEXT DEFAULT NULL,
                hall_name TEXT DEFAULT NULL,
                hall_location TEXT DEFAULT NULL,
                input_date TEXT DEFAULT NULL,
                jays_lk INT NOT NULL DEFAULT 2,
                total_price DOUBLE NOT NULL DEFAULT 0,
                price_jpy DOUBLE NOT NULL DEFAULT 0,
                quantity INT NOT NULL DEFAULT 1,
                currency INT NOT NULL DEFAULT 0,
                part_number TEXT DEFAULT NULL,
                description TEXT DEFAULT NULL,
                keyword_tag TEXT DEFAULT NULL,
                main_category_id INT NOT NULL DEFAULT 0,
                sub_category_id INT NOT NULL DEFAULT 0,
                sort_order INT NOT NULL DEFAULT 10,
                sold_shipped_30 INT NOT NULL DEFAULT 2,
                auction_name TEXT DEFAULT NULL,
                auction_charge DOUBLE NOT NULL DEFAULT 0,
                is_green_paper INT NOT NULL DEFAULT 2,
                purchased_by_value TEXT DEFAULT NULL,
                requested_by_value TEXT DEFAULT NULL,
                yard_id_value TEXT DEFAULT NULL,
                is_completed INT NOT NULL DEFAULT 1,
                country TEXT DEFAULT NULL,
                special_price DOUBLE NOT NULL DEFAULT 0,
                yard_date TEXT DEFAULT NULL,
                transport_company_id INT NOT NULL DEFAULT 0,
                transport_company TEXT DEFAULT NULL,
                remarks TEXT DEFAULT NULL,
                auction TEXT DEFAULT NULL,
                bid_number TEXT DEFAULT NULL,
                auction_date TEXT DEFAULT NULL,
                auc_import INT NOT NULL DEFAULT 0,
                img_copy INT NOT NULL DEFAULT 2,
                hit_counter INT NOT NULL DEFAULT 0,
                pics TEXT DEFAULT NULL,
                auc_pics TEXT DEFAULT NULL,
                enquiry_counter INT NOT NULL DEFAULT 0,
                customer_name TEXT DEFAULT NULL,
                is_import INT NOT NULL DEFAULT 2,
                mail_sent INT NOT NULL DEFAULT 2,
                checked_date TEXT DEFAULT NULL,
                yard_photo_count INT NOT NULL DEFAULT 0,
                uploaded_docs TEXT DEFAULT NULL,
                is_updated INT NOT NULL DEFAULT 2,
                check_spare_key INT NOT NULL DEFAULT 2,
                check_sd_card INT NOT NULL DEFAULT 2,
                remove_hard_copy INT NOT NULL DEFAULT 2,
                transport_comment TEXT DEFAULT NULL,
                re_auction INT NOT NULL DEFAULT 2,
                gp_mail_sent INT NOT NULL DEFAULT 2,
                gp_sent_date TEXT DEFAULT NULL,
                is_repair INT NOT NULL DEFAULT 2,
                is_repair_invoice INT NOT NULL DEFAULT 2,
                create_by INT NOT NULL DEFAULT 0,
                create_by_name TEXT DEFAULT NULL,
                update_by INT NOT NULL DEFAULT 0,
                update_by_name TEXT DEFAULT NULL,
                agasta_stock_no INT NOT NULL DEFAULT 0,
                agasta_stock_img TEXT DEFAULT NULL,
                to_be_delete INT NOT NULL DEFAULT 2,
                agasta_commission DOUBLE NOT NULL DEFAULT 0,
                agasta_price DOUBLE NOT NULL DEFAULT 0,
                office TEXT DEFAULT NULL,
                ass_ids TEXT DEFAULT NULL,
                ass_vals TEXT DEFAULT NULL,
                d_stock_number TEXT DEFAULT NULL,
                dealer_ref_no TEXT DEFAULT NULL,
                d_stock_no INT NOT NULL DEFAULT 0,
                sync_as TEXT DEFAULT NULL,
                reg_year INT NOT NULL DEFAULT 0,
                reg_month INT NOT NULL DEFAULT 0,
                customer_canceled INT NOT NULL DEFAULT 2,
                production_year INT NOT NULL DEFAULT 0,
                production_month INT NOT NULL DEFAULT 0,
                shaken_date TEXT DEFAULT NULL,
                send_to_recycle INT NOT NULL DEFAULT 2,
                autotax_date_of_apply TEXT DEFAULT NULL,
                autotax_apply INT NOT NULL DEFAULT 2,
                autotax_refund_amt INT NOT NULL DEFAULT 0,
                autotax_rcv_date TEXT DEFAULT NULL,
                autotax_completed INT NOT NULL DEFAULT 2,
                insurance_date_of_apply TEXT DEFAULT NULL,
                insurance_apply INT NOT NULL DEFAULT 2,
                insurance_refund_amt INT NOT NULL DEFAULT 0,
                insurance_rcv_date TEXT DEFAULT NULL,
                insurance_completed INT NOT NULL DEFAULT 2,
                radiation_date_of_apply TEXT DEFAULT NULL,
                radiation_apply INT NOT NULL DEFAULT 2,
                radiation_refund_amt INT NOT NULL DEFAULT 0,
                radiation_rcv_date TEXT DEFAULT NULL,
                radiation_completed INT NOT NULL DEFAULT 2,
                non_radiation INT NOT NULL DEFAULT 2,
                bando_stock INT NOT NULL DEFAULT 2,
                autotax_fax_auction INT NOT NULL DEFAULT 2,
                autotax_application_poa INT NOT NULL DEFAULT 2,
                autotax_certificate_seal INT NOT NULL DEFAULT 2,
                cert_autotax_payment INT NOT NULL DEFAULT 2,
                liability_insurance INT NOT NULL DEFAULT 2,
                date_of_entry TEXT DEFAULT NULL,
                numbers_of_months_remaining INT NOT NULL DEFAULT 0,
                date_of_expiry TEXT DEFAULT NULL,
                radiation_insu_no TEXT DEFAULT NULL,
                radiation_insu_company TEXT DEFAULT NULL,
                radiation_insu_reg_no TEXT DEFAULT NULL,
                aucnet_img_status INT NOT NULL DEFAULT 2,
                pic_status INT NOT NULL DEFAULT 2,
                admin_comment TEXT DEFAULT NULL,
                end_date TEXT DEFAULT NULL,
                arai_img_status INT NOT NULL DEFAULT 2,
                arai_img_check_date TEXT DEFAULT NULL,
                bl_sent_copy INT NOT NULL DEFAULT 0,
                good_value INT NOT NULL DEFAULT 0,
                img_restored INT NOT NULL DEFAULT 1,
                check_one_price_del INT NOT NULL DEFAULT 2,
                sent_for_srilanka INT NOT NULL DEFAULT 0
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ");

        $sqlPath = database_path('seeders/sql/vehicle_details.sql');
        $this->command->info('Loading vehicle_details data from SQL file in chunks...');

        $this->importLargeSqlFile($sqlPath, 'vehicle_details');

        DB::unprepared("CREATE INDEX idx_vd_stock_number ON vehicle_details(stock_number(50));");
        DB::unprepared("CREATE INDEX idx_vd_display ON vehicle_details(display);");
        DB::unprepared("CREATE INDEX idx_vd_status ON vehicle_details(status);");
        DB::unprepared("CREATE INDEX idx_vd_make ON vehicle_details(make(50));");
        DB::unprepared("CREATE INDEX idx_vd_fuel ON vehicle_details(fuel(50));");
        DB::unprepared("CREATE INDEX idx_vd_create_date ON vehicle_details(create_date(32));");
        DB::unprepared("CREATE INDEX idx_vd_display_status_date ON vehicle_details(display, status, create_date(32));");

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
        $sql = "INSERT INTO `{$tableName}` VALUES\n{$values};";
        DB::unprepared($sql);
    }
}
