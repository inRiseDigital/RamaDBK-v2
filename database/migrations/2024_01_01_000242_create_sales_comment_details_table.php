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
        Schema::create('sales_comment_details', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('inq_id');
            $table->text('reply_message');
            $table->dateTime('create_date');
            $table->integer('reply_by');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales_comment_details');
    }
};
