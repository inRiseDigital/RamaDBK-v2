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
        Schema::create('memos', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('bid_id');
            $table->text('memos');
            $table->dateTime('memo_date');
            $table->integer('member_id');
            $table->string('msg_from', 30);
            $table->boolean('is_read');
            $table->boolean('is_new');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('memos');
    }
};
