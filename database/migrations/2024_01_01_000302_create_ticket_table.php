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
        Schema::create('ticket', function (Blueprint $table) {
            $table->integer('ticket_id');
            $table->integer('ticketID');
            $table->integer('member_id');
            $table->integer('operator_id');
            $table->integer('topic_id');
            $table->string('subject', 150);
            $table->string('ip_address', 16);
            $table->boolean('status')->default(1)->comment('1 - open 2- closed 3- re-open');
            $table->boolean('is_answered')->default(1)->comment('1- no 2 - yes');
            $table->dateTime('last_msg_time');
            $table->dateTime('last_response_time');
            $table->dateTime('created_date');
            $table->tinyInteger('priority_id');
            $table->tinyInteger('is_internal')->default(0)->comment('1 - yes 0 - no');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket');
    }
};
