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
        Schema::create('order_variables', function (Blueprint $table) {
            $table->string('order_id', 40)->default('');
            $table->string('payment_mode', 50)->nullable();
            $table->boolean('lc_type')->comment('1- lc_normal, 2-lc_usance');
            $table->string('shipping_mode', 50)->nullable();
            $table->integer('port_from_id')->unsigned()->nullable();
            $table->integer('port_to_id')->unsigned()->nullable();
            $table->integer('i_f')->unsigned()->nullable()->default(0);
            $table->integer('i_s')->unsigned()->nullable()->default(0);
            $table->integer('i_o')->unsigned()->nullable()->default(0);
            $table->string('trade_terms', 20)->default('');
            $table->string('shipped_by', 30)->default('');
            $table->string('to_country', 255)->nullable();
            $table->integer('to_country_id')->nullable();
            $table->string('port_from', 30)->default('');
            $table->string('port_to', 30)->default('');
            $table->double('tax')->default(0);
            $table->date('due_date')->default('0000-00-00');
            $table->string('ocean_vessel', 30)->default('');
            $table->string('is_sailing', 30)->default('');
            $table->string('loading_no', 50)->nullable();
            $table->integer('total_qty')->unsigned()->nullable();
            $table->boolean('is_attached')->unsigned()->nullable()->default(0);
            $table->boolean('is_commercial')->unsigned()->nullable()->default(0);
            $table->integer('person_in_charge')->nullable();
            $table->boolean('is_domestic')->comment('1 - domestic 2 - overseas');
            $table->integer('sales_assistant_id');
            $table->boolean('is_rc')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_variables');
    }
};
