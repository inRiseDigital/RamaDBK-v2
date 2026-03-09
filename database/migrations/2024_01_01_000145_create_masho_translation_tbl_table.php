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
        Schema::create('masho_translation_tbl', function (Blueprint $table) {
            $table->string('sr_no', 20);
            $table->string('sr_no1', 11);
            $table->string('ref_no', 30);
            $table->date('created_date');
            $table->string('veh_reg_no', 250);
            $table->date('reg_date');
            $table->tinyInteger('first_reg_month');
            $table->smallInteger('first_reg_year');
            $table->string('kind_of_veh', 8);
            $table->string('used', 30);
            $table->enum('distinction', ['private', 'commercial']);
            $table->string('type_of_body', 30);
            $table->string('make', 30);
            $table->string('model', 30);
            $table->string('seating_capacity', 30);
            $table->string('max_carrying_cap', 30)->comment('unit in kg');
            $table->integer('weight_of_veh')->comment('unit in kg');
            $table->string('gross_weight_of_veh', 250)->comment('unit in kg');
            $table->string('chassis_no', 50);
            $table->string('engine_type', 30);
            $table->string('model_code', 20)->nullable();
            $table->float('length')->comment('unit in cm.');
            $table->float('width')->comment('unit in cm.');
            $table->float('height')->comment('unit in cm.');
            $table->double('m3')->nullable();
            $table->string('engine_cc', 20);
            $table->string('fuel', 50);
            $table->string('body_color', 20);
            $table->string('owner_name', 250);
            $table->string('owner_address', 250);
            $table->string('designation_no', 50);
            $table->string('classification_no', 50);
            $table->string('customer_name', 250);
            $table->string('cust_address', 250);
            $table->string('location_of_main_use', 100);
            $table->integer('weight_of_front_veh')->comment('unit in kg');
            $table->integer('weight_of_cent_frnt_veh')->comment('unit in kg');
            $table->integer('weight_of_cent_rear_veh')->comment('unit in kg');
            $table->integer('weight_of_r_rear_veh')->comment('unit in kg');
            $table->date('expiration_date');
            $table->text('remark');
            $table->date('application_date');
            $table->integer('stock_no');
            $table->string('stock_number', 25);
            $table->string('owner_during_cancellation', 255);
            $table->string('lc_no', 20);
            $table->integer('entry_created_by');
            $table->text('bd_text');
            $table->string('manager_sign', 50);
            $table->string('director_gen', 250);
            $table->string('custcode', 50);
            $table->string('custaddress', 50);
            $table->date('reg_date_ocrm');
            $table->date('expiration_date_ocrm');
            $table->date('application_date_ocrm');
            $table->text('remark_present');
            $table->string('ownernamecode', 50);
            $table->string('usernamecode', 50);
            $table->string('localcode', 50);
            $table->string('demand_reg', 50);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('masho_translation_tbl');
    }
};
