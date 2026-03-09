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
        Schema::create('transport_fee_master', function (Blueprint $table) {
            $table->integer('id');
            $table->string('name', 100);
            $table->string('trans_type', 50);
            $table->string('zip_code', 100);
            $table->string('address', 250);
            $table->string('delivery_destination', 100);
            $table->double('fee');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transport_fee_master');
    }
};
