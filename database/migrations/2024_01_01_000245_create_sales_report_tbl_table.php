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
        Schema::create('sales_report_tbl', function (Blueprint $table) {
            $table->integer('report_id');
            $table->date('report_date');
            $table->dateTime('create_date');
            $table->integer('sales_person_id');
            $table->integer('no_of_sold');
            $table->integer('no_of_purchase_request');
            $table->integer('no_of_quotation_sent');
            $table->integer('no_of_proforma_sent');
            $table->string('no_of_inquiries_assigned', 10);
            $table->string('no_of_neg_offered', 10);
            $table->string('no_of_mail_replies', 10);
            $table->string('no_of_calls', 10);
            $table->text('remark');
            $table->text('admin_remark');
            $table->boolean('mail_status')->comment('1 - send 2- not send');
            $table->integer('read_status')->comment('1 - no 2 - yes');
            $table->date('admin_remark_date');
            $table->integer('remark_by');
            $table->string('proforma_invoices', 10);
            $table->string('sold_mark', 10);
            $table->string('payments_assign_and_allocation', 10);
            $table->string('shipping_instructions_arrangement', 10);
            $table->string('vehicles_documents_upload', 10);
            $table->string('do_release_requested', 10);
            $table->string('repair_costs_checked', 10);
            $table->string('additional_duties_and_support', 10);
            $table->string('sds_file_update_and_sds_work', 11);
            $table->string('surrender_request', 10);
            $table->string('invoice_request', 10);
            $table->string('sales_report', 10);
            $table->string('received_mail_reply', 10);
            $table->string('sent_mail', 10);
            $table->string('spear_parts', 10);
            $table->string('shipping_file_update', 10);
            $table->string('customer_complain_handling', 10);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales_report_tbl');
    }
};
