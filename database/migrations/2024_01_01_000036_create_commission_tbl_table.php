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
        Schema::create('commission_tbl', function (Blueprint $table) {
            $table->string('invoice_no', 50);
            $table->double('commission')->default(0)->comment('commission on the invoice');
            $table->date('paid_date')->comment('commisson paid date');
            $table->tinyInteger('status')->default(1)->comment('1 - un-paid; 2 - paid; 3 - cancelled');
            $table->date('inv_date');
            $table->integer('sales_person_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commission_tbl');
    }
};
