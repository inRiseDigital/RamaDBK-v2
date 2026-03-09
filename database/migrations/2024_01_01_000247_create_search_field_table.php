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
        Schema::create('search_field', function (Blueprint $table) {
            $table->integer('f_id')->unsigned()->default(0);
            $table->string('f_name', 224)->nullable()->default('0');
            $table->string('f_caption', 224)->nullable()->default('0');
            $table->string('f_type', 224)->nullable()->default('0');
            $table->integer('f_min')->unsigned()->nullable()->default(0);
            $table->integer('f_max')->unsigned()->nullable()->default(0);
            $table->integer('f_range')->unsigned()->nullable()->default(0);
            $table->string('f_table', 224)->nullable()->default('0');
            $table->integer('status')->unsigned()->nullable();
            $table->integer('f_no')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('search_field');
    }
};
