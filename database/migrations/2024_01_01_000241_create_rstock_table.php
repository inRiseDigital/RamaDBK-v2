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
        Schema::create('rstock', function (Blueprint $table) {
            $table->integer('id');
            $table->string('country', 120);
            $table->text('model_id');
            $table->boolean('status')->default(1);
            $table->year('yFrom');
            $table->year('yTo');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rstock');
    }
};
