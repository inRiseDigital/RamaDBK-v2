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
        Schema::create('order_price_details', function (Blueprint $table) {
            $table->string('order_id', 40)->default('');
            $table->string('stock_no', 20)->default('');
            $table->string('s_no', 50)->nullable()->default('1');
            $table->string('stock_number', 25)->nullable();
            $table->string('vehicle_title', 250)->nullable();
            $table->string('make', 50)->default('');
            $table->string('maker', 50)->default('');
            $table->string('model', 50)->default('');
            $table->string('type', 50)->default('');
            $table->string('subtype', 50)->default('');
            $table->string('engine_cc', 10)->default('');
            $table->string('year', 10)->default('');
            $table->string('chassis_no', 50)->nullable();
            $table->string('drive', 15)->default('');
            $table->integer('quantity')->unsigned()->default(1);
            $table->double('fob_price')->nullable();
            $table->double('fob_charge')->nullable();
            $table->double('freight_charges')->nullable();
            $table->double('insurance_charges')->nullable();
            $table->double('recondition_charges')->nullable();
            $table->double('other_charges')->nullable();
            $table->double('custom_charges')->nullable();
            $table->string('extra_caption', 50)->nullable();
            $table->double('extra_charges')->nullable();
            $table->string('delivery', 10)->default('');
            $table->string('mounted_used_parts', 200)->default('');
            $table->string('fuel', 10)->default('');
            $table->string('seating_capacity', 10)->default('');
            $table->string('net_weight', 10)->default('');
            $table->string('gross_weight', 10)->default('');
            $table->string('body_size', 25)->default('');
            $table->string('measurement', 10)->default('');
            $table->string('vehicle_no', 100)->nullable();
            $table->string('mark', 50)->nullable();
            $table->text('description')->nullable();
            $table->string('container_no', 50)->nullable();
            $table->string('part_number', 255)->nullable();
            $table->string('is_spare', 255)->default('0');
            $table->string('is_invoice', 255)->default('0');
            $table->text('accessories');
            $table->text('other_option');
            $table->boolean('dead_stock')->default(0);
            $table->double('market_price');
            $table->double('buying_price');
            $table->boolean('inspect_cert_chk')->default(2);
            $table->string('ext_color', 15);
            $table->integer('mfg_year');
            $table->boolean('ext_color_checked');
            $table->boolean('mfg_year_checked');
            $table->double('actual_freight')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_price_details');
    }
};
