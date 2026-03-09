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
        Schema::create('refund_request_tbl', function (Blueprint $table) {
            $table->integer('request_id');
            $table->dateTime('request_date');
            $table->integer('request_by');
            $table->integer('customer_id');
            $table->tinyInteger('request_status')->default(1);
            $table->tinyInteger('request_type');
            $table->text('reason_of_refund');
            $table->string('bank_information', 250);
            $table->double('refund_amount');
            $table->string('currency', 50);
            $table->integer('authorize_by');
            $table->dateTime('authorize_date');
            $table->text('auth_remark');
            $table->integer('check_by');
            $table->dateTime('check_date');
            $table->text('check_comment');
            $table->string('image_name', 150);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('refund_request_tbl');
    }
};
