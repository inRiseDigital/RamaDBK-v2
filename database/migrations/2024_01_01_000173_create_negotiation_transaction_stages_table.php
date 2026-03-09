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
        Schema::create('negotiation_transaction_stages', function (Blueprint $table) {
            $table->integer('st_id');
            $table->integer('negotiate_id');
            $table->dateTime('negotiation');
            $table->dateTime('request_performa_invoice');
            $table->dateTime('issue_performa_invoice');
            $table->dateTime('order_item');
            $table->dateTime('order_confirmed');
            $table->dateTime('order_cancel');
            $table->dateTime('payment_deposite');
            $table->dateTime('payment_confirmation');
            $table->dateTime('shipping_schedule');
            $table->dateTime('copy_of_bl');
            $table->dateTime('send_document');
            $table->dateTime('refunds');
            $table->dateTime('receive_bl_copy');
            $table->dateTime('receive_document');
            $table->dateTime('item_received');
            $table->dateTime('pay_to_exporter');
            $table->dateTime('payment_received');
            $table->dateTime('issue_invoice');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negotiation_transaction_stages');
    }
};
