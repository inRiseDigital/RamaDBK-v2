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
        Schema::create('request_model', function (Blueprint $table) {
            $table->integer('r_id')->unsigned()->nullable()->default(0);
            $table->integer('m_id')->unsigned()->nullable()->default(0);
            $table->string('model_id', 20)->nullable()->default('0');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_model');
    }
};
