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
        Schema::create('permissiontbl_20241014', function (Blueprint $table) {
            $table->integer('sid');
            $table->integer('userId')->nullable();
            $table->string('permission', 224)->nullable();
            $table->string('subPermission', 224)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permissiontbl_20241014');
    }
};
