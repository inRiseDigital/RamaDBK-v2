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
        Schema::create('misc_invoice_charges', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('order_id');
            $table->integer('cost_type_id');
            $table->integer('amount');
            $table->integer('misc_invoice_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('misc_invoice_charges');
    }
};
