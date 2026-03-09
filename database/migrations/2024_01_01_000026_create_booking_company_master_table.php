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
        Schema::create('booking_company_master', function (Blueprint $table) {
            $table->integer('id');
            $table->text('mail_body');
            $table->string('booking_company', 100);
            $table->string('country', 50);
            $table->string('stock_place', 50);
            $table->string('shipping_company', 100);
            $table->text('to_names');
            $table->text('to_emails');
            $table->text('cc_names');
            $table->text('cc_emails');
            $table->text('attachments');
            $table->string('mail_subject', 250);
            $table->string('default_first_name', 50)->default('æ§˜ã€');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_company_master');
    }
};
