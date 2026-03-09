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
        Schema::create('one_price_temp_pic', function (Blueprint $table) {
            $table->integer('s_no');
            $table->text('pic_url');
            $table->string('stock_number', 25);
            $table->integer('stock_no');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('one_price_temp_pic');
    }
};
