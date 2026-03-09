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
        Schema::create('invoice_contact_address', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->string('title', 100)->default('');
            $table->string('company', 150)->default('');
            $table->string('contact_person', 100)->nullable();
            $table->string('address_1', 150)->nullable();
            $table->string('address_2', 150)->nullable();
            $table->string('city', 50)->nullable();
            $table->string('state', 50)->nullable();
            $table->string('country', 50)->nullable();
            $table->string('zip', 50)->nullable();
            $table->string('telephone', 100)->nullable();
            $table->string('fax', 100)->nullable();
            $table->string('mobile', 100)->nullable();
            $table->string('email', 100)->nullable();
            $table->string('email_s', 100)->nullable();
            $table->string('website', 100)->nullable();
            $table->string('website_s', 100)->nullable();
            $table->string('office_timmings', 100)->nullable();
            $table->string('office_off', 100)->nullable();
            $table->string('comment', 250)->nullable();
            $table->integer('is_main')->unsigned()->nullable()->default(0);
            $table->integer('priority')->unsigned()->nullable()->default(0);
            $table->integer('status')->unsigned()->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoice_contact_address');
    }
};
