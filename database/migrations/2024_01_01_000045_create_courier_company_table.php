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
        Schema::create('courier_company', function (Blueprint $table) {
            $table->smallInteger('cc_id');
            $table->string('courier_company_name', 255);
            $table->string('short_name', 20);
            $table->string('start_url', 255);
            $table->string('end_url', 225);
            $table->string('add_docket_no', 255);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courier_company');
    }
};
