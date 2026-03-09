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
        Schema::create('tcv_master', function (Blueprint $table) {
            $table->integer('id');
            $table->string('type', 20)->nullable();
            $table->string('tcv_value', 40)->nullable();
            $table->integer('tcv_id')->nullable();
            $table->boolean('status')->nullable()->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tcv_master');
    }
};
