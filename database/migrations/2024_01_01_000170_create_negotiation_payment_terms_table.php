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
        Schema::create('negotiation_payment_terms', function (Blueprint $table) {
            $table->integer('pt_id');
            $table->integer('negotiate_id');
            $table->string('currency', 5);
            $table->double('total_price');
            $table->date('payment_due_date');
            $table->string('sales_agreement', 250);
            $table->double('received_amount');
            $table->date('received_date');
            $table->date('refund_date');
            $table->double('refund_amount');
            $table->integer('bank_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negotiation_payment_terms');
    }
};
