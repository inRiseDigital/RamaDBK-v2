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
        Schema::create('make', function (Blueprint $table) {
            $table->integer('make_id')->unsigned();
            $table->string('value', 50)->default('');
            $table->integer('tcv_id')->nullable();
            $table->integer('arai_make')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('make');
    }
};
