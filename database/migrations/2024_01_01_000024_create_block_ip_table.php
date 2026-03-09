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
        Schema::create('block_ip', function (Blueprint $table) {
            $table->string('ip', 20)->default('');
            $table->dateTime('date')->default('0000-00-00 00:00:00');
            $table->dateTime('date_to')->default('0000-00-00 00:00:00');
            $table->tinyInteger('status')->default(0);
            $table->integer('counter')->default(1);
            $table->tinyInteger('no_of_times')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('block_ip');
    }
};
