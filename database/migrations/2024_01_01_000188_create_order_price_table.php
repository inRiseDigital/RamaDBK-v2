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
        Schema::create('order_price', function (Blueprint $table) {
            $table->string('order_id', 40)->default('');
            $table->double('fob_price')->nullable();
            $table->double('freight_charges')->nullable();
            $table->double('other_charges')->nullable();
            $table->double('delivery_charges')->nullable();
            $table->double('insurance_charges')->nullable();
            $table->double('total')->nullable();
            $table->string('curr', 50)->nullable();
            $table->double('custom_charges')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_price');
    }
};
