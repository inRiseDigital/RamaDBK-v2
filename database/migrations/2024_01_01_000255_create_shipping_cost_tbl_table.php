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
        Schema::create('shipping_cost_tbl', function (Blueprint $table) {
            $table->integer('s_no');
            $table->string('invoice_no', 50);
            $table->integer('auction_charge');
            $table->integer('transportation_fee');
            $table->integer('inspection_charge');
            $table->integer('custom_clearaence');
            $table->integer('fwt_charge');
            $table->integer('other_charge')->nullable();
            $table->boolean('is_updated')->default(2);
            $table->string('model_code', 50);
            $table->string('maker', 50);
            $table->integer('repair_charge');
            $table->integer('office_charge');
            $table->integer('vanning_charge');
            $table->boolean('auction_charge_chekd')->nullable()->default(2);
            $table->boolean('transportation_fee_chekd')->nullable()->default(2);
            $table->boolean('inspection_charge_chekd')->nullable()->default(2);
            $table->boolean('custom_clearaence_chekd')->nullable()->default(2);
            $table->boolean('other_charge_chekd')->nullable()->default(2);
            $table->boolean('repair_charge_chekd')->nullable()->default(2);
            $table->boolean('office_charge_chekd')->nullable()->default(2);
            $table->boolean('vanning_charge_chekd')->nullable()->default(2);
            $table->boolean('fwt_charge_chekd')->nullable()->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_cost_tbl');
    }
};
