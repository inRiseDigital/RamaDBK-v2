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
        Schema::create('shipping_info_DEC_18_2024', function (Blueprint $table) {
            $table->integer('s_no');
            $table->integer('stock_no');
            $table->string('stock_number', 12);
            $table->string('chassis_no', 16);
            $table->string('invoice_no', 50);
            $table->integer('shipping_status');
            $table->string('shipping_line', 255);
            $table->string('vessel_name', 255);
            $table->string('voyage_number', 50);
            $table->date('ETD_date');
            $table->date('ETA_date');
            $table->text('Remark_inner_cargo');
            $table->text('Remark_internal_mng');
            $table->date('cancel_date');
            $table->text('cancel_reason');
            $table->boolean('is_authorized');
            $table->text('autherize_remark');
            $table->integer('shipment_type');
            $table->text('shipment_remark');
            $table->date('bill_of_lading_date');
            $table->string('bill_of_lading_number', 50);
            $table->integer('bill_of_lading_charge');
            $table->timestamp('auth_timestamp')->nullable();
            $table->timestamp('shipping_remark_last_modified_time')->nullable();
            $table->timestamp('shipping_remark_create_time')->nullable();
            $table->string('BL_sent', 255)->default('0');
            $table->string('BL_received', 255)->default('0');
            $table->date('bill_sent_date');
            $table->string('amount_due', 255)->default('0');
            $table->date('re_shipped_date')->nullable()->comment('re-shipped date');
            $table->text('re_shipped_remark')->nullable()->comment('re-shipped remark');
            $table->string('BL_new_sent', 255)->default('0');
            $table->boolean('is_imported')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_info_DEC_18_2024');
    }
};
