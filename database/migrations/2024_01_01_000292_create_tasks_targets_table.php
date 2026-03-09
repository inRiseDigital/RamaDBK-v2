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
        Schema::create('tasks_targets', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('userId');
            $table->integer('team_id');
            $table->string('task_name', 100);
            $table->integer('task_id');
            $table->integer('target');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks_targets');
    }
};
