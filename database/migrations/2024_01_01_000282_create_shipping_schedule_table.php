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
        Schema::create('shipping_schedule', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('region_id');
            $table->integer('shipcompany_id');
            $table->integer('forwarder_id');
            $table->integer('vessel_id');
            $table->string('vessel_name', 100);
            $table->string('voyage_no', 30);
            $table->string('types', 20);
            $table->text('shipping_date');
            $table->text('arrive_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_schedule');
    }
};
