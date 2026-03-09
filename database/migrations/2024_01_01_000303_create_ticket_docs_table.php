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
        Schema::create('ticket_docs', function (Blueprint $table) {
            $table->integer('ticket_id');
            $table->string('docs_id', 2);
            $table->string('docs_real_name', 150);
            $table->string('file_name', 250);
            $table->integer('response_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket_docs');
    }
};
