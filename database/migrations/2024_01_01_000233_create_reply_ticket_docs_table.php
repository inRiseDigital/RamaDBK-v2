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
        Schema::create('reply_ticket_docs', function (Blueprint $table) {
            $table->integer('ticket_id');
            $table->integer('response_id');
            $table->integer('operator_id');
            $table->string('docs_id', 5);
            $table->string('file_real_name', 250);
            $table->string('file_name', 250);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reply_ticket_docs');
    }
};
