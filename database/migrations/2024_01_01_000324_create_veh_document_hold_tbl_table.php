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
        Schema::create('veh_document_hold_tbl', function (Blueprint $table) {
            $table->integer('stock_no');
            $table->tinyInteger('doc_hold_status')->default(2)->comment('1 - yes 2 - no');
            $table->string('remark', 250);
            $table->dateTime('created_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('veh_document_hold_tbl');
    }
};
