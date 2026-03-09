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
        Schema::create('images_to_sync', function (Blueprint $table) {
            $table->integer('id');
            $table->dateTime('sync_date');
            $table->integer('stock_no');
            $table->text('pic_urls');
            $table->boolean('is_copy')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images_to_sync');
    }
};
