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
        Schema::create('call_request_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->string('tlt', 5);
            $table->string('name', 150);
            $table->string('country', 150);
            $table->integer('country_code');
            $table->string('area_code', 10);
            $table->string('telphone_no', 25);
            $table->string('email', 100);
            $table->integer('from_hr');
            $table->integer('from_mn');
            $table->integer('to_hr');
            $table->integer('to_mn');
            $table->dateTime('submit_time');
            $table->string('client_request_reason', 250);
            $table->tinyInteger('status')->default(2)->comment('1 - not reply 2 - reply');
            $table->date('reply_date');
            $table->integer('reply_time_hr');
            $table->integer('reply_time_mn');
            $table->string('call_attend_by', 150);
            $table->integer('sales_person_id');
            $table->text('sales_person_remark');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('call_request_tbl');
    }
};
