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
        Schema::create('spare_parts_details', function (Blueprint $table) {
            $table->integer('s_no');
            $table->integer('stock_no');
            $table->string('part_number', 255);
            $table->text('description');
            $table->text('keyword_tag');
            $table->integer('main_category_id');
            $table->integer('sub_category_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spare_parts_details');
    }
};
