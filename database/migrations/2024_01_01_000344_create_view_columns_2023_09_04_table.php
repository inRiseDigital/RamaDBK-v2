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
        Schema::create('view_columns_2023_09_04', function (Blueprint $table) {
            $table->integer('id');
            $table->string('vcolumn', 100);
            $table->text('data_column');
            $table->string('existing_column', 40);
            $table->text('comment');
            $table->integer('order');
            $table->integer('width');
            $table->boolean('is_dynamic')->default(1);
            $table->string('group_name', 50);
            $table->text('data_coloumn_alias');
            $table->integer('char_display');
            $table->integer('filter_value')->comment('1="textfilter" 2="datefilter" 3="high&low"');
            $table->integer('column_type')->comment('1.date, 2.checkbox, 3.textarea, 4.inputfield, 5.numberformat, 6.dropdown ');
            $table->tinyInteger('from_fields')->comment('1 vehicle, \r\n2. invoice, \r\n3.book req, \r\n4. shipping order,\r\n5.shipping manager, 6.bl consignee,\r\n7.massho translation');
            $table->string('exists_module_field', 30);
            $table->boolean('multiple_update')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('view_columns_2023_09_04');
    }
};
