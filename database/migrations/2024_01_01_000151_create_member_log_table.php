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
        Schema::create('member_log', function (Blueprint $table) {
            $table->bigInteger('id');
            $table->integer('member_id')->default(0);
            $table->dateTime('start_time')->default('0000-00-00 00:00:00');
            $table->dateTime('close_time')->default('0000-00-00 00:00:00');
            $table->string('logIP', 25)->default('');
            $table->tinyInteger('status')->default(1);
            $table->string('session_id', 50)->default('');
            $table->string('country', 50)->default('0');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_log');
    }
};
