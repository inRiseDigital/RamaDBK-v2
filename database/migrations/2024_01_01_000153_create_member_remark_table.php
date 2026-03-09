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
        Schema::create('member_remark', function (Blueprint $table) {
            $table->integer('sr_no');
            $table->integer('member_id');
            $table->text('remark');
            $table->dateTime('date_time');
            $table->integer('operator_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_remark');
    }
};
