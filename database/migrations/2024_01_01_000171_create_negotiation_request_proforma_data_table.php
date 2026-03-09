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
        Schema::create('negotiation_request_proforma_data', function (Blueprint $table) {
            $table->integer('req_id');
            $table->integer('negotiate_id');
            $table->date('request_date');
            $table->smallInteger('country_of_departure');
            $table->smallInteger('port_of_departure');
            $table->smallInteger('country_of_discharge');
            $table->smallInteger('port_of_discharge');
            $table->string('terms', 50);
            $table->string('incoterms', 20);
            $table->string('inspection', 20);
            $table->string('message', 250);
            $table->string('company_name', 100);
            $table->string('address', 100);
            $table->string('city', 50);
            $table->string('country', 100);
            $table->string('tel', 15);
            $table->string('fax', 15);
            $table->string('payment_mode', 30);
            $table->tinyInteger('is_domestic')->default(2)->comment('1 - domestic, 2 - overseas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negotiation_request_proforma_data');
    }
};
