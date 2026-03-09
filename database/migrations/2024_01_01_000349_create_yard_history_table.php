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
        Schema::create('yard_history', function (Blueprint $table) {
            $table->integer('stock_no');
            $table->string('created_by', 50);
            $table->integer('created_id');
            $table->string('yard_name', 50);
            $table->integer('yard_id');
            $table->dateTime('create_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('yard_history');
    }
};
