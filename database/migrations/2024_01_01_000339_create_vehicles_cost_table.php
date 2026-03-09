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
        Schema::create('vehicles_cost', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('stock_no');
            $table->integer('cost_type_id');
            $table->double('amount')->nullable();
            $table->date('bill_date');
            $table->text('remark')->nullable();
            $table->integer('insert_by');
            $table->integer('update_by');
            $table->date('update_date');
            $table->boolean('is_updated')->default(2);
            $table->string('stock_number', 50);
            $table->string('chassis_no', 50);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles_cost');
    }
};
