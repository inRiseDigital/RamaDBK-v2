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
        Schema::create('mn_client_msg_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('my_nag_id');
            $table->string('client_msg', 250);
            $table->dateTime('msg_date');
            $table->integer('client_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mn_client_msg_tbl');
    }
};
