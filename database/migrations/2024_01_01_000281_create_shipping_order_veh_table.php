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
        Schema::create('shipping_order_veh', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('rs_id');
            $table->integer('stock_no');
            $table->string('veh_title', 600);
            $table->float('length');
            $table->float('width');
            $table->float('height');
            $table->float('m3');
            $table->float('weight');
            $table->integer('shipping_order_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_order_veh');
    }
};
