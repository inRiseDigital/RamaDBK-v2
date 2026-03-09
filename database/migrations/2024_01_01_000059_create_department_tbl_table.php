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
        Schema::create('department_tbl', function (Blueprint $table) {
            $table->integer('dept_id');
            $table->string('dept_name', 25);
            $table->integer('dept_head');
            $table->tinyInteger('orders');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('department_tbl');
    }
};
