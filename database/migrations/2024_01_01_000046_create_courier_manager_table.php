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
        Schema::create('courier_manager', function (Blueprint $table) {
            $table->integer('s_no');
            $table->string('invoice_no', 255);
            $table->smallInteger('cc_id')->comment('courier company id');
            $table->string('docate_no', 255);
            $table->date('date');
            $table->string('remark', 250);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courier_manager');
    }
};
