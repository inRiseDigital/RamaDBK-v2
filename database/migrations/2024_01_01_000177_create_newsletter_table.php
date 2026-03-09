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
        Schema::create('newsletter', function (Blueprint $table) {
            $table->string('email', 50)->default('');
            $table->string('name', 100)->nullable();
            $table->integer('status')->unsigned()->nullable()->default(1);
            $table->date('create_date')->nullable();
            $table->string('country_name', 100)->nullable();
            $table->string('phone', 20);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('newsletter');
    }
};
