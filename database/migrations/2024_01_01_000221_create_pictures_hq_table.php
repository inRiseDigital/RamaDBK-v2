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
        Schema::create('pictures_hq', function (Blueprint $table) {
            $table->integer('stock_no');
            $table->string('picture_id', 25);
            $table->string('picture_name', 244);
            $table->string('stats_images', 4);
            $table->boolean('is_show');
            $table->integer('orders');
            $table->text('code_t');
            $table->text('code_b');
            $table->integer('id');
            $table->integer('aws_copied')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pictures_hq');
    }
};
