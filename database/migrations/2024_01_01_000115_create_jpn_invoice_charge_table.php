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
        Schema::create('jpn_invoice_charge', function (Blueprint $table) {
            $table->integer('id');
            $table->string('charge_name', 150);
            $table->double('amount');
            $table->double('amount_usd');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jpn_invoice_charge');
    }
};
