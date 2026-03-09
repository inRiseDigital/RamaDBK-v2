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
                s_no INTEGER PRIMARY KEY AUTOINCREMENT,
                stock_no INTEGER NOT NULL DEFAULT 0,
                part_number TEXT NOT NULL DEFAULT '',
                description TEXT NOT NULL DEFAULT '',
                keyword_tag TEXT NOT NULL DEFAULT '',
                main_category_id INTEGER NOT NULL DEFAULT 0,
                sub_category_id INTEGER NOT NULL DEFAULT 0
            );
        ");

        $sqlPath = database_path('seeders/sql/spare_parts_details.sql');
        $this->command->info('Loading spare_parts_details data from SQL file...');

        $sql = file_get_contents($sqlPath);
        $sql = $this->cleanMysqlSql($sql);
        DB::unprepared($sql);

        $count = DB::table('spare_parts_details')->count();
        $this->command->info("Seeded {$count} spare_parts_details records.");
    }

    private function cleanMysqlSql(string $sql): string
    {
        $sql = preg_replace('/^LOCK TABLES.*;\s*$/m', '', $sql);
        $sql = preg_replace('/^UNLOCK TABLES.*;\s*$/m', '', $sql);
        $sql = preg_replace('/\/\*!\d+[^*]*\*\/;?/s', '', $sql);
        // Convert MySQL backslash-escaped quotes to SQLite double-quote escaping
        $sql = str_replace('\\\\', '{{BSLASH}}', $sql);
        $sql = str_replace("\\'", "''", $sql);
        $sql = str_replace('{{BSLASH}}', '\\', $sql);
        return trim($sql);
    }
}
