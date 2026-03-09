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
        Schema::create('master_link', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('type_id')->unsigned()->nullable()->default(0);
            $table->integer('subtype_id')->unsigned()->nullable()->default(0);
            $table->integer('make_id')->unsigned()->nullable()->default(0);
            $table->integer('maker_id')->unsigned()->nullable()->default(0);
            $table->integer('model_id')->unsigned()->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('master_link');
    }
};
