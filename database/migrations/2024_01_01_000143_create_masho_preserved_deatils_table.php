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
        Schema::create('masho_preserved_deatils', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('main_id');
            $table->integer('owner_code');
            $table->date('reg_date');
            $table->string('cla_of_reg', 10);
            $table->string('receipt_no', 50);
            $table->string('registration_no', 50);
            $table->string('owner_name', 50);
            $table->string('owner_address', 50);
            $table->string('user_name', 50);
            $table->string('user_address', 50);
            $table->text('locality_uses');
            $table->date('export_scheduled_date');
            $table->integer('ordergrp');
            $table->integer('owner_address_code');
            $table->integer('user_code');
            $table->integer('user_address_code');
            $table->string('jap_owner_name', 255);
            $table->string('jap_owner_address', 255);
            $table->string('jap_user_name', 255);
            $table->string('jap_user_address', 255);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('masho_preserved_deatils');
    }
};
