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
        Schema::create('bl_consignee', function (Blueprint $table) {
            $table->integer('id');
            $table->string('consignee_id', 20);
            $table->string('consignee', 250);
            $table->string('notify', 250);
            $table->dateTime('create_date');
            $table->dateTime('update_date');
            $table->string('updated_by', 10);
            $table->string('remark', 250);
            $table->integer('bl_consignee_country');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bl_consignee');
    }
};
