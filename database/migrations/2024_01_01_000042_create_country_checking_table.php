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
        Schema::create('country_checking', function (Blueprint $table) {
            $table->integer('country_id')->unsigned();
            $table->string('country_name', 50)->default('');
            $table->string('country_code', 10)->default('');
            $table->integer('status')->unsigned()->nullable()->default(1);
            $table->integer('region_id');
            $table->string('region', 50);
            $table->boolean('as_from_country')->default(2);
            $table->integer('parent_id');
            $table->text('port_id');
            $table->text('port_name');
            $table->text('insp_id');
            $table->text('insp_name');
            $table->string('ship_method', 30);
            $table->boolean('set_for_freight')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('country_checking');
    }
};
