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
        Schema::create('transfer_slips_tbl', function (Blueprint $table) {
            $table->integer('transfer_slip_no');
            $table->string('transfer_slip_id', 20);
            $table->date('slip_create_date');
            $table->enum('transfer_slip_type', ['staff', 'other'])->default('other')->comment('staff , other');
            $table->string('name', 100);
            $table->string('branch_name', 250);
            $table->double('amount')->comment('transfer slip amount');
            $table->string('currency', 5)->default('jpy');
            $table->double('exchange_rate');
            $table->integer('amount_jpy');
            $table->string('remark', 250);
            $table->enum('status', ['pending', 'finalized'])->default('pending')->comment('pending , finalized');
            $table->integer('created_by');
            $table->integer('last_edit_by');
            $table->double('un_balanced_amount');
            $table->date('finalize_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transfer_slips_tbl');
    }
};
