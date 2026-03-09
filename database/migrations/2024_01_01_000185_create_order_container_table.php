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
        Schema::create('order_container', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->string('order_id', 20)->nullable();
            $table->string('cno', 20)->nullable();
            $table->string('type', 20)->nullable();
            $table->string('seal_no', 20)->nullable();
            $table->string('container', 20)->nullable();
            $table->text('description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_container');
    }
};
