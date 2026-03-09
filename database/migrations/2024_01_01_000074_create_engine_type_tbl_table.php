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
        Schema::create('engine_type_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->string('engine_type', 150);
            $table->string('turbo', 20);
            $table->integer('engine_capacity');
            $table->text('engine_remark');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('engine_type_tbl');
    }
};
