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
        Schema::create('transport_company', function (Blueprint $table) {
            $table->integer('id');
            $table->string('name', 100);
            $table->string('transport_email', 50);
            $table->string('transport_email2', 50);
            $table->string('transport_email3', 50);
            $table->enum('send_green_paper', ['yes', 'no'])->default('no');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transport_company');
    }
};
