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
        Schema::create('order_invoice_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->string('invoice_no', 50)->default('');
            $table->string('quotation_id', 50);
            $table->string('performa_id', 50)->nullable();
            $table->string('lc_doc_no', 50)->nullable();
            $table->string('lc_date', 50)->nullable();
            $table->string('lc_bank', 255)->nullable();
            $table->string('marks_nos', 255)->nullable();
            $table->integer('shipment_type');
            $table->string('ship_company', 255);
            $table->string('ship_date', 100);
            $table->text('comment_mid')->nullable();
            $table->text('comment_bot')->nullable();
            $table->date('invoice_date')->nullable();
            $table->integer('invoice_exp_days')->default(14)->comment('no of days to expire proforma invoice after invoice_date');
            $table->boolean('status')->nullable()->default(0)->comment('0-pending 1-mature 3 cancel');
            $table->boolean('invoice_type')->nullable()->default(1)->comment('1-performa 2-final');
            $table->boolean('mail_status')->nullable()->default(0);
            $table->integer('jpy_ex_rate')->nullable();
            $table->double('adjust_due_amount')->nullable()->default(0);
            $table->timestamp('due_adjust_date')->nullable();
            $table->text('shipping_remark')->nullable();
            $table->smallInteger('cc_id');
            $table->string('docate_no', 255);
            $table->date('date');
            $table->string('remark', 250);
            $table->date('commission_calc_on');
            $table->integer('cust_id');
            $table->string('inv_curr', 5);
            $table->double('inv_total_amt');
            $table->string('is_inv_spare', 255)->default('\0');
            $table->string('inv_chassis_no', 50);
            $table->dateTime('cancel_date');
            $table->dateTime('last_matching_cron');
            $table->boolean('matching_alert')->default(1);
            $table->date('commission_calc_checked');
            $table->string('export_certificate_no', 50);
            $table->date('declaration_date');
            $table->string('invoice_group_id', 50);
            $table->boolean('document_release')->default(0);
            $table->string('manager_id', 30);
            $table->boolean('courier_sent')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_invoice_tbl');
    }
};
