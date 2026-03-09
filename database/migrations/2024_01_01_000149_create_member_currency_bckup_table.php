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
        Schema::create('member_currency_bckup', function (Blueprint $table) {
            $table->bigInteger('id');
            $table->bigInteger('member_id');
            $table->string('currency', 5)->default('jpy');
            $table->boolean('is_locked')->default(2);
            $table->string('final_ex_rate', 5);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_currency_bckup');
    }
};
