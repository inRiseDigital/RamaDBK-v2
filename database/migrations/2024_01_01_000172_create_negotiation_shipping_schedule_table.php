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
        Schema::create('negotiation_shipping_schedule', function (Blueprint $table) {
            $table->integer('sp_id');
            $table->integer('negotiate_id');
            $table->smallInteger('ship_company');
            $table->string('voyage_number', 25);
            $table->string('vessel_name', 50);
            $table->date('etd_date');
            $table->date('eta_date');
            $table->enum('shipment_type', ['ro-ro', 'container']);
            $table->string('bl_copy', 50);
            $table->integer('courier_compny');
            $table->string('docate_number', 20);
            $table->string('start_url', 200);
            $table->string('end_url', 200);
            $table->dateTime('send_date');
            $table->text('document_name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negotiation_shipping_schedule');
    }
};
