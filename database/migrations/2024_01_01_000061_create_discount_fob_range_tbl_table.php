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
        Schema::create('discount_fob_range_tbl', function (Blueprint $table) {
            $table->tinyInteger('id');
            $table->integer('fob_range_from')->comment('in usd');
            $table->integer('fob_range_to')->comment('in usd');
            $table->dateTime('create_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('discount_fob_range_tbl');
    }
};
