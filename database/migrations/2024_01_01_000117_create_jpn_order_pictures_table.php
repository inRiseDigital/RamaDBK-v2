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
        Schema::create('jpn_order_pictures', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('order_id');
            $table->integer('veh_id');
            $table->string('pic_name', 30);
            $table->string('pic_id', 2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jpn_order_pictures');
    }
};
