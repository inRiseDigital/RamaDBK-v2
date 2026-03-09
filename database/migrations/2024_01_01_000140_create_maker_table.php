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
        Schema::create('maker', function (Blueprint $table) {
            $table->integer('maker_id')->unsigned();
            $table->string('value', 50);
            $table->double('m3')->nullable();
            $table->double('kt')->nullable();
            $table->integer('tcv_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('maker');
    }
};
