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
        Schema::create('ip_access_cp', function (Blueprint $table) {
            $table->integer('id');
            $table->string('ip', 55);
            $table->tinyInteger('status')->default(2);
            $table->string('country', 55);
            $table->text('comment');
            $table->dateTime('create_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ip_access_cp');
    }
};
