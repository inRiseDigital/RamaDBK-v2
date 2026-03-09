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
        Schema::create('user_task_report', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('user_id');
            $table->string('user_name', 50);
            $table->integer('task_id');
            $table->string('task_name', 50);
            $table->double('target');
            $table->string('jan', 250);
            $table->string('feb', 250);
            $table->string('mar', 250);
            $table->string('apr', 250);
            $table->string('may', 250);
            $table->string('jun', 250);
            $table->string('jul', 250);
            $table->string('aug', 250);
            $table->string('sep', 250);
            $table->string('oct', 250);
            $table->string('nov', 250);
            $table->string('dece', 250);
            $table->smallInteger('task_year');
            $table->string('remarks', 250);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_task_report');
    }
};
