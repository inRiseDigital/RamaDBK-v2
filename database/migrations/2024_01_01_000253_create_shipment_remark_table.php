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
        Schema::create('shipment_remark', function (Blueprint $table) {
            $table->integer('s_no');
            $table->string('invoice_no', 255);
            $table->text('remark');
            $table->string('operator_id', 50);
            $table->timestamp('date_time')->useCurrent();
            $table->integer('shipping_ref_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipment_remark');
    }
};
