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
        Schema::create('booking_requested_stock', function (Blueprint $table) {
            $table->integer('rs_id');
            $table->integer('booking_id');
            $table->integer('stock_no');
            $table->string('stock_number', 25);
            $table->string('chassis_no', 25);
            $table->integer('length');
            $table->integer('width');
            $table->integer('height');
            $table->double('m3');
            $table->integer('KGS');
            $table->string('invoice_no', 50)->nullable();
            $table->integer('sales_person')->nullable();
            $table->smallInteger('request_status')->default(1)->comment('in-process =');
            $table->string('description', 100);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_requested_stock');
    }
};
