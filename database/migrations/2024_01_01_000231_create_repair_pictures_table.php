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
        Schema::create('repair_pictures', function (Blueprint $table) {
            $table->integer('stock_no');
            $table->string('picture_id', 25)->default('');
            $table->string('picture_name', 224)->nullable();
            $table->string('stats_images', 4);
            $table->boolean('is_show')->default(1)->comment('1-yes, 2-no');
            $table->integer('orders');
            $table->text('code_t');
            $table->text('code_b');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('repair_pictures');
    }
};
