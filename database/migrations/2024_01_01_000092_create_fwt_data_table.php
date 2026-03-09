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
        Schema::create('fwt_data', function (Blueprint $table) {
            $table->integer('id');
            $table->dateTime('create_date');
            $table->string('chassis', 50);
            $table->string('car_name', 50);
            $table->year('year');
            $table->double('length');
            $table->double('width');
            $table->double('height');
            $table->double('m3');
            $table->char('car_shipment_style', 4);
            $table->integer('transport_count');
            $table->date('assigned_date_1');
            $table->date('assigned_date_2');
            $table->date('assigned_date_3');
            $table->date('assigned_date_4');
            $table->date('delivery_date_1');
            $table->date('delivery_date_2');
            $table->date('delivery_date_3');
            $table->date('delivery_date_4');
            $table->string('assigned_from_1', 20);
            $table->string('assigned_from_2', 20);
            $table->string('assigned_from_3', 20);
            $table->string('assigned_from_4', 20);
            $table->string('assigned_to_1', 50);
            $table->string('assigned_to_2', 50);
            $table->string('assigned_to_3', 50);
            $table->string('assigned_to_4', 50);
            $table->double('transport_charges_no_tax_1');
            $table->double('transport_charges_no_tax_2');
            $table->double('transport_charges_no_tax_3');
            $table->double('transport_charges_no_tax_4');
            $table->double('transport_charges_with_tax_1');
            $table->double('transport_charges_with_tax_2');
            $table->double('transport_charges_with_tax_3');
            $table->double('transport_charges_with_tax_4');
            $table->integer('inspection_count');
            $table->date('inspection_date_1');
            $table->date('inspection_date_2');
            $table->date('inspection_date_3');
            $table->date('inspection_date_4');
            $table->string('inspection_type_1', 30);
            $table->string('inspection_type_2', 30);
            $table->string('inspection_type_3', 30);
            $table->string('inspection_type_4', 30);
            $table->string('inspection_place_1', 50);
            $table->string('inspection_place_2', 50);
            $table->string('inspection_place_3', 50);
            $table->string('inspection_place_4', 50);
            $table->string('inspection_status_1', 30);
            $table->string('inspection_status_2', 30);
            $table->string('inspection_status_3', 30);
            $table->string('inspection_status_4', 30);
            $table->string('yard', 50);
            $table->double('yard_handling_charges');
            $table->double('yard_storage_charges');
            $table->string('pol', 50);
            $table->string('pod', 50);
            $table->string('stock_country', 50);
            $table->string('ship', 50);
            $table->date('ship_date');
            $table->string('shipment_type', 50);
            $table->string('shipment_invoice_no', 50);
            $table->date('shipment_invoice_date');
            $table->double('freight_rate');
            $table->double('freight_usd');
            $table->double('invoice_ex_rate');
            $table->double('freight_jpy');
            $table->string('container_freight_type', 50);
            $table->double('container_drayge');
            $table->double('container_booking_handling_fee');
            $table->double('container_invoice_ex_rate');
            $table->double('container_ocean_freight_jpy');
            $table->double('container_ocean_freight_usd');
            $table->double('container_emergency_bunker_charge_jpy');
            $table->double('container_emergency_bunker_charge_usd');
            $table->double('container_origin_thc');
            $table->double('container_seal_fee');
            $table->double('container_custom_fee');
            $table->double('container_documentation_fee');
            $table->double('container_bl_amendment_fee');
            $table->double('container_bl_surrender_fee');
            $table->double('container_miscellaneous');
            $table->double('shipping_agent_fee');
            $table->double('inspection_charges');
            $table->double('ship_misc_charges');
            $table->double('thc');
            $table->double('image_charges');
            $table->double('repair_charges');
            $table->double('radiation_charges');
            $table->double('go_down_charges');
            $table->double('engine_check_charges');
            $table->double('lashing_charges');
            $table->double('other_charges');
            $table->string('other_charges_comments', 50);
            $table->double('storage_charges');
            $table->double('adjustment');
            $table->string('adjustment_comments', 50);
            $table->date('masho_date');
            $table->date('ed_masho_date');
            $table->integer('image_count');
            $table->text('images');
            $table->integer('stock_no');
            $table->string('stock_number', 25);
            $table->dateTime('update_date');
            $table->boolean('is_image_sync')->default(2);
            $table->boolean('is_cost_copied')->default(2);
            $table->double('vanning_fee');
            $table->text('repair_comment');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fwt_data');
    }
};
