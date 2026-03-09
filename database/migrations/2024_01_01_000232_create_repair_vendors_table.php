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
        Schema::create('repair_vendors', function (Blueprint $table) {
            $table->integer('id');
            $table->string('name', 100);
            $table->string('email', 50);
            $table->string('city', 50);
            $table->string('fax', 30);
            $table->string('country', 50);
            $table->string('telephone', 20);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('repair_vendors');
    }
};
