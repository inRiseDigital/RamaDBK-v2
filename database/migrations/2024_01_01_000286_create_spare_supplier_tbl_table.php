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
        Schema::create('spare_supplier_tbl', function (Blueprint $table) {
            $table->integer('spare_supplier_id');
            $table->string('name', 50)->nullable()->default('');
            $table->string('telephone', 40)->nullable()->default('');
            $table->string('fax', 40)->nullable()->default('');
            $table->string('city', 25)->nullable()->default('');
            $table->string('country', 20)->nullable()->default('');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spare_supplier_tbl');
    }
};
