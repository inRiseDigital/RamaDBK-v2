<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class SparePartsDetailSeeder extends Seeder
{
    public function run(): void
    {
        Schema::dropIfExists('spare_parts_details');

        DB::unprepared("
            CREATE TABLE spare_parts_details (
                s_no INT PRIMARY KEY AUTO_INCREMENT,
                stock_no INT NOT NULL DEFAULT 0,
                part_number VARCHAR(255) NOT NULL DEFAULT '',
                description TEXT NULL,
                keyword_tag VARCHAR(255) NOT NULL DEFAULT '',
                main_category_id INT NOT NULL DEFAULT 0,
                sub_category_id INT NOT NULL DEFAULT 0
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ");

        $sqlPath = database_path('seeders/sql/spare_parts_details.sql');
        $this->command->info('Loading spare_parts_details data from SQL file...');

        $sql = file_get_contents($sqlPath);
        $sql = $this->cleanSql($sql);
        DB::unprepared($sql);

        $count = DB::table('spare_parts_details')->count();
        $this->command->info("Seeded {$count} spare_parts_details records.");
    }

    private function cleanSql(string $sql): string
    {
        $sql = preg_replace('/^LOCK TABLES.*;\s*$/m', '', $sql);
        $sql = preg_replace('/^UNLOCK TABLES.*;\s*$/m', '', $sql);
        $sql = preg_replace('/\/\*!\d+[^*]*\*\/;?/s', '', $sql);
        return trim($sql);
    }
}
