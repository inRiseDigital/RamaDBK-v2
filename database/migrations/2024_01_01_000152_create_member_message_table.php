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
        Schema::create('member_message', function (Blueprint $table) {
            $table->integer('sr_no');
            $table->integer('member_id');
            $table->string('title', 250);
            $table->text('message');
            $table->dateTime('date_time');
            $table->integer('operator_id');
            $table->boolean('read_status')->default(1)->comment('1- unread 2-read');
            $table->boolean('message_status')->default(1)->comment('1- unsend 2-send');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_message');
    }
};
