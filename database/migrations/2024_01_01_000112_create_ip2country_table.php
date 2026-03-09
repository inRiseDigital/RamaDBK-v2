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
        Schema::create('ip2country', function (Blueprint $table) {
            $table->double('ipfrom')->default(0);
            $table->double('ipto')->default(0);
            $table->char('country', 50)->default('');
            $table->char('a2', 2)->default('');
            $table->char('a3', 3)->default('');
            $table->integer('number')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ip2country');
    }
};
