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
        Schema::create('inspection_status_manager', function (Blueprint $table) {
            $table->integer('s_no');
            $table->integer('stock_no');
            $table->string('chassis_no', 50);
            $table->string('invoice_no', 50);
            $table->tinyInteger('inspection_type_id')->nullable();
            $table->tinyInteger('inspection_status')->nullable();
            $table->date('inspection_date')->nullable();
            $table->tinyInteger('certificate_status')->nullable();
            $table->date('applied_date')->nullable();
            $table->string('ref_no', 20)->nullable();
            $table->date('received_date')->nullable();
            $table->date('handed_date')->nullable();
            $table->integer('handed_over_to')->nullable();
            $table->date('certificate_issued_date')->nullable();
            $table->date('expire_date')->nullable();
            $table->integer('country_id')->nullable();
            $table->integer('done_country_id')->nullable();
            $table->text('remark');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspection_status_manager');
    }
};
