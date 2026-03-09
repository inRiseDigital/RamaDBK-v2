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
        Schema::create('member_account_history', function (Blueprint $table) {
            $table->bigInteger('id');
            $table->bigInteger('member_id');
            $table->string('ref_no', 75);
            $table->string('name', 255);
            $table->string('country', 255);
            $table->string('email', 255);
            $table->string('telephone', 255);
            $table->string('mobile', 255);
            $table->string('crm', 255);
            $table->date('registration_date');
            $table->date('last_invoice_date');
            $table->date('last_payment_date');
            $table->string('total_invoice_amount', 255);
            $table->string('total_payment_amount', 255);
            $table->boolean('status')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('member_account_history');
    }
};
