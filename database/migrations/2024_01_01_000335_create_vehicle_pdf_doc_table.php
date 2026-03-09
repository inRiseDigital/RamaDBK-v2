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
        Schema::create('vehicle_pdf_doc', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('stock_no');
            $table->string('pdf_title', 50);
            $table->string('pdf_name', 50);
            $table->string('pdf_id', 1);
            $table->integer('show_to');
            $table->string('uniq_code', 200)->nullable();
            $table->integer('doc_master_id');
            $table->integer('aws_copied')->default(2);
            $table->dateTime('imgmove_aws_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicle_pdf_doc');
    }
};
