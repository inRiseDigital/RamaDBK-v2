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
        Schema::create('country_list', function (Blueprint $table) {
            $table->integer('country_id')->unsigned();
            $table->string('country_name', 50)->default('');
            $table->string('country_code', 10)->default('');
            $table->integer('status')->unsigned()->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('country_list');
    }
};
