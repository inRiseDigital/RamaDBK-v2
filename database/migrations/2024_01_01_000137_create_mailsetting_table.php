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
        Schema::create('mailsetting', function (Blueprint $table) {
            $table->smallInteger('maxMailsToSent')->comment('maximum numbers of mail to send in a set time interval');
            $table->smallInteger('timeInterval')->comment('time interval to send mails');
            $table->timestamp('last_sent_time')->useCurrent()->comment('last time when mails sent from queue');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mailsetting');
    }
};
