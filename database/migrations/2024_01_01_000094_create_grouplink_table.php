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
        Schema::create('grouplink', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->string('groupname', 100)->nullable();
            $table->text('help')->nullable();
            $table->boolean('groupFlag')->unsigned()->nullable();
            $table->integer('displayOrder')->unsigned()->nullable();
            $table->boolean('status')->unsigned()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grouplink');
    }
};
