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
        Schema::create('document_release', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('invoice_id');
            $table->string('dhl_cons_name', 100);
            $table->string('dhl_cons_company', 100);
            $table->string('dhl_cons_address', 200);
            $table->string('dhl_cons_city', 50);
            $table->string('dhl_cons_zip', 10);
            $table->string('dhl_cons_country', 100);
            $table->string('dhl_cons_tel', 20);
            $table->string('dhl_cons_email', 100);
            $table->string('bl_status', 50);
            $table->boolean('marine_insurance')->default(0);
            $table->string('to_address', 200);
            $table->string('cc_address', 200);
            $table->string('mail_subject', 200);
            $table->integer('send_id');
            $table->timestamp('send_date')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('document_release');
    }
};
