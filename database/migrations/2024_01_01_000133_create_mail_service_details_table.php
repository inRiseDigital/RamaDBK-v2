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
        Schema::create('mail_service_details', function (Blueprint $table) {
            $table->integer('id');
            $table->string('aws_mail_from', 100);
            $table->string('aws_username', 100);
            $table->string('aws_password', 100);
            $table->string('aws_host', 100);
            $table->smallInteger('aws_port');
            $table->string('aws_hostname', 50);
            $table->tinyInteger('send_mail_by')->default(1);
            $table->string('pop3_hostname', 100);
            $table->string('pop3_port', 11);
            $table->string('pop3_tls', 50);
            $table->string('pop3_user', 100);
            $table->string('pop3_pass', 50);
            $table->string('pop3_auth', 50);
            $table->string('skip_email', 1000);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mail_service_details');
    }
};
