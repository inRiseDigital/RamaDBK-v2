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
        Schema::create('overtime_slip', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('user_id');
            $table->string('user_name', 20);
            $table->dateTime('create_date');
            $table->string('work_type', 14);
            $table->date('from_date');
            $table->integer('to_date');
            $table->string('from_time', 10);
            $table->string('to_time', 10);
            $table->text('reason');
            $table->integer('status')->default(0)->comment('0-applied, 1-rejected, 2-approved');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('overtime_slip');
    }
};
