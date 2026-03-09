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
        Schema::create('inspection_types', function (Blueprint $table) {
            $table->integer('inspection_type_id');
            $table->string('inspection_type_name', 100);
            $table->integer('amount');
            $table->text('inspection_note');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspection_types');
    }
};
