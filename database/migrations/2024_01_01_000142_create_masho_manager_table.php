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
        Schema::create('masho_manager', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('stock_no');
            $table->string('chassis_no', 50);
            $table->string('fchassis_no', 50);
            $table->string('stock_number', 25);
            $table->string('vehicle_title', 50);
            $table->smallInteger('masho_shaken');
            $table->smallInteger('port');
            $table->integer('created_by_id');
            $table->string('created_by', 100);
            $table->dateTime('created_on');
            $table->string('PlNo1', 50);
            $table->string('PlNo2', 50);
            $table->string('PlNo3', 50);
            $table->string('PlNo4', 50);
            $table->string('PlNo5', 50);
            $table->string('PlNo6', 50);
            $table->string('PlNo7', 50);
            $table->string('PlNo8', 50);
            $table->string('PlNo9', 50);
            $table->string('PlNo10', 50);
            $table->string('PlNo11', 50);
            $table->string('PlNo12', 50);
            $table->string('plateNo', 100);
            $table->dateTime('expiry_on');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('masho_manager');
    }
};
