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
        Schema::create('current_visitors', function (Blueprint $table) {
            $table->dateTime('date')->nullable();
            $table->string('session_id', 50)->default('');
            $table->string('logIP', 30)->default('');
            $table->string('country', 60)->default('');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('current_visitors');
    }
};
