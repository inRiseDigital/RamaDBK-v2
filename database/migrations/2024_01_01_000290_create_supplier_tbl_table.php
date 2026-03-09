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
        Schema::create('supplier_tbl', function (Blueprint $table) {
            $table->integer('supplier_id');
            $table->string('type', 60)->nullable();
            $table->string('name', 150)->nullable();
            $table->string('telephone', 120)->nullable();
            $table->string('fax', 120)->nullable();
            $table->string('city', 75)->nullable();
            $table->string('country', 60)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('supplier_tbl');
    }
};
