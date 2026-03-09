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
        Schema::create('yard_charges', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('type_id');
            $table->string('type', 100);
            $table->string('yard_name', 100);
            $table->string('yard_location', 100);
            $table->integer('free_days');
            $table->integer('first_m3');
            $table->integer('second_m3');
            $table->integer('third_m3');
            $table->integer('fourth_m3');
            $table->integer('fixed_m3');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('yard_charges');
    }
};
