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
        Schema::create('temp_cart', function (Blueprint $table) {
            $table->string('cart_id', 41)->default('');
            $table->integer('member_id')->default(0);
            $table->string('stock_no', 20)->default('');
            $table->integer('quantity')->unsigned()->nullable()->default(0);
            $table->date('create_date')->nullable();
            $table->string('stock_number', 25)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temp_cart');
    }
};
