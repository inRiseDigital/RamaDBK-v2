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
        Schema::create('vehicle_alert_req_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('make_id');
            $table->integer('model_id');
            $table->integer('year_from');
            $table->integer('year_to');
            $table->string('transmission', 50);
            $table->string('user_name', 120);
            $table->string('email', 50);
            $table->dateTime('create_date');
            $table->string('mail_code', 50);
            $table->tinyInteger('status')->nullable()->default(1)->comment('1. unsubscribe member 2. subscribe member');
            $table->dateTime('last_alert_send_time');
            $table->string('country', 50);
            $table->integer('country_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicle_alert_req_tbl');
    }
};
