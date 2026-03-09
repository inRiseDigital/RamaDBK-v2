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
        Schema::create('customer_history_log', function (Blueprint $table) {
            $table->integer('id');
            $table->dateTime('log_date');
            $table->string('operator', 150);
            $table->smallInteger('operator_id');
            $table->string('remark', 250);
            $table->dateTime('follow_up_date');
            $table->string('follow_up_status', 250);
            $table->integer('member_id');
            $table->integer('created_by');
            $table->integer('updated_by');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_history_log');
    }
};
