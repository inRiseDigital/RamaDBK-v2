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
        Schema::create('paypal_payment_info', function (Blueprint $table) {
            $table->integer('id');
            $table->string('item_name', 100);
            $table->string('first_name', 100);
            $table->string('address_country_code', 100);
            $table->string('address_name', 100);
            $table->string('payer_status', 30);
            $table->string('payer_email', 100);
            $table->double('payer_amount');
            $table->string('verify_sign', 100);
            $table->string('txn_id', 50);
            $table->string('payment_type', 50);
            $table->string('auth', 100);
            $table->integer('member_id');
            $table->string('name', 150);
            $table->string('address1', 150);
            $table->string('address2', 150);
            $table->string('city', 50);
            $table->string('state', 100);
            $table->string('zip', 50);
            $table->string('country', 50);
            $table->string('email', 50);
            $table->string('telephone', 50);
            $table->string('fax', 50);
            $table->string('con_name', 150);
            $table->string('con_address1', 150);
            $table->string('con_address2', 150);
            $table->string('con_city', 50);
            $table->string('con_state', 100);
            $table->string('con_zip', 50);
            $table->string('con_country', 50);
            $table->string('con_email', 50);
            $table->string('con_telephone', 50);
            $table->string('con_fax', 50);
            $table->dateTime('date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paypal_payment_info');
    }
};
