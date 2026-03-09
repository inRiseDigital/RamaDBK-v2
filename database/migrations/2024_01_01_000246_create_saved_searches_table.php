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
        Schema::create('saved_searches', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('cust_id');
            $table->timestamp('create_date')->useCurrent();
            $table->text('make');
            $table->text('model');
            $table->text('chassis_model');
            $table->integer('year_from');
            $table->integer('year_to');
            $table->integer('mileage_from');
            $table->integer('mileage_to');
            $table->char('transmission', 6);
            $table->string('color', 255);
            $table->string('engine_cc', 100);
            $table->string('engine_to', 100);
            $table->string('grade', 255);
            $table->string('auction_grade', 100);
            $table->string('title', 100);
            $table->string('save_from', 255);
            $table->integer('userId');
            $table->string('auction_name', 100);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('saved_searches');
    }
};
