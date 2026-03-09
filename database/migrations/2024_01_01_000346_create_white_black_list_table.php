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
        Schema::create('white_black_list', function (Blueprint $table) {
            $table->integer('s_no');
            $table->string('email', 255)->comment('email id of visitor who has put enquiry or contact us at jct or network site');
            $table->tinyInteger('white_black_status')->comment('1 - white list 2 -black list');
            $table->boolean('stop_emails')->default(0)->comment('stop sending emails');
            $table->text('block_reason');
            $table->boolean('block_type')->comment('1-permanent, 2-temporary');
            $table->dateTime('block_date');
            $table->string('block_status_code', 10);
            $table->boolean('is_spam')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('white_black_list');
    }
};
