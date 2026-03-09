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
        Schema::create('to_porttbl', function (Blueprint $table) {
            $table->integer('tportId');
            $table->string('port', 224)->nullable();
            $table->string('status', 224)->nullable();
            $table->string('displayOrder', 224)->nullable()->default('0');
            $table->integer('region_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('to_porttbl');
    }
};
