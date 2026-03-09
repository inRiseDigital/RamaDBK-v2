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
        Schema::create('discount_tbl', function (Blueprint $table) {
            $table->tinyInteger('discount_id')->comment('id of discount_fob_tbl');
            $table->integer('amount')->comment('in usd');
            $table->string('active_status', 255)->default('0');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('discount_tbl');
    }
};
