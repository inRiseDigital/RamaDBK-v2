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
        Schema::create('documents_050924', function (Blueprint $table) {
            $table->string('stock_no', 20)->default('');
            $table->string('document_id', 25)->default('');
            $table->string('document_name', 224)->nullable();
            $table->string('document_title', 224)->nullable()->default('');
            $table->boolean('doc_permission')->nullable()->default(1);
            $table->boolean('flg');
            $table->string('uniq_code', 200)->nullable();
            $table->integer('doc_master_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents_050924');
    }
};
