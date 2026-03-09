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
        Schema::create('negotiation_vehicle_details', function (Blueprint $table) {
            $table->integer('veh_id');
            $table->integer('stock_no');
            $table->string('stock_number', 25);
            $table->double('usd_ex_rate');
            $table->double('price');
            $table->double('price_usd');
            $table->double('offer_price');
            $table->double('offer_price_usd');
            $table->char('new_used', 10);
            $table->string('grade', 50);
            $table->year('mfg_year');
            $table->smallInteger('mfg_month');
            $table->string('model_code', 30);
            $table->string('chassis_no', 50);
            $table->string('mileage', 15);
            $table->string('engine_cc', 15);
            $table->string('drive', 10);
            $table->string('doors', 5);
            $table->char('wd', 5);
            $table->char('seat_capacity', 5);
            $table->char('loading_capacity', 5);
            $table->string('hours', 15);
            $table->text('other_info');
            $table->text('comment');
            $table->integer('created_by');
            $table->integer('created_by_parent');
            $table->string('youtube_embed_video_url', 200);
            $table->string('location', 50);
            $table->string('ports', 50);
            $table->string('type', 50);
            $table->string('subtype', 50);
            $table->string('make', 50);
            $table->string('maker', 50);
            $table->string('model', 50);
            $table->string('fuels', 50);
            $table->string('gradeExt', 50);
            $table->string('gradeInt', 50);
            $table->string('transmissions', 50);
            $table->string('colors', 50);
            $table->string('shortName', 50);
            $table->string('country_of_discharge', 100);
            $table->string('port_of_discharge', 100);
            $table->integer('status');
            $table->boolean('is_auction');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negotiation_vehicle_details');
    }
};
