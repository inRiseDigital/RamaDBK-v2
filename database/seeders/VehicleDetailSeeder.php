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
                stock_number VARCHAR(50) DEFAULT NULL,
                default_price DOUBLE NOT NULL DEFAULT 0,
                price DOUBLE DEFAULT NULL,
                price_update_date VARCHAR(32) NOT NULL DEFAULT '',
                actual_price DOUBLE NOT NULL DEFAULT 0,
                commission DOUBLE NOT NULL DEFAULT 0,
                buying_price DOUBLE DEFAULT NULL,
                consumption_tax VARCHAR(50) DEFAULT NULL,
                status INT NOT NULL DEFAULT 0,
                display INT DEFAULT 1,
                location_id INT DEFAULT NULL,
                location VARCHAR(100) DEFAULT NULL,
                port_id INT DEFAULT NULL,
                port VARCHAR(100) DEFAULT NULL,
                new_used INT DEFAULT NULL,
                yard_id INT DEFAULT NULL,
                type_id INT DEFAULT NULL,
                subtype_id INT DEFAULT NULL,
                make_id INT DEFAULT NULL,
                maker_id INT DEFAULT NULL,
                model_id INT DEFAULT NULL,
                type VARCHAR(100) DEFAULT NULL,
                subtype VARCHAR(100) DEFAULT NULL,
                make VARCHAR(100) DEFAULT NULL,
                maker VARCHAR(100) DEFAULT NULL,
                model VARCHAR(100) DEFAULT NULL,
                grade VARCHAR(100) DEFAULT NULL,
                mfg_year INT DEFAULT NULL,
                mfg_month INT DEFAULT NULL,
                chassis_no VARCHAR(50) DEFAULT NULL,
                mileage INT DEFAULT NULL,
                engine_cc INT DEFAULT NULL,
                drive VARCHAR(50) DEFAULT NULL,
                grade_ext VARCHAR(50) DEFAULT '',
                grade_int VARCHAR(50) DEFAULT '',
                auction_grade VARCHAR(50) DEFAULT '',
                doors VARCHAR(20) DEFAULT NULL,
                seat_capacity VARCHAR(20) DEFAULT NULL,
                fuel VARCHAR(50) DEFAULT NULL,
                transmission VARCHAR(50) DEFAULT NULL,
                model_code VARCHAR(100) NOT NULL DEFAULT '',
                length INT DEFAULT NULL,
                width INT DEFAULT NULL,
                height INT DEFAULT NULL,
                weight INT DEFAULT NULL,
                m3 DOUBLE NOT NULL DEFAULT 0,
                purchase_date VARCHAR(32) DEFAULT NULL,
                extend_date VARCHAR(32) NOT NULL DEFAULT '',
                supplier_id INT DEFAULT NULL,
                spare_supplier_id INT NOT NULL DEFAULT 0,
                purchased_by INT DEFAULT NULL,
                requested_by INT NOT NULL DEFAULT 0,
                requested_reason INT NOT NULL DEFAULT 0,
                show_auc INT DEFAULT NULL,
                create_date VARCHAR(32) DEFAULT NULL,
                update_date VARCHAR(32) DEFAULT NULL,
                int_color VARCHAR(50) DEFAULT NULL,
                ext_color VARCHAR(50) DEFAULT NULL,
                wd VARCHAR(10) DEFAULT '0',
                other_option TEXT DEFAULT NULL,
                start_date VARCHAR(32) DEFAULT NULL,
                close_date VARCHAR(32) NOT NULL DEFAULT '',
                data_source VARCHAR(50) DEFAULT NULL,
                confirm_time VARCHAR(32) DEFAULT NULL,
                data_sites VARCHAR(100) DEFAULT '',
                veh_title VARCHAR(255) DEFAULT '',
                accident INT DEFAULT 0,
                vin_number VARCHAR(50) DEFAULT '',
                ext_info_pos TEXT DEFAULT NULL,
                ext_info_pos_2 TEXT NULL,
                ext_info_neg TEXT DEFAULT NULL,
                sellArea VARCHAR(100) DEFAULT '',
                is_tcv INT DEFAULT 0,
                export_area_id VARCHAR(100) DEFAULT '',
                dead_stock VARCHAR(10) NOT NULL DEFAULT '0',
                is_spare VARCHAR(10) NOT NULL DEFAULT '0',
                watch_list_status INT NOT NULL DEFAULT 0,
                market_price DOUBLE NOT NULL DEFAULT 0,
                market_price_date VARCHAR(32) NOT NULL DEFAULT '',
                customer_id INT NOT NULL DEFAULT 0,
                engine_type VARCHAR(100) NOT NULL DEFAULT '',
                model_description VARCHAR(255) NOT NULL DEFAULT '',
                engine_description VARCHAR(255) NOT NULL DEFAULT '',
                transport_comp_id INT NOT NULL DEFAULT 0,
                cost_type_status INT NOT NULL DEFAULT 2,
                videoFor VARCHAR(100) NOT NULL DEFAULT '',
                youtube_url TEXT NULL,
                is_auction INT NOT NULL DEFAULT 2,
                auction_system VARCHAR(100) NOT NULL DEFAULT '',
                lot_no VARCHAR(50) NOT NULL DEFAULT '',
                hall_name VARCHAR(100) NOT NULL DEFAULT '',
                hall_location VARCHAR(100) NOT NULL DEFAULT '',
                input_date VARCHAR(32) NOT NULL DEFAULT '',
                jays_lk INT NOT NULL DEFAULT 2,
                total_price DOUBLE NOT NULL DEFAULT 0,
                price_jpy DOUBLE NOT NULL DEFAULT 0,
                quantity INT NOT NULL DEFAULT 1,
                currency INT NOT NULL DEFAULT 0,
                part_number VARCHAR(100) NOT NULL DEFAULT '',
                description TEXT NULL,
                keyword_tag VARCHAR(255) NOT NULL DEFAULT '',
                main_category_id INT NOT NULL DEFAULT 0,
                sub_category_id INT NOT NULL DEFAULT 0,
                sort_order INT NOT NULL DEFAULT 10,
                sold_shipped_30 INT NOT NULL DEFAULT 2,
                auction_name VARCHAR(100) NOT NULL DEFAULT '',
                auction_charge DOUBLE NOT NULL DEFAULT 0,
                is_green_paper INT NOT NULL DEFAULT 2,
                purchased_by_value VARCHAR(100) NOT NULL DEFAULT '',
                requested_by_value VARCHAR(100) NOT NULL DEFAULT '',
                yard_id_value VARCHAR(100) NOT NULL DEFAULT '',
                is_completed INT NOT NULL DEFAULT 1,
                country VARCHAR(100) NOT NULL DEFAULT '',
                special_price DOUBLE NOT NULL DEFAULT 0,
                yard_date VARCHAR(32) NOT NULL DEFAULT '',
                transport_company_id INT NOT NULL DEFAULT 0,
                transport_company VARCHAR(100) NOT NULL DEFAULT '',
                remarks TEXT NULL,
                auction VARCHAR(100) NOT NULL DEFAULT '',
                bid_number VARCHAR(100) NOT NULL DEFAULT '',
                auction_date VARCHAR(32) NOT NULL DEFAULT '',
                auc_import INT NOT NULL DEFAULT 0,
                img_copy INT NOT NULL DEFAULT 2,
                hit_counter INT NOT NULL DEFAULT 0,
                pics TEXT NULL,
                auc_pics TEXT NULL,
                enquiry_counter INT NOT NULL DEFAULT 0,
                customer_name VARCHAR(100) NOT NULL DEFAULT '',
                is_import INT NOT NULL DEFAULT 2,
                mail_sent INT NOT NULL DEFAULT 2,
                checked_date VARCHAR(32) NOT NULL DEFAULT '',
                yard_photo_count INT NOT NULL DEFAULT 0,
                uploaded_docs TEXT NULL,
                is_updated INT NOT NULL DEFAULT 2,
                check_spare_key INT NOT NULL DEFAULT 2,
                check_sd_card INT NOT NULL DEFAULT 2,
                remove_hard_copy INT NOT NULL DEFAULT 2,
                transport_comment TEXT NULL,
                re_auction INT NOT NULL DEFAULT 2,
                gp_mail_sent INT NOT NULL DEFAULT 2,
                gp_sent_date VARCHAR(32) NOT NULL DEFAULT '',
                is_repair INT NOT NULL DEFAULT 2,
                is_repair_invoice INT NOT NULL DEFAULT 2,
                create_by INT NOT NULL DEFAULT 0,
                create_by_name VARCHAR(100) NOT NULL DEFAULT '',
                update_by INT NOT NULL DEFAULT 0,
                update_by_name VARCHAR(100) NOT NULL DEFAULT '',
                agasta_stock_no INT NOT NULL DEFAULT 0,
                agasta_stock_img VARCHAR(255) NOT NULL DEFAULT '',
                to_be_delete INT NOT NULL DEFAULT 2,
                agasta_commission DOUBLE NOT NULL DEFAULT 0,
                agasta_price DOUBLE NOT NULL DEFAULT 0,
                office VARCHAR(50) NOT NULL DEFAULT '',
                ass_ids TEXT NULL,
                ass_vals TEXT NULL,
                d_stock_number VARCHAR(50) NOT NULL DEFAULT '',
                dealer_ref_no VARCHAR(50) NOT NULL DEFAULT '',
                d_stock_no INT NOT NULL DEFAULT 0,
                sync_as VARCHAR(50) NOT NULL DEFAULT '',
                reg_year INT NOT NULL DEFAULT 0,
                reg_month INT NOT NULL DEFAULT 0,
                customer_canceled INT NOT NULL DEFAULT 2,
                production_year INT NOT NULL DEFAULT 0,
                production_month INT NOT NULL DEFAULT 0,
                shaken_date VARCHAR(32) NOT NULL DEFAULT '',
                send_to_recycle INT NOT NULL DEFAULT 2,
                autotax_date_of_apply VARCHAR(32) NOT NULL DEFAULT '',
                autotax_apply INT NOT NULL DEFAULT 2,
                autotax_refund_amt INT NOT NULL DEFAULT 0,
                autotax_rcv_date VARCHAR(32) NOT NULL DEFAULT '',
                autotax_completed INT NOT NULL DEFAULT 2,
                insurance_date_of_apply VARCHAR(32) NOT NULL DEFAULT '',
                insurance_apply INT NOT NULL DEFAULT 2,
                insurance_refund_amt INT NOT NULL DEFAULT 0,
                insurance_rcv_date VARCHAR(32) NOT NULL DEFAULT '',
                insurance_completed INT NOT NULL DEFAULT 2,
                radiation_date_of_apply VARCHAR(32) NOT NULL DEFAULT '',
                radiation_apply INT NOT NULL DEFAULT 2,
                radiation_refund_amt INT NOT NULL DEFAULT 0,
                radiation_rcv_date VARCHAR(32) NOT NULL DEFAULT '',
                radiation_completed INT NOT NULL DEFAULT 2,
                non_radiation INT NOT NULL DEFAULT 2,
                bando_stock INT NOT NULL DEFAULT 2,
                autotax_fax_auction INT NOT NULL DEFAULT 2,
                autotax_application_poa INT NOT NULL DEFAULT 2,
                autotax_certificate_seal INT NOT NULL DEFAULT 2,
                cert_autotax_payment INT NOT NULL DEFAULT 2,
                liability_insurance INT NOT NULL DEFAULT 2,
                date_of_entry VARCHAR(32) NOT NULL DEFAULT '',
                numbers_of_months_remaining INT NOT NULL DEFAULT 0,
                date_of_expiry VARCHAR(32) NOT NULL DEFAULT '',
                radiation_insu_no VARCHAR(50) NOT NULL DEFAULT '',
                radiation_insu_company VARCHAR(100) NOT NULL DEFAULT '',
                radiation_insu_reg_no VARCHAR(50) NOT NULL DEFAULT '',
                aucnet_img_status INT NOT NULL DEFAULT 2,
                pic_status INT NOT NULL DEFAULT 2,
                admin_comment TEXT NULL,
                end_date VARCHAR(32) NOT NULL DEFAULT '',
                arai_img_status INT NOT NULL DEFAULT 2,
                arai_img_check_date VARCHAR(32) NOT NULL DEFAULT '',
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
