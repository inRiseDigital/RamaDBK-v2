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
        Schema::create('mailqueue', function (Blueprint $table) {
            $table->integer('id');
            $table->string('mailto', 255);
            $table->string('mailfrom', 50);
            $table->string('fromName', 50)->nullable();
            $table->string('subject', 255);
            $table->longText('message');
            $table->string('cc', 255)->nullable();
            $table->string('bcc', 255)->nullable();
            $table->tinyInteger('priority');
            $table->string('error', 255)->nullable();
            $table->string('on_hold_status', 255);
            $table->boolean('isHTML');
            $table->timestamp('create_date')->useCurrent();
            $table->string('mailType', 50)->nullable()->comment('pretty much similar to mail subject');
            $table->dateTime('sent_date');
            $table->string('country_name', 100);
            $table->text('stock_number_ref');
            $table->text('attachment');
            $table->string('toname', 255);
            $table->string('stock_offer_id', 50);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mailqueue');
    }
};
