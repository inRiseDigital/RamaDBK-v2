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
        Schema::create('ticket_response', function (Blueprint $table) {
            $table->integer('response_id');
            $table->integer('msg_id');
            $table->integer('ticket_id');
            $table->integer('operator_id');
            $table->text('response_msg');
            $table->string('ip_address', 16);
            $table->dateTime('res_created_date');
            $table->tinyInteger('flag')->comment('1 - on create 2 - on reply');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket_response');
    }
};
