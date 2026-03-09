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
        Schema::create('misc_invoice_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->string('insurance_no', 21);
            $table->string('member_id', 11);
            $table->string('member_name', 31);
            $table->string('stock_number', 21);
            $table->string('created_by', 21);
            $table->double('insurance_amount');
            $table->date('create_date');
            $table->double('adjust_due_amount');
            $table->string('inv_ref_id', 30);
            $table->string('insurance_doc', 51);
            $table->string('insurance_curr', 3);
            $table->double('buying_price');
            $table->string('buying_curr', 3);
            $table->string('member_email', 30);
            $table->integer('stock_no');
            $table->string('created_by_name', 30);
            $table->double('curr_ex_rate')->default(1);
            $table->double('totalallocated');
            $table->boolean('is_paid')->default(2)->comment('1-paid, 2-unpaid');
            $table->string('chassis_no', 50);
            $table->text('description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('misc_invoice_tbl');
    }
};
