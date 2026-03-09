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
        Schema::create('freight_mastertbl', function (Blueprint $table) {
            $table->integer('frId');
            $table->integer('fctryId')->nullable();
            $table->integer('fportId')->nullable();
            $table->string('f_port', 100);
            $table->integer('tctryId')->nullable();
            $table->integer('tportId')->nullable();
            $table->string('t_port', 100);
            $table->integer('smId')->nullable();
            $table->double('ratePerM3')->nullable();
            $table->double('m3r1a')->nullable();
            $table->double('m3r1b')->nullable();
            $table->double('m3r2a')->nullable();
            $table->double('m3r2b')->nullable();
            $table->double('m3r3a')->nullable();
            $table->double('m3r3b')->nullable();
            $table->double('m3r4a')->nullable();
            $table->double('m3r4b')->nullable();
            $table->double('m3r5a')->nullable();
            $table->double('m3r5b')->nullable();
            $table->double('m3r6a')->nullable();
            $table->double('m3r6b')->nullable();
            $table->double('rateM3r1')->nullable();
            $table->double('rateM3r2')->nullable();
            $table->double('rateM3r3')->nullable();
            $table->double('rateM3r4')->nullable();
            $table->double('rateM3r5')->nullable();
            $table->double('rateM3r6')->nullable();
            $table->double('ratePerKt')->nullable();
            $table->double('ktr1a')->nullable();
            $table->double('ktr1b')->nullable();
            $table->double('ktr2a')->nullable();
            $table->double('ktr2b')->nullable();
            $table->double('ktr3a')->nullable();
            $table->double('ktr3b')->nullable();
            $table->double('ktr4a')->nullable();
            $table->double('ktr4b')->nullable();
            $table->double('ktr5a')->nullable();
            $table->double('ktr5b')->nullable();
            $table->double('ktr6a')->nullable();
            $table->double('ktr6b')->nullable();
            $table->double('rateKtr1')->nullable();
            $table->double('rateKtr2')->nullable();
            $table->double('rateKtr3')->nullable();
            $table->double('rateKtr4')->nullable();
            $table->double('rateKtr5')->nullable();
            $table->double('rateKtr6')->nullable();
            $table->double('con20fM3')->nullable();
            $table->double('con20fUnit')->nullable();
            $table->double('con20fRate')->nullable();
            $table->double('con40fM3')->nullable();
            $table->double('con40fUnit')->nullable();
            $table->double('con40fRate')->nullable();
            $table->string('calculateM3', 20)->nullable();
            $table->string('calculateKt', 20)->nullable();
            $table->tinyInteger('fos_id');
            $table->integer('shipment_from');
            $table->integer('shipment_to');
            $table->string('comment', 255);
            $table->double('additional_cost');
            $table->string('shipper', 31);
            $table->double('fright_buffer');
            $table->string('no_of_days', 30);
            $table->double('cont_20');
            $table->double('cont_40');
            $table->double('cont_40_cube');
            $table->boolean('default_calculation')->default(0);
            $table->string('ship_company', 100);
            $table->string('from_country', 100);
            $table->string('to_country', 100);
            $table->date('date_of_update');
            $table->date('validity');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('freight_mastertbl');
    }
};
