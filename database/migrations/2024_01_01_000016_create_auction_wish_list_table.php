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
        Schema::create('auction_wish_list', function (Blueprint $table) {
            $table->integer('wishlist_id');
            $table->string('stock_no', 250);
            $table->date('create_date');
            $table->string('customer_id', 50);
            $table->string('ip_address', 50);
            $table->dateTime('auction_date');
            $table->string('lot_no', 30);
            $table->string('auction_hall', 150);
            $table->integer('mfg_year');
            $table->string('make', 255);
            $table->string('model', 150);
            $table->string('transmission', 50);
            $table->integer('engine_cc');
            $table->integer('mileage');
            $table->string('color', 50);
            $table->string('chassis_no', 50);
            $table->double('start_price');
            $table->double('final_price');
            $table->string('auction_status', 25);
            $table->string('auction_grade', 10);
            $table->string('accessories', 250);
            $table->string('data_source', 25)->default('aleado')->comment('data source : e.g -> aleado');
            $table->string('wish_list_part', 2);
            $table->string('auct_ref', 30);
            $table->string('images', 250);
            $table->text('pic_url');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auction_wish_list');
    }
};
