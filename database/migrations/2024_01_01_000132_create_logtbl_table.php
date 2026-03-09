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
        Schema::create('logtbl', function (Blueprint $table) {
            $table->integer('lId');
            $table->integer('userId')->nullable();
            $table->string('logDate', 224)->nullable();
            $table->string('logIp', 224)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logtbl');
    }
};
