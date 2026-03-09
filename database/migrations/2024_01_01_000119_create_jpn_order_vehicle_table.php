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
        Schema::create('jpn_order_vehicle', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('order_id');
            $table->enum('source', ['stock', 'one price', 'bids', 'auction', 'manual']);
            $table->string('auction_hall', 30);
            $table->integer('stock_id');
            $table->string('stock_number', 30);
            $table->integer('bid_id');
            $table->double('car_price');
            $table->integer('make_id');
            $table->string('make', 30);
            $table->integer('maker_id');
            $table->string('maker', 30);
            $table->string('model_code', 50);
            $table->year('mfg_year');
            $table->integer('mfg_month');
            $table->year('reg_year');
            $table->integer('reg_month');
            $table->string('fuel', 30);
            $table->string('chassis_no', 30);
            $table->integer('length');
            $table->integer('width');
            $table->integer('height');
            $table->string('wd', 3);
            $table->double('m3_size');
            $table->string('engine_cc', 15);
            $table->string('engine_no', 30);
            $table->string('ext_color', 30);
            $table->string('body_type', 30);
            $table->string('transmission', 30);
            $table->string('hs_code', 30);
            $table->integer('mileage');
            $table->integer('seat');
            $table->string('expcertino', 30);
            $table->string('expinspecno', 30);
            $table->text('other_options');
            $table->boolean('show_body_type')->default(2)->comment('1-yes 2-no');
            $table->boolean('show_trans')->default(2)->comment('1-yes 2-no');
            $table->boolean('show_hscode')->default(2)->comment('1-yes 2-no');
            $table->boolean('show_mileage')->default(2)->comment('1-yes 2-no');
            $table->boolean('show_seat')->default(2)->comment('1-yes 2-no');
            $table->boolean('show_auc_hall')->default(2)->comment('1-yes 2-no');
            $table->boolean('show_stock_num')->default(2)->comment('1-yes 2-no');
            $table->boolean('show_engno')->default(2)->comment('1-yes 2-no');
            $table->boolean('show_option')->default(2)->comment('1-yes 2-no');
            $table->boolean('show_all')->default(2);
            $table->boolean('shw_expcertino')->default(2);
            $table->boolean('show_expinspecno')->default(2);
            $table->double('insured_amount');
            $table->string('stearing', 20);
            $table->date('auction_date');
            $table->string('grade_ext', 50);
            $table->string('lot_number', 50);
            $table->integer('cif_car_price');
            $table->float('cif_insurance');
            $table->float('cif_freight');
            $table->text('cif_accessories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jpn_order_vehicle');
    }
};
