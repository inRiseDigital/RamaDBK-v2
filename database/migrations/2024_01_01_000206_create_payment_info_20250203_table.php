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
        Schema::create('payment_info_20250203', function (Blueprint $table) {
            $table->integer('receipt_no');
            $table->string('payment_type', 50);
            $table->string('debit_type', 4)->nullable();
            $table->tinyInteger('bank_id')->nullable();
            $table->string('payment_mode', 255);
            $table->string('LC_draft_no', 255)->nullable();
            $table->string('draft_value', 20);
            $table->text('chassis_no')->nullable();
            $table->string('payment_ref', 255);
            $table->string('name', 255);
            $table->string('payment_received_in_bank', 25);
            $table->string('payment_received_in_bank_curr', 5);
            $table->string('payment_received_in_bank_curr_exrate', 15);
            $table->integer('received_amount')->nullable();
            $table->string('curr_received', 50)->nullable();
            $table->date('payment_date');
            $table->integer('customer_id')->nullable();
            $table->integer('sales_person_id')->nullable();
            $table->string('assign_status', 255)->default('0');
            $table->string('lock_status', 255)->default('0');
            $table->text('remark')->nullable();
            $table->date('issue_date')->nullable();
            $table->date('deposit_date');
            $table->date('lc_receive_date')->nullable()->comment('l/c receiving date');
            $table->string('applicant_name', 255)->nullable();
            $table->string('applicant_bank', 255)->nullable();
            $table->string('lc_number', 255)->nullable();
            $table->date('submit_bank_date')->nullable();
            $table->boolean('payment_status')->default(0);
            $table->double('unallocated_amount')->nullable()->comment('it will have un-allocated amount in jpy with respect to payment');
            $table->double('unallocated_amount_jpy');
            $table->double('jpy_ex_rate')->nullable();
            $table->enum('transaction_type', ['credit', 'debit'])->default('credit');
            $table->smallInteger('amend_no');
            $table->double('adjust_access_amount')->nullable()->default(0);
            $table->timestamp('access_amount_adjust_date')->nullable();
            $table->date('payment_received_date');
            $table->date('expire_date')->nullable();
            $table->string('cheque_no', 25)->nullable();
            $table->string('scan_file', 25)->nullable()->comment('scan copy of the payment document file');
            $table->enum('payment_assigned_to', ['customer', 'transfer slip'])->default('customer');
            $table->string('other_scan_file', 25);
            $table->integer('sales_assistant_id');
            $table->date('send_mail_status');
            $table->date('latest_date_shipment');
            $table->integer('remark_update_id');
            $table->dateTime('remark_update_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment_info_20250203');
    }
};
