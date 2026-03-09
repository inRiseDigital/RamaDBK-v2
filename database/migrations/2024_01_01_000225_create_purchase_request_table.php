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
        Schema::create('purchase_request', function (Blueprint $table) {
            $table->integer('id');
            $table->smallInteger('make_id');
            $table->smallInteger('maker_id');
            $table->integer('year_from');
            $table->integer('year_to');
            $table->string('drive', 10);
            $table->integer('fuel');
            $table->integer('mileage_from');
            $table->integer('mileage_to');
            $table->tinyInteger('purchase_from')->comment('1 - auction unit 2 - required');
            $table->enum('purchase_for', ['stock', 'customer']);
            $table->integer('customer_id');
            $table->double('budget');
            $table->string('remark', 500);
            $table->date('create_date');
            $table->integer('sales_person_id');
            $table->string('admin_remark', 500);
            $table->date('remark_date');
            $table->integer('remark_by');
            $table->integer('status')->comment('1 - new 2 - pending 3 - reject 4 - purchased 5 - under negotiation 6 - more info require');
            $table->date('status_update_date')->comment('when status purchased');
            $table->tinyInteger('authorize_status')->default(2)->comment('1 - authorize 2 - un-authorize');
            $table->date('authorize_date');
            $table->string('authorize_remark', 500);
            $table->date('authorize_remark_date');
            $table->integer('authorize_remark_by');
            $table->string('buy_remark', 500);
            $table->integer('buy_remark_by');
            $table->date('buy_remark_date');
            $table->string('cancel_remark', 255);
            $table->date('cancel_date');
            $table->integer('cancel_by');
            $table->string('grade', 30);
            $table->boolean('inspection');
            $table->string('country', 50);
            $table->string('attachment_files', 30);
            $table->string('customer_email', 45);
            $table->text('d_remark');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_request');
    }
};
