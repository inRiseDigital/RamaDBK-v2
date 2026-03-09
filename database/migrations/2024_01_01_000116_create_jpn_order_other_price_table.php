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
        Schema::create('jpn_order_other_price', function (Blueprint $table) {
            $table->integer('otherPriceId');
            $table->integer('order_id');
            $table->string('price_name', 30);
            $table->double('vehicle_price');
            $table->boolean('order')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jpn_order_other_price');
    }
};
