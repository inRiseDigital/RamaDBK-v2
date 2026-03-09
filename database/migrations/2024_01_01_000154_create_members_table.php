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
        Schema::create('members', function (Blueprint $table) {
            $table->integer('member_id');
            $table->string('member', 50)->default('');
            $table->string('password', 50)->default('');
            $table->integer('status')->unsigned()->nullable()->default(0);
            $table->integer('rating')->unsigned()->nullable()->default(1);
            $table->dateTime('access_date')->nullable();
            $table->date('create_date')->nullable();
            $table->dateTime('update_date')->nullable();
            $table->integer('modify')->unsigned()->nullable();
            $table->string('tag', 10)->nullable();
            $table->string('ip', 50)->default('');
            $table->string('ipCountry', 60)->default('');
            $table->string('code', 50)->nullable()->comment('unique member code');
            $table->string('memb_currency', 10);
            $table->string('operator', 150);
            $table->dateTime('log_date');
            $table->string('master_account_email', 50);
            $table->integer('master_account_id');
            $table->double('master_account_amount_per');
            $table->integer('sub_account_id');
            $table->date('master_account_date');
            $table->integer('purchase_units');
            $table->enum('auc_permission', ['yes', 'no'])->default('no');
            $table->integer('uss_image');
            $table->enum('market_price', ['yes', 'no'])->default('no');
            $table->enum('bid_permission', ['yes', 'no'])->default('no');
            $table->enum('bid_mail_permission', ['yes', 'no'])->default('no');
            $table->enum('is_uss', ['yes', 'no'])->default('no');
            $table->string('ship_percentage', 10);
            $table->boolean('bl_copy_sent');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
