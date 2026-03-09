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
        Schema::create('request_drive', function (Blueprint $table) {
            $table->integer('r_id')->unsigned()->nullable();
            $table->integer('m_id')->unsigned()->nullable();
            $table->string('drive', 10)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_drive');
    }
};
