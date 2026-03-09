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
        Schema::create('region_relation_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('region_id');
            $table->integer('venue_id');
            $table->integer('city_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('region_relation_tbl');
    }
};
