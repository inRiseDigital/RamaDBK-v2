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
        Schema::create('auct_lots_full_3', function (Blueprint $table) {
            $table->integer('lot_id')->unsigned();
            $table->date('lot_date')->nullable();
            $table->binary('bid')->nullable();
            $table->binary('company')->nullable();
            $table->year('model_year_en')->nullable();
            $table->binary('model_name_en')->nullable();
            $table->binary('model_detail')->nullable();
            $table->binary('grade_en')->nullable();
            $table->string('model_type_en', 32);
            $table->binary('mileage_en')->nullable();
            $table->smallInteger('mileage_num')->unsigned()->default(0);
            $table->binary('inspection_en')->nullable();
            $table->binary('equipment_en')->nullable();
            $table->binary('transmission_en')->nullable();
            $table->boolean('awd')->unsigned()->nullable();
            $table->binary('left_hd')->nullable();
            $table->binary('truck')->nullable();
            $table->boolean('special_num')->unsigned()->nullable();
            $table->binary('special')->nullable();
            $table->binary('displacement')->nullable();
            $table->smallInteger('displacement_num')->unsigned()->default(0);
            $table->mediumInteger('start_price_en')->unsigned()->nullable();
            $table->mediumInteger('end_price_en')->unsigned()->nullable();
            $table->binary('average_price')->nullable();
            $table->binary('color_en')->nullable();
            $table->tinyInteger('color_basic_ref')->unsigned()->nullable();
            $table->binary('scores_en')->nullable();
            $table->binary('result_en')->nullable();
            $table->tinyInteger('result_num')->unsigned()->default(0);
            $table->binary('chassis_no')->nullable();
            $table->tinyInteger('company_ref')->unsigned()->default(0);
            $table->smallInteger('model_ref')->unsigned()->default(0);
            $table->tinyInteger('auct_ref')->unsigned()->default(0);
            $table->binary('auct_system_ref');
            $table->binary('auction_name')->nullable();
            $table->binary('city_en')->nullable();
            $table->smallInteger('city_ref')->unsigned()->default(0);
            $table->smallInteger('date_ref')->unsigned();
            $table->binary('imported')->nullable();
            $table->binary('pics_list')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auct_lots_full_3');
    }
};
