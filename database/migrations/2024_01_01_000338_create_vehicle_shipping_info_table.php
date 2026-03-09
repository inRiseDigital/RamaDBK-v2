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
        Schema::create('vehicle_shipping_info', function (Blueprint $table) {
            $table->integer('id');
            $table->string('type', 31);
            $table->string('stock_no', 31);
            $table->date('date');
            $table->string('document', 51);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicle_shipping_info');
    }
};
