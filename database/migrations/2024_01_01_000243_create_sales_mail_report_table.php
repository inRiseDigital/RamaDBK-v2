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
        Schema::create('sales_mail_report', function (Blueprint $table) {
            $table->integer('id');
            $table->date('mail_sent_date');
            $table->string('stock_number', 50);
            $table->string('make', 50);
            $table->string('maker', 50);
            $table->string('chassis_no', 50);
            $table->date('purchase_date');
            $table->date('extend_date');
            $table->string('mfg_year', 10);
            $table->string('country_name', 100);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales_mail_report');
    }
};
