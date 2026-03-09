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
        Schema::create('inspection_image', function (Blueprint $table) {
            $table->string('image_path', 224)->default('');
            $table->integer('width')->default(0);
            $table->integer('height')->default(0);
            $table->integer('text_w')->default(0);
            $table->integer('text_h')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspection_image');
    }
};
