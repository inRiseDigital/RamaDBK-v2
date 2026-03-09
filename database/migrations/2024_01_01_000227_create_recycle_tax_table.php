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
        Schema::create('recycle_tax', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('user_id');
            $table->date('create_date');
            $table->integer('stock_no');
            $table->boolean('non_recycle')->default(2);
            $table->string('recycle_fee', 25);
            $table->boolean('bl')->default(2);
            $table->string('bl_print', 50);
            $table->boolean('ed')->default(2);
            $table->boolean('export_massho')->default(2);
            $table->string('ex_massho_print', 50);
            $table->date('date_of_apply');
            $table->boolean('apply_status')->default(2);
            $table->string('refund_amount', 25);
            $table->date('date_of_recevied');
            $table->boolean('completed_status')->default(2);
            $table->string('appli_number', 50);
            $table->integer('interest');
            $table->boolean('bl_copy');
            $table->string('bl_copy_print', 50);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recycle_tax');
    }
};
