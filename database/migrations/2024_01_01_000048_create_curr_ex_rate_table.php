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
        Schema::create('curr_ex_rate', function (Blueprint $table) {
            $table->integer('s_no');
            $table->date('date');
            $table->integer('usd_ttb');
            $table->integer('usd_ttm');
            $table->integer('usd_tts');
            $table->integer('gbp_ttb');
            $table->integer('gbp_ttm');
            $table->integer('gbp_tts');
            $table->integer('eur_ttb');
            $table->integer('eur_ttm');
            $table->integer('eur_tts');
            $table->integer('slr_ttb');
            $table->integer('slr_ttm');
            $table->integer('slr_tts');
            $table->integer('aud_ttb');
            $table->integer('aud_ttm');
            $table->integer('aud_tts');
            $table->integer('nzd_ttb');
            $table->integer('nzd_ttm');
            $table->integer('nzd_tts');
            $table->integer('cad_ttb');
            $table->integer('cad_ttm');
            $table->integer('cad_tts');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('curr_ex_rate');
    }
};
