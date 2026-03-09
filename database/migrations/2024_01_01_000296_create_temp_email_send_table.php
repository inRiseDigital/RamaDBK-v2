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
        Schema::create('temp_email_send', function (Blueprint $table) {
            $table->integer('id');
            $table->string('stock_offer_id', 50);
            $table->integer('user_id');
            $table->text('body');
            $table->longText('member_id');
            $table->string('member_type', 50);
            $table->boolean('send_status');
            $table->string('subject', 255);
            $table->string('mailfrom', 255);
            $table->string('fromName', 255);
            $table->dateTime('created_on');
            $table->integer('total');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temp_email_send');
    }
};
