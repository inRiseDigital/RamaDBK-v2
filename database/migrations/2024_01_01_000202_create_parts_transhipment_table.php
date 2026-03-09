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
        Schema::create('parts_transhipment', function (Blueprint $table) {
            $table->integer('id');
            $table->smallInteger('parts_ship_id');
            $table->smallInteger('parts_ship_flag');
            $table->smallInteger('from_country');
            $table->smallInteger('to_country');
            $table->smallInteger('from_port');
            $table->smallInteger('to_port');
            $table->smallInteger('shipping_line');
            $table->string('vessel_name', 50);
            $table->string('voyage_no', 20);
            $table->smallInteger('forwarder');
            $table->date('ETA');
            $table->date('ETD');
            $table->smallInteger('payment_type');
            $table->smallInteger('sales_person_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parts_transhipment');
    }
};
