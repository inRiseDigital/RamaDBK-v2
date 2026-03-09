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
        Schema::create('debit_payment_allocation_20250203', function (Blueprint $table) {
            $table->integer('s_no');
            $table->string('cr_receipt_no', 50)->comment('credit receipt no');
            $table->string('dr_receipt_no', 50)->comment('dedit receipt no');
            $table->double('amount');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('debit_payment_allocation_20250203');
    }
};
