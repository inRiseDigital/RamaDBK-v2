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
        Schema::create('sales_report_receive_tbl', function (Blueprint $table) {
            $table->integer('report_id');
            $table->integer('receiver_id');
            $table->tinyInteger('read_status')->comment('1 - no 2 - yes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales_report_receive_tbl');
    }
};
