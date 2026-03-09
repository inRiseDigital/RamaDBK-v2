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
        Schema::create('inspection_booking_attachment', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('mail_queue_id');
            $table->string('attachment_file', 100);
            $table->boolean('doc_upload_type')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspection_booking_attachment');
    }
};
