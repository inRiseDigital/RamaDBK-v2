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
        Schema::create('jpn_order_setting', function (Blueprint $table) {
            $table->integer('id');
            $table->string('inv_logo', 50);
            $table->enum('logo_pos', ['left', 'right'])->default('left');
            $table->string('inv_seal', 50);
            $table->text('sales_agree');
            $table->text('admin_comment');
            $table->text('shipment_remark');
            $table->string('shipper_name', 50);
            $table->string('signatory', 30);
            $table->string('address_1', 150);
            $table->string('address_2', 150);
            $table->string('city', 30);
            $table->string('state', 30);
            $table->string('country', 30);
            $table->string('zip', 15);
            $table->string('tel', 15);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jpn_order_setting');
    }
};
