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
        Schema::create('auc_image', function (Blueprint $table) {
            $table->integer('stock_no');
            $table->string('image_id', 3)->default('');
            $table->string('image_name', 224)->nullable();
            $table->string('image_large', 224)->nullable()->default('');
            $table->boolean('auc_permission')->nullable()->default(1);
            $table->integer('flg');
            $table->boolean('img_for_jctjson')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auc_image');
    }
};
