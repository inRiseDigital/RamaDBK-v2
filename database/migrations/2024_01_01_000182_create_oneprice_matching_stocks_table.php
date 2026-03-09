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
        Schema::create('oneprice_matching_stocks', function (Blueprint $table) {
            $table->integer('id');
            $table->string('make', 50);
            $table->string('model', 50);
            $table->year('mfg_year_from');
            $table->year('mfg_year_to');
            $table->date('cron_run_date');
            $table->boolean('is_found')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oneprice_matching_stocks');
    }
};
