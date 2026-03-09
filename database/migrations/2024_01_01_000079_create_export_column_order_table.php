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
        Schema::create('export_column_order', function (Blueprint $table) {
            $table->integer('id');
            $table->string('excel_column', 100);
            $table->string('table_column', 100);
            $table->tinyInteger('column_order');
            $table->boolean('is_use');
            $table->tinyInteger('default_order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('export_column_order');
    }
};
