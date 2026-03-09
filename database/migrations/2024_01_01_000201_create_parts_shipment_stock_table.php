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
        Schema::create('parts_shipment_stock', function (Blueprint $table) {
            $table->smallInteger('parts_shipment_id');
            $table->smallInteger('parts_shipment_flag');
            $table->integer('stock_no');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parts_shipment_stock');
    }
};
