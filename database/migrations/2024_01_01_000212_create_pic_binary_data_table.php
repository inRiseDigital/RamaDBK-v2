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
        Schema::create('pic_binary_data', function (Blueprint $table) {
            $table->integer('id');
            $table->longText('binay_data');
            $table->string('user_alias', 10);
            $table->integer('orders');
            $table->string('session_id', 250);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pic_binary_data');
    }
};
