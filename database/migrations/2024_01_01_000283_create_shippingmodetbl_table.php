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
        Schema::create('shippingmodetbl', function (Blueprint $table) {
            $table->integer('smId');
            $table->string('shipMode', 224)->nullable();
            $table->string('status', 224)->nullable();
            $table->string('displayOrder', 224)->nullable()->default('0');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shippingmodetbl');
    }
};
