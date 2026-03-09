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
        Schema::create('lc_draft_tbl', function (Blueprint $table) {
            $table->integer('s_no');
            $table->integer('receipt_no');
            $table->string('lc_number', 255);
            $table->string('LC_draft_no', 255);
            $table->integer('amount');
            $table->date('submit_date');
            $table->date('received_date');
            $table->boolean('status')->default(0)->comment('0 - on-process; 1 - cleared; 2 - canceled');
            $table->string('comments', 200);
            $table->text('chassis_no');
            $table->double('jpy_ex_rate');
            $table->string('invoice_no', 50);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lc_draft_tbl');
    }
};
