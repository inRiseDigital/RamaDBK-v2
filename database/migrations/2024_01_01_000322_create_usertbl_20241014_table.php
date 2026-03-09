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
        Schema::create('usertbl_20241014', function (Blueprint $table) {
            $table->integer('userId');
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
            $table->boolean('stock_access');
            $table->double('commission')->default(0)->comment('sales person commion (in %)');
            $table->tinyInteger('working_status')->comment('1 - active 2 - de-active');
            $table->integer('no_of_inquiry');
            $table->integer('no_of_negotiation');
            $table->integer('sales_assistant_id');
            $table->smallInteger('no_of_days_on_order')->default(180);
            $table->smallInteger('no_of_days_no_order')->default(90);
            $table->boolean('showallmembers')->default(2);
            $table->date('dob');
            $table->integer('age');
            $table->string('nicno', 50);
            $table->string('ppno', 50);
            $table->date('confirm_date');
            $table->date('join_date');
            $table->string('epfno', 50);
            $table->string('permanent_add', 250);
            $table->string('permanent_email', 50);
            $table->string('house_phone', 15);
            $table->string('pmobile', 15);
            $table->string('marital_status', 30);
            $table->string('duration', 20);
            $table->string('family_details', 250);
            $table->string('designation', 50);
            $table->string('shift_time', 50);
            $table->double('present_salary');
            $table->string('idproof', 250);
            $table->string('fb', 250);
            $table->string('insta', 250);
            $table->string('gplus', 250);
            $table->string('twitter', 250);
            $table->string('youtube', 250);
            $table->string('skype', 50);
            $table->string('social_media', 250);
            $table->string('admin_comment', 250);
            $table->integer('rating');
            $table->dateTime('green_paper_send_date');
            $table->string('remarks', 250);
            $table->integer('default_view')->default(1);
            $table->boolean('cancel_invoice')->default(2);
            $table->string('mobile2', 30);
            $table->boolean('whatsapp_check')->default(2);
            $table->boolean('viber_check')->default(2);
            $table->boolean('line_check')->default(2);
            $table->dateTime('token_time');
            $table->string('token_code', 250);
            $table->tinyInteger('overs_access')->default(2);
            $table->string('stock_offer_country', 200);
            $table->string('sales_team', 50);
            $table->boolean('jpy_account_statement')->default(2);
            $table->boolean('max_stock_offers');
            $table->boolean('admin_access')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usertbl_20241014');
    }
};
