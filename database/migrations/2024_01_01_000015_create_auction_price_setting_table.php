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
        Schema::create('auction_price_setting', function (Blueprint $table) {
            $table->integer('id');
            $table->string('name', 100);
            $table->double('amount')->default(0)->comment('fix amount');
            $table->double('lower_range')->default(0);
            $table->double('upper_range');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auction_price_setting');
    }
};
