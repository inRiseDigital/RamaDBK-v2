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
        Schema::create('to_country_porttbl', function (Blueprint $table) {
            $table->integer('tctryportId');
            $table->integer('frId')->nullable();
            $table->integer('tctryId')->nullable();
            $table->string('country', 224)->nullable();
            $table->integer('tportId')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('to_country_porttbl');
    }
};
