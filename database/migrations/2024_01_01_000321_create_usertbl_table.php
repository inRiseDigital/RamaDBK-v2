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
        Schema::create('usertbl', function (Blueprint $table) {
            $table->increments('userId');
            $table->string('loginName', 224)->nullable();
            $table->string('password', 224)->nullable();
            $table->text('permission')->nullable();
            $table->string('status', 224)->nullable();
            $table->string('dateCreated', 224)->nullable();
            $table->string('userTitle', 30)->nullable();
            $table->string('userName', 224)->nullable();
            $table->string('company', 224)->nullable();
            $table->text('addressOne')->nullable();
            $table->text('addressTwo')->nullable();
            $table->string('city', 224)->nullable();
            $table->string('state', 224)->nullable();
            $table->string('zip', 224)->nullable();
            $table->string('country', 224)->nullable();
            $table->string('emailOne', 224)->nullable();
            $table->string('emailTwo', 224)->nullable();
            $table->string('telOne', 224)->nullable();
            $table->string('telTwo', 224)->nullable();
            $table->string('mobile', 224)->nullable();
            $table->string('fax', 224)->nullable();
            $table->integer('label')->unsigned()->default(0);
            $table->string('image', 224)->nullable();
            $table->integer('grp_id')->unsigned()->nullable()->default(0);
            $table->string('tcv_member_id', 100)->nullable();
            $table->string('tcv_checksum', 100)->nullable();
            $table->boolean('stock_access')->default(false);
            $table->double('commission')->default(0)->comment('sales person commion (in %)');
            $table->tinyInteger('working_status')->default(1)->comment('1 - active 2 - de-active');
            $table->integer('no_of_inquiry')->default(0);
            $table->integer('no_of_negotiation')->default(0);
            $table->integer('sales_assistant_id')->default(0);
            $table->smallInteger('no_of_days_on_order')->default(180);
            $table->smallInteger('no_of_days_no_order')->default(90);
            $table->boolean('showallmembers')->default(2);
            $table->date('dob')->nullable();
            $table->integer('age')->default(0);
            $table->string('nicno', 50)->nullable();
            $table->string('ppno', 50)->nullable();
            $table->date('confirm_date')->nullable();
            $table->date('join_date')->nullable();
            $table->string('epfno', 50)->nullable();
            $table->string('permanent_add', 250)->nullable();
            $table->string('permanent_email', 50)->nullable();
            $table->string('house_phone', 15)->nullable();
            $table->string('pmobile', 15)->nullable();
            $table->string('marital_status', 30)->nullable();
            $table->string('duration', 20)->nullable();
            $table->string('family_details', 250)->nullable();
            $table->string('designation', 50)->nullable();
            $table->string('shift_time', 50)->nullable();
            $table->double('present_salary')->default(0);
            $table->string('idproof', 250)->nullable();
            $table->string('fb', 250)->nullable();
            $table->string('insta', 250)->nullable();
            $table->string('gplus', 250)->nullable();
            $table->string('twitter', 250)->nullable();
            $table->string('youtube', 250)->nullable();
            $table->string('skype', 50)->nullable();
            $table->string('social_media', 250)->nullable();
            $table->string('admin_comment', 250)->nullable();
            $table->integer('rating')->default(0);
            $table->dateTime('green_paper_send_date')->nullable();
            $table->string('remarks', 250)->nullable();
            $table->integer('default_view')->default(1);
            $table->boolean('cancel_invoice')->default(2);
            $table->string('mobile2', 30)->nullable();
            $table->boolean('whatsapp_check')->default(2);
            $table->boolean('viber_check')->default(2);
            $table->boolean('line_check')->default(2);
            $table->dateTime('token_time')->nullable();
            $table->string('token_code', 250)->nullable();
            $table->tinyInteger('overs_access')->default(2);
            $table->string('stock_offer_country', 200)->nullable();
            $table->string('sales_team', 50)->nullable();
            $table->boolean('jpy_account_statement')->default(2);
            $table->boolean('max_stock_offers')->default(false);
            $table->boolean('admin_access')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usertbl');
    }
};
