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
        Schema::create('bid_offers', function (Blueprint $table) {
            $table->integer('s_no');
            $table->string('member_id', 50);
            $table->string('stock_id', 50);
            $table->text('message');
            $table->double('bid_price');
            $table->double('client_bid_price');
            $table->tinyInteger('status')->default(1)->comment('1 - pending 2 - sold out;  3 - failed;  4 - successful; 5 - under negotiation; 6 - unsold;');
            $table->dateTime('bid_time');
            $table->double('finish_bid_price')->default(0);
            $table->string('admin_msg', 500);
            $table->string('customer_email', 150);
            $table->integer('person_incharge');
            $table->boolean('is_import')->default(2);
            $table->boolean('is_invoice')->default(2);
            $table->string('auc_cond', 20);
            $table->string('client_bid_currency', 10);
            $table->double('finish_bid_price_usd');
            $table->double('m3');
            $table->double('auction_fee');
            $table->double('inspection');
            $table->double('agent_fee');
            $table->double('transport_fees');
            $table->double('insurance_fees');
            $table->double('other_fees');
            $table->double('custom_m3');
            $table->double('commission');
            $table->double('freight_m3');
            $table->string('currency', 5);
            $table->double('ex_rate');
            $table->double('total_cf_jpy');
            $table->double('total_cf');
            $table->boolean('bid_source');
            $table->double('previous_bid_price');
            $table->boolean('is_buyer_read')->default(2);
            $table->boolean('is_admin_read')->default(2);
            $table->dateTime('bid_update_time_front');
            $table->string('bid_edit_text', 100);
            $table->double('sel_start_price');
            $table->double('sel_last_price');
            $table->boolean('is_dealer');
            $table->integer('dealer_id');
            $table->integer('dealer_stock_id');
            $table->double('bid_price_usd');
            $table->string('member_name', 100);
            $table->string('member_company', 100);
            $table->string('member_country', 30);
            $table->integer('member_country_id');
            $table->string('qa_chassis', 20);
            $table->string('auction_id', 50);
            $table->string('auction_name', 255);
            $table->string('grade', 255);
            $table->string('grade_exterior', 255);
            $table->string('grade_interior', 255);
            $table->integer('lot_no');
            $table->double('start_price');
            $table->dateTime('start_date');
            $table->dateTime('close_date');
            $table->string('make', 255);
            $table->string('model', 50);
            $table->integer('mfg_year')->unsigned();
            $table->string('transmission', 50);
            $table->string('color', 50);
            $table->string('fuel', 50);
            $table->integer('engine_capacity');
            $table->string('drive', 50);
            $table->integer('mileage');
            $table->string('vehicle_status', 25)->default('0');
            $table->integer('bid_status')->unsigned()->default(0);
            $table->string('chassis_id', 50);
            $table->string('priv', 50);
            $table->double('auc_finish_bid_price');
            $table->text('info');
            $table->string('equip', 255);
            $table->string('alert_status', 50)->default('new');
            $table->string('auct', 5);
            $table->boolean('auc_time_update')->default(2);
            $table->integer('dealer_sno');
            $table->string('auc_time_hour', 2);
            $table->string('auc_time_min', 2);
            $table->dateTime('update_date');
            $table->text('msg_sales_to_purchase');
            $table->text('msg_purchase_to_sales');
            $table->integer('bid_send_status');
            $table->string('auc_group', 12);
            $table->integer('auc_unit');
            $table->integer('bid_status_change_by');
            $table->dateTime('bid_status_change_time')->nullable();
            $table->date('auc_date')->nullable();
            $table->integer('auct_ref');
            $table->integer('adjust_amount');
            $table->string('customer_ref', 15);
            $table->boolean('is_synced')->default(2);
            $table->string('sync_message', 250);
            $table->boolean('sync_error')->default(2);
            $table->tinyInteger('is_deleted')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bid_offers');
    }
};
