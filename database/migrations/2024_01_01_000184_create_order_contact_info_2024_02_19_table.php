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
        Schema::create('order_contact_info_2024_02_19', function (Blueprint $table) {
            $table->string('order_id', 40)->default('');
            $table->string('ses_id', 40)->default('');
            $table->integer('member_id')->nullable();
            $table->string('customer_id', 50)->default('');
            $table->string('company', 250)->nullable();
            $table->string('fname', 50)->nullable();
            $table->string('lname', 50)->nullable();
            $table->string('address_1', 100)->nullable();
            $table->string('address_2', 100)->nullable();
            $table->string('city', 50)->nullable();
            $table->string('state', 50)->nullable();
            $table->string('zip', 50)->nullable();
            $table->string('country', 50)->nullable();
            $table->string('email_1', 50)->nullable();
            $table->string('email_2', 50)->nullable();
            $table->string('telephone_1', 50)->nullable();
            $table->string('telephone_2', 50)->nullable();
            $table->string('mobile', 50)->nullable();
            $table->string('fax', 50)->nullable();
            $table->tinyInteger('is_consignee')->unsigned()->default(0);
            $table->string('n_name', 50)->default('');
            $table->string('n_company', 100);
            $table->string('n_add1', 100)->default('');
            $table->string('n_add2', 100)->default('');
            $table->string('n_city', 50)->default('');
            $table->string('n_state', 50)->default('');
            $table->string('n_zip', 15)->default('');
            $table->string('n_country', 50)->default('');
            $table->string('n_email', 50)->default('');
            $table->string('n_telephone', 50)->default('');
            $table->string('n_fax', 50)->nullable();
            $table->string('comments', 250)->nullable();
            $table->string('question', 250)->nullable();
            $table->dateTime('create_date')->nullable();
            $table->string('ip', 50)->nullable();
            $table->integer('quotation_status')->nullable()->default(0);
            $table->integer('order_status')->unsigned()->nullable()->default(0);
            $table->integer('status')->unsigned()->nullable()->default(0);
            $table->boolean('mail_status')->unsigned()->nullable()->default(0);
            $table->string('order_type', 20)->nullable()->default('stock');
            $table->string('bank_type', 20)->nullable();
            $table->boolean('is_invoice');
            $table->date('send_mail_status');
            $table->string('b_company', 250);
            $table->string('b_fname', 50);
            $table->string('b_address_1', 100);
            $table->string('b_address_2', 100);
            $table->string('b_city', 50);
            $table->string('b_zip', 50);
            $table->string('b_state', 50);
            $table->string('b_country', 50);
            $table->string('b_email_1', 50);
            $table->string('b_telephone_1', 50);
            $table->string('b_fax', 50);
            $table->string('use_in_invoice', 1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_contact_info_2024_02_19');
    }
};
