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
        Schema::create('arai_img_30_08_2024', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('stock_no');
            $table->string('img', 100);
            $table->integer('img_order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('arai_img_30_08_2024');
    }
};
