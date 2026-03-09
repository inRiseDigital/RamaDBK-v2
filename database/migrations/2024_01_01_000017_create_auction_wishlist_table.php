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
        Schema::create('auction_wishlist', function (Blueprint $table) {
            $table->integer('wishlist_id');
            $table->string('stock_no', 20)->default('');
            $table->integer('member_id');
            $table->date('create_date')->nullable();
            $table->string('ip', 50)->nullable();
            $table->date('stock_date');
            $table->enum('stock_type', ['auction', 'one price', 'stock']);
            $table->string('wish_list_part', 1);
            $table->string('make', 50);
            $table->string('maker', 50);
            $table->string('type', 50);
            $table->string('subtype', 50);
            $table->string('model', 50);
            $table->year('mfg_year');
            $table->integer('mfg_month');
            $table->string('chassis_no', 50);
            $table->string('model_code', 50);
            $table->double('mileage');
            $table->double('engine_cc');
            $table->string('drive', 5);
            $table->string('grade_ext', 3);
            $table->string('grade_int', 3);
            $table->smallInteger('doors');
            $table->string('seat_capacity', 5);
            $table->string('fuel', 50);
            $table->string('color', 50);
            $table->string('transmission', 30);
            $table->text('picture');
            $table->string('auction_name', 50);
            $table->double('price');
            $table->double('offer_price');
            $table->double('start_price_en');
            $table->double('end_price_en');
            $table->string('stock_number', 30);
            $table->string('lot_no', 15);
            $table->dateTime('lot_date');
            $table->string('auc_grade', 10);
            $table->string('acc', 200);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auction_wishlist');
    }
};
