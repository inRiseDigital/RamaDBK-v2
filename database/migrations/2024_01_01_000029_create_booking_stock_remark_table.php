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
        Schema::create('booking_stock_remark', function (Blueprint $table) {
            $table->integer('remark_id');
            $table->integer('rs_id');
            $table->date('remark_date');
            $table->text('remark');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_stock_remark');
    }
};
