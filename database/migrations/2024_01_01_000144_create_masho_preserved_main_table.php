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
        Schema::create('masho_preserved_main', function (Blueprint $table) {
            $table->integer('id');
            $table->string('no', 11);
            $table->string('veh_reg_no', 50);
            $table->string('maker_serial_number', 50);
            $table->dateTime('created_date');
            $table->dateTime('updated_date');
            $table->integer('created_by');
            $table->string('stock_no', 20);
            $table->date('footer_date');
            $table->string('stock_number', 20);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('masho_preserved_main');
    }
};
