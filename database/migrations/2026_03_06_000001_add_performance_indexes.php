<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('vehicle_details')) {
            Schema::table('vehicle_details', function (Blueprint $table) {
                $indexes = $this->getIndexNames('vehicle_details');

                if (!in_array('idx_vd_display_status_date', $indexes)) {
                    $table->index(['display', 'status', 'create_date'], 'idx_vd_display_status_date');
                }
                if (!in_array('idx_vd_make', $indexes)) {
                    $table->index('make', 'idx_vd_make');
                }
                if (!in_array('idx_vd_type', $indexes)) {
                    $table->index('type', 'idx_vd_type');
                }
                if (!in_array('idx_vd_fuel', $indexes)) {
                    $table->index('fuel', 'idx_vd_fuel');
                }
                if (!in_array('idx_vd_transmission', $indexes)) {
                    $table->index('transmission', 'idx_vd_transmission');
                }
                if (!in_array('idx_vd_drive', $indexes)) {
                    $table->index('drive', 'idx_vd_drive');
                }
            });
        }

        if (Schema::hasTable('pictures')) {
            Schema::table('pictures', function (Blueprint $table) {
                $indexes = $this->getIndexNames('pictures');

                if (!in_array('idx_pic_stock_permission', $indexes)) {
                    $table->index(['stock_no', 'img_permission'], 'idx_pic_stock_permission');
                }
            });
        }

        if (Schema::hasTable('spare_parts_details')) {
            Schema::table('spare_parts_details', function (Blueprint $table) {
                $indexes = $this->getIndexNames('spare_parts_details');

                if (!in_array('idx_spd_stock_no', $indexes)) {
                    $table->index('stock_no', 'idx_spd_stock_no');
                }
                if (!in_array('idx_spd_main_cat', $indexes)) {
                    $table->index('main_category_id', 'idx_spd_main_cat');
                }
                if (!in_array('idx_spd_sub_cat', $indexes)) {
                    $table->index('sub_category_id', 'idx_spd_sub_cat');
                }
                if (!in_array('idx_spd_s_no', $indexes)) {
                    $table->index('s_no', 'idx_spd_s_no');
                }
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('vehicle_details')) {
            Schema::table('vehicle_details', function (Blueprint $table) {
                $table->dropIndex('idx_vd_display_status_date');
                $table->dropIndex('idx_vd_make');
                $table->dropIndex('idx_vd_type');
                $table->dropIndex('idx_vd_fuel');
                $table->dropIndex('idx_vd_transmission');
                $table->dropIndex('idx_vd_drive');
            });
        }

        if (Schema::hasTable('pictures')) {
            Schema::table('pictures', function (Blueprint $table) {
                $table->dropIndex('idx_pic_stock_permission');
            });
        }

        if (Schema::hasTable('spare_parts_details')) {
            Schema::table('spare_parts_details', function (Blueprint $table) {
                $table->dropIndex('idx_spd_stock_no');
                $table->dropIndex('idx_spd_main_cat');
                $table->dropIndex('idx_spd_sub_cat');
                $table->dropIndex('idx_spd_s_no');
            });
        }
    }

    private function getIndexNames(string $table): array
    {
        $results = DB::select("SHOW INDEX FROM `{$table}`");
        return array_unique(array_map(fn($row) => $row->Key_name, $results));
    }
};
