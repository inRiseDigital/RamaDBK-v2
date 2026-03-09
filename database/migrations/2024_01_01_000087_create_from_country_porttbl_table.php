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
        Schema::create('from_country_porttbl', function (Blueprint $table) {
            $table->integer('ctryportId');
            $table->integer('frId')->nullable();
            $table->integer('fctryId')->nullable();
            $table->integer('fportId')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('from_country_porttbl');
    }
};
