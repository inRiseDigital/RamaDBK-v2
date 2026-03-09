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
        Schema::create('member_currency', function (Blueprint $table) {
            $table->bigInteger('id');
            $table->bigInteger('member_id');
            $table->string('currency', 5)->default('usd');
            $table->boolean('is_locked')->default(2);
            $table->string('final_ex_rate', 7);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_currency');
    }
};
