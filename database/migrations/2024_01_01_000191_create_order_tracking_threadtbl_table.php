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
        Schema::create('order_tracking_threadtbl', function (Blueprint $table) {
            $table->integer('threadId');
            $table->string('order_id', 224)->nullable();
            $table->string('subject', 224)->nullable();
            $table->text('detail')->nullable();
            $table->date('createDate')->nullable();
            $table->string('createDateTime', 30)->nullable();
            $table->timestamp('timestamp')->useCurrent();
            $table->dateTime('actualCreateDateTime')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_tracking_threadtbl');
    }
};
