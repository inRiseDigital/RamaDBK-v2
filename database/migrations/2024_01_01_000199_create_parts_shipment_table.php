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
        Schema::create('parts_shipment', function (Blueprint $table) {
            $table->integer('id');
            $table->smallInteger('parts_shipment_flag');
            $table->smallInteger('courier_id')->nullable();
            $table->date('ETD');
            $table->date('ETA');
            $table->string('tracking_no', 10);
            $table->smallInteger('payment_type');
            $table->string('account_no', 20);
            $table->smallInteger('shipment_type')->nullable();
            $table->smallInteger('from_country')->nullable();
            $table->smallInteger('from_port')->nullable();
            $table->smallInteger('to_country')->nullable();
            $table->smallInteger('to_port')->nullable();
            $table->smallInteger('shipping_line')->nullable();
            $table->string('vessel_name', 50);
            $table->string('voyage_no', 20);
            $table->smallInteger('forwarder')->nullable();
            $table->string('carrier', 50);
            $table->string('flight_no', 20);
            $table->string('awb_no', 20);
            $table->string('container_no', 10);
            $table->smallInteger('sales_person_id');
            $table->dateTime('create_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parts_shipment');
    }
};
