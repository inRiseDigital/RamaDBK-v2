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
        Schema::create('vehicle_details_bak', function (Blueprint $table) {
            $table->integer('stock_no')->unsigned();
            $table->string('stock_number', 25)->nullable();
            $table->double('price')->nullable();
            $table->double('buying_price');
            $table->double('consumption_tax');
            $table->integer('status')->unsigned()->default(0);
            $table->boolean('display')->nullable()->default(1);
            $table->integer('location_id')->unsigned()->nullable();
            $table->string('location', 100)->nullable();
            $table->integer('port_id')->unsigned()->nullable();
            $table->string('port', 100)->nullable();
            $table->boolean('new_used')->comment('0-used 1-new');
            $table->integer('yard_id')->unsigned()->nullable();
            $table->integer('type_id')->unsigned()->nullable();
            $table->integer('subtype_id')->unsigned()->nullable();
            $table->integer('make_id')->unsigned()->nullable();
            $table->integer('maker_id')->unsigned()->nullable();
            $table->integer('model_id')->unsigned()->nullable();
            $table->string('type', 25)->nullable();
            $table->string('subtype', 50)->nullable();
            $table->string('make', 50)->nullable();
            $table->string('maker', 50)->nullable();
            $table->string('model', 50)->nullable();
            $table->string('grade', 50)->nullable();
            $table->string('mfg_year', 7)->nullable();
            $table->string('mfg_month', 25)->nullable();
            $table->string('chassis_no', 50)->nullable();
            $table->integer('mileage')->nullable();
            $table->integer('engine_cc')->unsigned()->nullable();
            $table->string('drive', 25)->nullable();
            $table->char('grade_ext', 3)->default('');
            $table->char('grade_int', 3)->default('');
            $table->char('auction_grade', 3)->nullable()->default('');
            $table->string('doors', 25)->nullable();
            $table->string('seat_capacity', 25)->nullable();
            $table->string('fuel', 50)->nullable();
            $table->string('transmission', 50)->nullable();
            $table->integer('length');
            $table->integer('width');
            $table->integer('height');
            $table->integer('weight');
            $table->date('purchase_date');
            $table->integer('supplier_id');
            $table->integer('purchased_by');
            $table->boolean('show_auc');
            $table->dateTime('create_date')->nullable();
            $table->dateTime('update_date')->nullable();
            $table->string('int_color', 15)->default('');
            $table->string('ext_color', 15)->default('');
            $table->char('wd', 3)->default('0');
            $table->string('other_option', 250)->default('');
            $table->dateTime('start_date')->nullable();
            $table->dateTime('close_date')->nullable();
            $table->string('data_source', 25)->nullable();
            $table->dateTime('confirm_time')->nullable();
            $table->string('data_sites', 200)->nullable()->default('');
            $table->string('veh_title', 255)->nullable()->default('');
            $table->boolean('accident')->nullable()->default(0);
            $table->string('vin_number', 100)->nullable()->default('');
            $table->string('ext_info_pos', 255)->nullable()->default('');
            $table->string('ext_info_neg', 255)->nullable()->default('');
            $table->string('sellArea', 255)->nullable()->default('');
            $table->boolean('is_tcv')->nullable()->default(0);
            $table->string('export_area_id', 255)->nullable()->default('');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicle_details_bak');
    }
};
