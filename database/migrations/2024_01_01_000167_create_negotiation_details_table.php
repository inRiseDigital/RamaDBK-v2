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
        Schema::create('negotiation_details', function (Blueprint $table) {
            $table->integer('nego_id');
            $table->integer('veh_id');
            $table->integer('cust_id');
            $table->date('nego_date');
            $table->boolean('read_flag')->default(2)->comment('1-yes,2-no');
            $table->enum('nego_status', ['in-process', 'cancel', 'success'])->default('in-process');
            $table->dateTime('when_cancel');
            $table->enum('who_cancel', ['buyer', 'sales'])->nullable();
            $table->dateTime('when_req_process');
            $table->enum('who_req_process', ['buyer', 'sales'])->nullable();
            $table->dateTime('when_in_process');
            $table->boolean('is_refund')->default(2);
            $table->integer('sales_person');
            $table->date('sales_assign_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negotiation_details');
    }
};
