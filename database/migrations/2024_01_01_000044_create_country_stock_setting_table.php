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
        Schema::create('country_stock_setting', function (Blueprint $table) {
            $table->integer('id');
            $table->string('country', 100);
            $table->integer('type');
            $table->integer('make');
            $table->integer('model');
            $table->float('min_year_old');
            $table->float('max_year_old');
            $table->dateTime('create_date');
            $table->string('mk', 50);
            $table->string('mkr', 50);
            $table->string('ty', 30);
            $table->boolean('is_default')->default(1);
            $table->boolean('is_permit')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('country_stock_setting');
    }
};
