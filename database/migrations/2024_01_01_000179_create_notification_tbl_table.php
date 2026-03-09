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
        Schema::create('notification_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->date('create_date');
            $table->date('notice_from_date');
            $table->date('notice_to_date');
            $table->string('title', 100);
            $table->text('descriptions');
            $table->tinyInteger('set_notice_to_all')->comment('1 - no 2 - yes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notification_tbl');
    }
};
