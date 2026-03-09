<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('vehicle_details')) {
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_vd_display_status_date ON vehicle_details(display, status, create_date DESC);');
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_vd_make ON vehicle_details(make);');
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_vd_type ON vehicle_details(type);');
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_vd_fuel ON vehicle_details(fuel);');
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_vd_transmission ON vehicle_details(transmission);');
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_vd_drive ON vehicle_details(drive);');
        }

        if (Schema::hasTable('pictures')) {
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_pic_stock_permission ON pictures(stock_no, img_permission);');
        }

        if (Schema::hasTable('spare_parts_details')) {
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_spd_stock_no ON spare_parts_details(stock_no);');
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_spd_main_cat ON spare_parts_details(main_category_id);');
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_spd_sub_cat ON spare_parts_details(sub_category_id);');
            DB::unprepared('CREATE INDEX IF NOT EXISTS idx_spd_s_no ON spare_parts_details(s_no DESC);');
        }
    }

    public function down(): void
    {
        DB::unprepared('DROP INDEX IF EXISTS idx_vd_display_status_date;');
        DB::unprepared('DROP INDEX IF EXISTS idx_vd_make;');
        DB::unprepared('DROP INDEX IF EXISTS idx_vd_type;');
        DB::unprepared('DROP INDEX IF EXISTS idx_vd_fuel;');
        DB::unprepared('DROP INDEX IF EXISTS idx_vd_transmission;');
        DB::unprepared('DROP INDEX IF EXISTS idx_vd_drive;');
        DB::unprepared('DROP INDEX IF EXISTS idx_pic_stock_permission;');
        DB::unprepared('DROP INDEX IF EXISTS idx_spd_stock_no;');
        DB::unprepared('DROP INDEX IF EXISTS idx_spd_main_cat;');
        DB::unprepared('DROP INDEX IF EXISTS idx_spd_sub_cat;');
        DB::unprepared('DROP INDEX IF EXISTS idx_spd_s_no;');
    }
};
