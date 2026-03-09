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
        Schema::create('seller_info', function (Blueprint $table) {
            $table->integer('id');
            $table->string('company_name', 100);
            $table->string('source_id', 50);
            $table->string('email1', 50);
            $table->string('email2', 50);
            $table->string('email3', 50);
            $table->string('fax', 50);
            $table->string('mobile', 20);
            $table->string('tel', 20);
            $table->string('contact_person', 50);
            $table->string('designation', 30);
            $table->string('comment', 200);
            $table->boolean('is_used');
            $table->string('city', 30);
            $table->integer('country');
            $table->string('address1', 100);
            $table->string('address2', 100);
            $table->string('state', 30);
            $table->string('zip_code', 10);
            $table->double('opening_bal');
            $table->date('opening_bal_date');
            $table->string('visiting_card', 50);
            $table->boolean('op_bal_type')->default(2);
            $table->string('pos_no', 20);
            $table->string('auc_ltr', 5);
            $table->string('port', 50);
            $table->string('port_address', 100);
            $table->integer('nc_days');
            $table->integer('fs_days');
            $table->string('pos_no_ssh', 20);
            $table->string('pos_no_pj', 20);
            $table->double('auc_charge');
            $table->string('alias', 255);
            $table->text('satellite');
            $table->string('satellite_ids', 200);
            $table->double('free_days');
            $table->double('per_day');
            $table->integer('com_auction_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seller_info');
    }
};
