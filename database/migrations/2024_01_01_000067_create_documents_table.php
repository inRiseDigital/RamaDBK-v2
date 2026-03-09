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
        Schema::create('documents', function (Blueprint $table) {
            $table->string('stock_no', 20)->default('');
            $table->string('document_id', 25)->default('');
            $table->string('document_name', 224)->nullable();
            $table->string('document_title', 224)->nullable()->default('');
            $table->boolean('doc_permission')->nullable()->default(1);
            $table->boolean('flg');
            $table->string('uniq_code', 200)->nullable();
            $table->integer('doc_master_id');
            $table->integer('doc_restored')->default(1)->comment('1= old;2>pending;3copied;4>>auc_sheet pending;5 >> aucsheet copied');
            $table->dateTime('imgmove_aws_date');
            $table->integer('aws_copied')->default(2);
            $table->dateTime('upload_date')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
