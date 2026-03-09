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
        Schema::create('inspection_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('stock_no')->default(0);
            $table->integer('row_no')->default(0);
            $table->integer('col_no')->default(0);
            $table->integer('c_id')->default(0);
            $table->string('caption', 20)->default('');
            $table->boolean('status')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspection_tbl');
    }
};
