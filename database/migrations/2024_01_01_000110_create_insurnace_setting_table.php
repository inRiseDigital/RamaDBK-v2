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
        Schema::create('insurnace_setting', function (Blueprint $table) {
            $table->integer('id');
            $table->double('usd_lower');
            $table->double('usd_upper');
            $table->double('jpy_lower');
            $table->double('jpy_upper');
            $table->double('eur_lower');
            $table->double('eur_upper');
            $table->double('insurance_amount_usd');
            $table->double('insurance_amount_jpy');
            $table->double('insurance_amount_eur');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('insurnace_setting');
    }
};
