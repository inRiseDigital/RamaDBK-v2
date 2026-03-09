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
        Schema::create('auct_lots_full', function (Blueprint $table) {
            $table->integer('lot_id')->unsigned();
            $table->dateTime('lot_date');
            $table->string('bid', 15);
            $table->string('company', 100)->nullable();
            $table->char('model_year_en', 4)->nullable();
            $table->string('model_name_en', 100)->nullable();
            $table->string('model_detail', 255)->nullable();
            $table->string('grade_en', 255)->nullable();
            $table->string('model_type_en', 32)->nullable();
            $table->integer('mileage_num')->unsigned()->nullable();
            $table->mediumInteger('displacement_num')->unsigned()->nullable();
            $table->string('transmission_en', 50)->nullable();
            $table->tinyInteger('awd')->unsigned()->nullable();
            $table->char('left_hd', 1)->nullable();
            $table->tinyInteger('truck')->unsigned()->nullable();
            $table->bigInteger('start_price_en')->nullable();
            $table->bigInteger('end_price_en')->nullable();
            $table->mediumText('average_price')->nullable();
            $table->string('color_en', 80)->nullable();
            $table->string('scores_en', 10)->nullable();
            $table->string('result_en', 16);
            $table->string('auct_system_ref', 15);
            $table->string('auction_name', 32);
            $table->text('pics_urls')->nullable();
            $table->tinyInteger('company_ref')->unsigned()->nullable();
            $table->smallInteger('model_ref')->unsigned()->nullable();
            $table->integer('auct_ref')->unsigned()->nullable();
            $table->double('start_usd')->nullable();
            $table->double('end_usd')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auct_lots_full');
    }
};
