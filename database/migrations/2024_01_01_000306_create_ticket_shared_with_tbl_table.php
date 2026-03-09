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
        Schema::create('ticket_shared_with_tbl', function (Blueprint $table) {
            $table->integer('sr_no');
            $table->integer('ticket_id');
            $table->integer('operator_id')->comment('operator id ticket shared with another');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket_shared_with_tbl');
    }
};
