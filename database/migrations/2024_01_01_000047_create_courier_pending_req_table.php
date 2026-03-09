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
        Schema::create('courier_pending_req', function (Blueprint $table) {
            $table->integer('id');
            $table->string('stock', 100);
            $table->string('invoice', 100);
            $table->string('ref_id', 50);
            $table->string('units', 10);
            $table->string('bl_release', 50);
            $table->string('inspection', 50);
            $table->string('accessory', 100);
            $table->string('mt_nm', 100);
            $table->string('other_access', 100);
            $table->string('country', 20);
            $table->string('company_name', 20);
            $table->string('consignee_name', 20);
            $table->string('address', 100);
            $table->string('zip', 10);
            $table->string('city', 20);
            $table->string('tel', 15);
            $table->string('email', 50);
            $table->string('note', 150);
            $table->integer('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courier_pending_req');
    }
};
