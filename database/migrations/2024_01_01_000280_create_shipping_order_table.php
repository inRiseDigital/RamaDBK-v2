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
        Schema::create('shipping_order', function (Blueprint $table) {
            $table->integer('id');
            $table->boolean('shipment_type')->default(0)->comment('shipment type 0 for ro-ro ; 1 for container');
            $table->text('shipper');
            $table->text('consignee');
            $table->text('notify_party');
            $table->text('remarks');
            $table->string('vessel_company', 50);
            $table->string('voyage_no', 50);
            $table->date('sailing_date');
            $table->date('ETA_date')->nullable();
            $table->string('loading_port', 50);
            $table->string('loading_country', 50);
            $table->string('discharge_country', 50);
            $table->string('discharge_port', 50);
            $table->text('shipping_marks');
            $table->float('vehs_weight')->comment('vehicle');
            $table->float('vehs_m3')->comment('vehicle');
            $table->string('container_no', 50)->nullable();
            $table->string('seal_no', 50)->nullable();
            $table->float('tare_weight')->nullable();
            $table->float('total_m3');
            $table->string('BL_issue_place', 50);
            $table->string('original_BL', 50);
            $table->string('vessel_name', 50);
            $table->string('_freight', 15);
            $table->float('total_weight');
            $table->tinyInteger('SO_status')->default(1)->comment('shipping order status : 1:in process, 2:cancelled, 3:shipped');
            $table->string('_freight_prepaid_as', 50)->default('as arranged')->comment('"freight prepaid" as arranged');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_order');
    }
};
