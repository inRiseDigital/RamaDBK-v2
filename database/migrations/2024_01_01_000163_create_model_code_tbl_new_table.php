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
        Schema::create('model_code_tbl_new', function (Blueprint $table) {
            $table->integer('model_code_id');
            $table->string('model_code', 20);
            $table->integer('make_id');
            $table->integer('maker_id');
            $table->integer('length');
            $table->integer('width');
            $table->integer('height');
            $table->double('m3');
            $table->string('engine_type', 150);
            $table->text('model_description');
            $table->text('engine_description');
            $table->string('maker', 50);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('model_code_tbl_new');
    }
};
