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
        Schema::create('members_details', function (Blueprint $table) {
            $table->integer('member_id')->default(0);
            $table->string('ref_no', 20);
            $table->string('company', 250)->default('');
            $table->tinyInteger('company_status')->default(0);
            $table->string('tlt', 20)->nullable();
            $table->string('fname', 50)->nullable();
            $table->string('lname', 50)->nullable();
            $table->tinyInteger('sex')->default(1);
            $table->string('position_name', 224)->nullable();
            $table->date('dob')->default('0000-00-00');
            $table->tinyInteger('address_type')->default(1);
            $table->string('address_1', 100)->nullable();
            $table->string('address_2', 100)->nullable();
            $table->string('city', 50)->nullable();
            $table->string('state', 50)->nullable();
            $table->string('zip', 50)->nullable();
            $table->string('port', 50)->default('');
            $table->string('country', 50)->nullable();
            $table->string('email_1', 50)->nullable();
            $table->string('email_2', 50)->nullable();
            $table->string('telephone_1', 50)->nullable();
            $table->string('telephone_2', 50)->nullable();
            $table->string('fax', 50)->nullable();
            $table->bigInteger('deposit')->nullable();
            $table->string('mobile', 50)->nullable();
            $table->text('vehicle_int');
            $table->string('wish_terms', 20)->default('');
            $table->string('website', 60)->default('');
            $table->string('work_type', 200)->default('');
            $table->string('receive', 20)->default('1');
            $table->integer('is_newsletter')->unsigned()->nullable()->default(0);
            $table->tinyInteger('is_dealer')->default(0);
            $table->boolean('member_type')->default(1)->comment('1 - customer 2 - suppliers');
            $table->string('language', 25)->default('');
            $table->tinyInteger('is_import')->default(0);
            $table->integer('how_to_know')->default(0);
            $table->boolean('auto_login')->unsigned()->nullable()->default(2);
            $table->integer('sales_person_id');
            $table->string('member_image', 150);
            $table->boolean('is_update')->default(0);
            $table->date('sales_expiry_date');
            $table->date('date_on_expiry');
            $table->string('remarks_updated_by', 50);
            $table->integer('remarks_updated_by_id');
            $table->dateTime('remarks_updated_on');
            $table->boolean('is_execute')->default(2);
            $table->double('bid_limit_amount');
            $table->integer('bid_limitations');
            $table->string('bid_limit_reason', 255);
            $table->boolean('result_price');
            $table->boolean('one_price');
            $table->string('term', 10);
            $table->double('customer_limit');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members_details');
    }
};
