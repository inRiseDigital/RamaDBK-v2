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
        Schema::create('enquiry', function (Blueprint $table) {
            $table->integer('id');
            $table->char('enquiry_key', 15)->comment('jct-ge-8digit/jct-de-8digit');
            $table->dateTime('create_date');
            $table->integer('stock_no');
            $table->string('stock_number', 25);
            $table->string('type', 50);
            $table->string('make', 50);
            $table->string('model', 50);
            $table->integer('model_code_id');
            $table->string('model_code', 50);
            $table->string('chassis_no', 50);
            $table->string('grade', 50);
            $table->tinyInteger('make_id')->nullable();
            $table->tinyInteger('model_id')->nullable();
            $table->tinyInteger('grade_id')->nullable();
            $table->tinyInteger('type_id')->nullable();
            $table->string('transmission', 50);
            $table->string('fuel', 50);
            $table->integer('engine_cc');
            $table->integer('engine_cc_to');
            $table->integer('mileage');
            $table->integer('mileage_to');
            $table->string('color', 50);
            $table->char('grade_ext', 3);
            $table->char('grade_int', 3);
            $table->string('mfg_year_from', 10);
            $table->string('mfg_year_to', 10);
            $table->double('price_from');
            $table->double('price_to');
            $table->string('currency', 10);
            $table->string('drive', 15);
            $table->text('message');
            $table->string('tlt', 5);
            $table->string('name', 50);
            $table->string('company', 100);
            $table->string('address_1', 100);
            $table->string('address_2', 100);
            $table->string('city', 50);
            $table->string('state', 50)->nullable();
            $table->string('zip', 50)->nullable();
            $table->string('country', 50);
            $table->string('port', 50)->nullable();
            $table->string('email_1', 50);
            $table->string('email_2', 50);
            $table->string('telephone_1', 50);
            $table->string('telephone_2', 50);
            $table->string('mobile', 50);
            $table->string('fax', 50)->nullable();
            $table->string('website', 60);
            $table->enum('dealer_type', ['1', '2'])->default('1')->comment('1-dealer 2- indidual');
            $table->string('user_ip', 30)->nullable();
            $table->string('ip_country', 50)->nullable()->default('');
            $table->enum('status', ['0', '1', '2'])->default('1')->comment('0-deactive 1-approved 2-pending');
            $table->string('code', 255)->nullable();
            $table->string('matching_alert', 255)->default('1');
            $table->integer('sales_person');
            $table->string('mail_status', 255)->default('0');
            $table->dateTime('last_matching_cron');
            $table->integer('part_number');
            $table->string('description', 350);
            $table->string('veh_title', 250);
            $table->string('source', 25);
            $table->tinyInteger('spam_status')->comment('1 - spam 0 - un-spam');
            $table->integer('forward_by');
            $table->date('forward_date');
            $table->integer('member_id');
            $table->string('sales_person_name', 100);
            $table->enum('have_invoice', ['yes', 'no'])->default('no');
            $table->integer('crm_id');
            $table->string('crm_name', 100);
            $table->enum('is_updated', ['1', '2'])->default('2');
            $table->dateTime('last_auto_followup');
            $table->string('rating', 50);
            $table->dateTime('forward_date_time');
            $table->string('forward_ip', 100);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enquiry');
    }
};
