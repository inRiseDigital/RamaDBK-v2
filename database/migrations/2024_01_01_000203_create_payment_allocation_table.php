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
        Schema::create('payment_allocation', function (Blueprint $table) {
            $table->integer('s_no');
            $table->string('receipt_no', 25);
            $table->string('invoice_no', 50);
            $table->double('credit')->default(0);
            $table->double('debit')->default(0);
            $table->integer('user_id');
            $table->string('user_name', 50);
            $table->string('alloc_currency', 5);
            $table->string('alloc_ex_rate', 5);
            $table->date('allocation_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_allocation');
    }
};
