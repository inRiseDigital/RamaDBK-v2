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
        Schema::create('debit_due_adjust_tbl', function (Blueprint $table) {
            $table->integer('s_no');
            $table->string('dr_receipt_no', 50);
            $table->double('adjusted_due_amount');
            $table->date('adjusted_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('debit_due_adjust_tbl');
    }
};
