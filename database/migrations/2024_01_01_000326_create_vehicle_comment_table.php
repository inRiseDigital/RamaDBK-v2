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
        Schema::create('vehicle_comment', function (Blueprint $table) {
            $table->integer('id');
            $table->string('comment', 100)->nullable();
            $table->boolean('type')->nullable()->default(1);
            $table->boolean('status')->nullable()->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicle_comment');
    }
};
