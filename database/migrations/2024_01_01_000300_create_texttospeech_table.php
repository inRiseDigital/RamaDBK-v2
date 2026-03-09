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
        Schema::create('texttospeech', function (Blueprint $table) {
            $table->integer('id');
            $table->longText('inputtext');
            $table->string('audiolink', 255);
            $table->string('page_url', 255);
            $table->integer('changerequried')->default(2)->comment('1- no change,2- change required');
            $table->string('VoiceId', 25);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('texttospeech');
    }
};
