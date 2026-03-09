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
        Schema::create('cart', function (Blueprint $table) {
            $table->string('stock_no', 20)->default('');
            $table->string('ses_id', 34)->default('');
            $table->string('member_id', 50)->nullable();
            $table->string('stock_number', 25)->nullable();
            $table->integer('quantity')->unsigned()->default(1);
            $table->date('create_date')->nullable();
            $table->string('ip', 50)->nullable();
            $table->integer('status')->unsigned()->nullable()->default(0);
            $table->string('order_id', 40)->nullable();
            $table->double('expiry')->nullable();
            $table->string('vehicle_tbl', 50)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart');
    }
};
