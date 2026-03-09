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
        Schema::create('support_details', function (Blueprint $table) {
            $table->integer('support_id');
            $table->string('company', 250)->nullable();
            $table->text('address')->nullable();
            $table->string('phone', 50)->nullable();
            $table->string('fax', 50)->nullable();
            $table->string('mobile', 50)->nullable();
            $table->string('email', 100)->nullable();
            $table->string('timings', 250)->nullable();
            $table->string('website', 200)->nullable();
            $table->integer('position')->unsigned()->nullable();
            $table->integer('status')->unsigned()->nullable()->default(0);
            $table->date('create_date')->nullable();
            $table->date('update_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('support_details');
    }
};
