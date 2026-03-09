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
        Schema::create('vehicle_remark', function (Blueprint $table) {
            $table->integer('s_no')->unsigned();
            $table->integer('stock_no')->unsigned();
            $table->string('stock_number', 50);
            $table->string('operator_id', 50);
            $table->text('remark')->nullable();
            $table->timestamp('date_time')->useCurrent();
            $table->string('trico_no', 3);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicle_remark');
    }
};
