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
        Schema::create('pictures_aucnet', function (Blueprint $table) {
            $table->string('stock_no', 20)->default('');
            $table->string('picture_id', 25)->default('');
            $table->string('picture_name', 224)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pictures_aucnet');
    }
};
