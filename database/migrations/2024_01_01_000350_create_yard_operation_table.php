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
        Schema::create('yard_operation', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('create_by');
            $table->dateTime('create_date');
            $table->date('in_date');
            $table->string('auction_yard', 50);
            $table->string('yard_name', 50);
            $table->date('out_date');
            $table->string('reason_out', 50);
            $table->string('requested_by', 40);
            $table->string('transported_by', 40);
            $table->integer('key_number');
            $table->text('remarks');
            $table->integer('updated_by');
            $table->dateTime('updated_on');
            $table->string('stock_number', 50);
            $table->string('chassis_no', 50);
            $table->string('type', 25);
            $table->text('images');
            $table->string('insp_sheet', 100);
            $table->string('insp_sheetout', 100);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('yard_operation');
    }
};
