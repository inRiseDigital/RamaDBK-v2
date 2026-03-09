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
        Schema::create('bid_sent_stats', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('bid_id');
            $table->date('request_type');
            $table->string('update_by', 20);
            $table->integer('update_by_id');
            $table->dateTime('request_time');
            $table->integer('lot_no');
            $table->string('auction', 50);
            $table->double('bid_price');
            $table->dateTime('auction_date');
            $table->string('status', 30);
            $table->string('error_message', 50);
            $table->string('response_code', 50);
            $table->string('response_message', 250);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bid_sent_stats');
    }
};
