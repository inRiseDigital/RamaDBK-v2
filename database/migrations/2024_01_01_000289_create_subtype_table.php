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
        Schema::create('subtype', function (Blueprint $table) {
            $table->integer('subtype_id')->unsigned();
            $table->string('value', 50)->nullable();
            $table->double('m3')->nullable();
            $table->double('kt')->nullable();
            $table->integer('type_id')->unsigned()->nullable();
            $table->integer('tcv_id')->nullable();
            $table->string('subtype_image', 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subtype');
    }
};
