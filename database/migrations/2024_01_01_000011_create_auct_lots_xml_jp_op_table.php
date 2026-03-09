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
        Schema::create('auct_lots_xml_jp_op', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->string('bid', 15);
            $table->string('auction_system', 15);
            $table->string('company_en', 100)->nullable();
            $table->integer('company_ref')->unsigned()->nullable();
            $table->string('model_name_en', 100)->nullable();
            $table->integer('model_name_ref')->unsigned()->nullable();
            $table->char('model_year_en', 4)->nullable();
            $table->string('model_grade_en', 255)->nullable();
            $table->string('model_type_en', 32)->nullable();
            $table->integer('mileage_num')->unsigned()->nullable();
            $table->string('equipment_en', 255)->nullable();
            $table->string('transmission_en', 50)->nullable();
            $table->tinyInteger('awd_num')->unsigned()->nullable();
            $table->char('sw_type', 1)->nullable();
            $table->mediumInteger('displacement_num')->unsigned()->nullable();
            $table->bigInteger('start_price_num')->nullable();
            $table->bigInteger('end_price_num')->nullable();
            $table->string('color_en', 80)->nullable();
            $table->integer('color_ref')->nullable();
            $table->string('scores_en', 10)->nullable();
            $table->string('vin', 30)->nullable();
            $table->text('pictures')->nullable();
            $table->text('parsed_data_en')->nullable();
            $table->date('date');
            $table->integer('auct_ref')->unsigned()->nullable();
            $table->tinyInteger('truck_ref')->unsigned()->nullable();
            $table->text('service_data')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auct_lots_xml_jp_op');
    }
};
