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
        Schema::create('last_gmail_sync', function (Blueprint $table) {
            $table->integer('s_no');
            $table->dateTime('last_syn')->comment('last sync from');
            $table->integer('uid');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('last_gmail_sync');
    }
};
