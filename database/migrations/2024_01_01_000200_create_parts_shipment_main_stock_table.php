<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('parts_shipment_main_stock', function (Blueprint $table) {
            $table->smallInteger('parts_shipment_id');
            $table->smallInteger('part_shipment_flag');
            $table->string('main_stock', 20);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parts_shipment_main_stock');
    }
};
