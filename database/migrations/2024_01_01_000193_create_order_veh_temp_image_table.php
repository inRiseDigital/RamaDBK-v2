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
        Schema::create('order_veh_temp_image', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('invoice_no');
            $table->string('stock_no', 20);
            $table->enum('source', ['stock', 'one price', 'bids', 'auction']);
            $table->tinyInteger('image_id');
            $table->text('image_name');
            $table->string('auction_hall', 50);
            $table->date('auction_date');
            $table->integer('lot_no');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_veh_temp_image');
    }
};
