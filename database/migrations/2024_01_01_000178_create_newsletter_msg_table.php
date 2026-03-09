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
        Schema::create('newsletter_msg', function (Blueprint $table) {
            $table->integer('msg_id');
            $table->string('msg_name', 100)->default('');
            $table->string('subject', 100)->nullable();
            $table->text('msg');
            $table->date('sent_date')->nullable();
            $table->date('create_date')->nullable();
            $table->char('format_htm_text', 1)->nullable()->default('1');
            $table->date('update_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('newsletter_msg');
    }
};
