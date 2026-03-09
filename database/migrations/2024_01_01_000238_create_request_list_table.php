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
        Schema::create('request_list', function (Blueprint $table) {
            $table->integer('r_id')->unsigned();
            $table->integer('m_id')->unsigned()->nullable()->default(0);
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->integer('status')->unsigned()->nullable()->default(0);
            $table->string('make_id', 20)->nullable();
            $table->string('maker_id', 20)->nullable();
            $table->integer('year_from')->unsigned()->nullable();
            $table->integer('year_to')->nullable();
            $table->integer('mileage_from')->unsigned()->nullable();
            $table->integer('mileage_to')->unsigned()->nullable();
            $table->integer('price_from')->unsigned()->nullable();
            $table->integer('price_to')->unsigned()->nullable();
            $table->dateTime('last_alert_sent_time')->nullable()->comment('last mail sent time');
            $table->string('code', 20)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_list');
    }
};
