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
        Schema::create('claim_manager', function (Blueprint $table) {
            $table->integer('request_id');
            $table->date('request_date');
            $table->integer('request_by');
            $table->integer('customer_id');
            $table->tinyInteger('request_status')->default(1);
            $table->tinyInteger('request_type');
            $table->text('reason_of_refund');
            $table->text('bank_information');
            $table->text('claim_approver_comment');
            $table->double('refund_amount');
            $table->string('currency', 50);
            $table->integer('authorize_by');
            $table->dateTime('authorize_date');
            $table->text('auth_remark');
            $table->integer('check_by');
            $table->dateTime('check_date');
            $table->text('check_comment');
            $table->string('image_name', 150);
            $table->integer('stock_id');
            $table->string('stock_number', 30);
            $table->integer('invoice_stock_id');
            $table->string('chassis_no', 50);
            $table->string('vehicle_title', 50);
            $table->string('invoice_member', 50);
            $table->string('invoice_no', 50);
            $table->string('request_name', 50);
            $table->date('approve_date');
            $table->integer('paid_from_bank');
            $table->date('paid_date');
            $table->integer('paid_amount');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('claim_manager');
    }
};
