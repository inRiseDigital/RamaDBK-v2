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
        Schema::create('block_ip_injection', function (Blueprint $table) {
            $table->integer('id');
            $table->string('ip_address', 20);
            $table->string('ip_country', 20);
            $table->dateTime('block_date');
            $table->tinyInteger('status')->default(1);
            $table->string('comment', 255);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('block_ip_injection');
    }
};
