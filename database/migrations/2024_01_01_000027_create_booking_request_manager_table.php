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
        Schema::create('booking_request_manager', function (Blueprint $table) {
            $table->integer('request_id');
            $table->date('request_date');
            $table->integer('from_country');
            $table->integer('from_port');
            $table->integer('to_country');
            $table->integer('to_port');
            $table->integer('shipping_line');
            $table->string('vessel_name', 30);
            $table->string('voyage_no', 30);
            $table->date('ETD');
            $table->date('ETA');
            $table->date('cut_date');
            $table->smallInteger('freight');
            $table->smallInteger('ship_type');
            $table->string('to', 30);
            $table->integer('forwarder');
            $table->string('shipper', 30);
            $table->string('booking_ref', 15);
            $table->string('our_ref', 15);
            $table->string('remark', 500);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_request_manager');
    }
};
