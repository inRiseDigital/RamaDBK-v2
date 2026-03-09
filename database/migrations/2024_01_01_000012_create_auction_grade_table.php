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
        Schema::create('auction_grade', function (Blueprint $table) {
            $table->integer('grade_id')->unsigned();
            $table->string('grade', 10)->default('');
            $table->text('description')->nullable();
            $table->integer('position')->unsigned()->nullable();
            $table->string('comment', 255)->nullable();
            $table->date('create_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auction_grade');
    }
};
