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
        Schema::create('negotiation_conversations', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('negotiate_id');
            $table->enum('reply_by', ['buyer', 'sales']);
            $table->dateTime('reply_date');
            $table->text('message');
            $table->string('attach_file_name', 150);
            $table->boolean('read_flag')->default(2)->comment('2=unread,1=read');
            $table->smallInteger('trans_flag');
            $table->string('user_ip', 30);
            $table->string('user_ip_country', 50);
            $table->dateTime('seen')->comment('customer seen this message');
            $table->dateTime('remind')->comment('remind by sales person to client');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negotiation_conversations');
    }
};
