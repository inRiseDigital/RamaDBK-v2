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
        Schema::create('insurance_policy_enquiry', function (Blueprint $table) {
            $table->integer('enq_id');
            $table->string('make', 30);
            $table->string('model', 30);
            $table->string('stock_no', 15);
            $table->string('chassis_no', 20);
            $table->text('message');
            $table->integer('member_id');
            $table->string('tlt', 4);
            $table->string('name', 30);
            $table->string('country', 35);
            $table->string('port', 35);
            $table->string('email', 50);
            $table->string('telephone', 20);
            $table->dateTime('create_date');
            $table->dateTime('reply_date');
            $table->boolean('reply_status')->default(2)->comment('1-yes,2-no');
            $table->integer('sales_person_id');
            $table->text('reply_message');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('insurance_policy_enquiry');
    }
};
