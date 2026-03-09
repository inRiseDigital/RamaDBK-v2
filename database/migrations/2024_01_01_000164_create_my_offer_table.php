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
        Schema::create('my_offer', function (Blueprint $table) {
            $table->integer('id');
            $table->string('member_id', 250);
            $table->integer('stock_no');
            $table->string('make', 150);
            $table->string('model', 150);
            $table->double('offer_currency');
            $table->double('offer_price');
            $table->double('equal_jpy_amount');
            $table->text('message');
            $table->tinyInteger('negotiate_status');
            $table->double('sales_offer_price');
            $table->double('sales_eql_jpy');
            $table->integer('sales_person_id');
            $table->date('sales_reply_date');
            $table->dateTime('create_date');
            $table->tinyInteger('close_status');
            $table->date('close_date');
            $table->string('close_reason', 256);
            $table->tinyInteger('inspect_cert');
            $table->tinyInteger('i_f');
            $table->integer('dest_country_id');
            $table->integer('dest_port_id');
            $table->double('price_local');
            $table->double('freight_charges');
            $table->double('insurance');
            $table->double('fob_charges');
            $table->dateTime('update_date_by_customer');
            $table->tinyInteger('reply_status')->comment('1 - reply 2- not reply');
            $table->tinyInteger('quotation_status')->comment('1 - created 2- not created');
            $table->string('qtn_id', 40)->comment('quotation id');
            $table->date('end_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('my_offer');
    }
};
