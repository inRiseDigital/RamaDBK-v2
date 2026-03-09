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
        Schema::create('jpn_orders', function (Blueprint $table) {
            $table->integer('order_id');
            $table->boolean('is_import')->default(2);
            $table->string('import_code_no', 25);
            $table->date('order_date');
            $table->boolean('payment_type')->comment('1-paid,2-due');
            $table->integer('order_no');
            $table->enum('types', ['proforma', 'invoice']);
            $table->string('currency', 5);
            $table->double('ex_rate');
            $table->smallInteger('from_country');
            $table->smallInteger('from_port');
            $table->smallInteger('to_country');
            $table->smallInteger('to_port');
            $table->integer('to_destination');
            $table->date('due_date');
            $table->string('pay_term_id', 25);
            $table->enum('term', ['fob', 'c&f', 'cif'])->comment('fob, c&f, cif');
            $table->string('export_cert_no', 50);
            $table->string('export_insp_no', 50);
            $table->integer('bank_id');
            $table->text('admin_comment');
            $table->text('buyer_comment');
            $table->string('vessel_name', 20);
            $table->date('etd_date');
            $table->date('eta_date');
            $table->string('voyage_no', 20);
            $table->enum('ship_method', ['roro', 'container']);
            $table->string('vanning_no', 20);
            $table->string('seal_no', 20);
            $table->text('shipping_remark');
            $table->text('shipment_remark');
            $table->integer('create_by');
            $table->boolean('show_exp_cert')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_insp_no')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_vessel')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_etd')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_eta')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_voyage')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_method')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_vanning')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_seal_no')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_ship_remark')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_shipment_remark')->default(2)->comment('1 - yes 2 - no');
            $table->boolean('show_admncmt')->default(2)->comment('1-yes 2-no');
            $table->boolean('show_all_bankShip');
            $table->boolean('show_shippingComp')->default(2);
            $table->smallInteger('shippingName');
            $table->integer('order_ref');
            $table->boolean('is_switch')->default(2);
            $table->integer('buyer_id');
            $table->smallInteger('ci_year');
            $table->string('ci_proforma_order_no', 50);
            $table->date('ci_proforma_order_date');
            $table->text('ci_proforma_order_text');
            $table->boolean('ci_proforma_order_text_update')->default(2);
            $table->smallInteger('co_year');
            $table->date('booking_request_date');
            $table->string('status', 15);
            $table->string('marine_remark', 250);
            $table->string('insurance_company', 31);
            $table->integer('insurance_company_id');
            $table->date('date_of_policy');
            $table->double('insured_amount');
            $table->text('ci_beneficiary_certificate');
            $table->string('ci_text', 100);
            $table->string('validity_lc', 50);
            $table->string('payment_trams', 100);
            $table->string('ci_title', 100);
            $table->string('ci_lc_number', 50);
            $table->date('ci_lc_in_date');
            $table->string('ci_lc_issued_by', 50);
            $table->integer('negoId');
            $table->double('coupon_amount');
            $table->integer('coupon_id');
            $table->double('points_amount');
            $table->integer('points_id');
            $table->string('create_by_name', 50);
            $table->string('shippingCompanyName', 50);
            $table->string('container_no', 30);
            $table->boolean('is_coupon_request')->default(2);
            $table->dateTime('coupon_request_date');
            $table->boolean('is_consignee_update_req')->default(2);
            $table->dateTime('consignee_update_req_date');
            $table->boolean('is_point_assign')->default(2);
            $table->double('paidAmount');
            $table->double('invAmount');
            $table->tinyInteger('is_point_request')->default(2);
            $table->tinyInteger('is_point_confirmed')->default(2);
            $table->integer('insp_id');
            $table->string('insp', 50);
            $table->integer('fd_country_id');
            $table->string('fd_country', 50);
            $table->string('fd_city', 50);
            $table->date('extend_due_date');
            $table->integer('cc_id');
            $table->string('cc_name', 50);
            $table->date('cc_date');
            $table->string('cc_track_no', 30);
            $table->string('cc_track_url', 200);
            $table->double('coupon_request_amount');
            $table->string('tlt', 5);
            $table->string('name', 30);
            $table->string('company', 100);
            $table->string('address', 150);
            $table->string('city', 30);
            $table->string('country', 30);
            $table->string('email', 30);
            $table->string('tel_1', 15);
            $table->string('tel_2', 15);
            $table->text('same_as');
            $table->string('con_tlt', 5);
            $table->string('con_name', 30);
            $table->string('con_company', 100);
            $table->string('con_address', 150);
            $table->string('con_city', 30);
            $table->string('con_country', 30);
            $table->string('state', 50);
            $table->string('con_email', 30);
            $table->string('con_tel_1', 15);
            $table->string('con_tel_2', 15);
            $table->string('ship_company', 50);
            $table->string('ship_address1', 150);
            $table->string('ship_address2', 150);
            $table->string('ship_city', 30);
            $table->string('ship_state', 30);
            $table->string('ship_country', 30);
            $table->string('consstate', 50);
            $table->string('ship_zip', 15);
            $table->string('ship_telephone_1', 15);
            $table->string('ship_fax', 30);
            $table->string('ship_website', 80);
            $table->string('ship_email', 50);
            $table->string('zip', 20);
            $table->string('conszip', 20);
            $table->double('total_order_price');
            $table->smallInteger('unit');
            $table->double('tax_percent');
            $table->double('tax_amount');
            $table->double('gtotal');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jpn_orders');
    }
};
