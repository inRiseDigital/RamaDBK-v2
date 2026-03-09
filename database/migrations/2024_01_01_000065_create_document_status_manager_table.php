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
        Schema::create('document_status_manager', function (Blueprint $table) {
            $table->integer('s_no');
            $table->string('invoice_no', 50);
            $table->tinyInteger('document_types_id');
            $table->tinyInteger('document_status');
            $table->tinyInteger('received_by');
            $table->date('received_date');
            $table->date('certificate_issued_date');
            $table->date('expire_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('document_status_manager');
    }
};
