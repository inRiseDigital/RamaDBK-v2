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
        Schema::create('uss_auction_images', function (Blueprint $table) {
            $table->integer('id');
            $table->string('stock_id', 50);
            $table->date('auction_date');
            $table->integer('client_id');
            $table->longText('images');
            $table->dateTime('access_time');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('uss_auction_images');
    }
};
