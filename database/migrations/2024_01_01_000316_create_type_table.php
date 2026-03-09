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
        Schema::create('type', function (Blueprint $table) {
            $table->integer('type_id')->unsigned();
            $table->string('value', 25)->nullable();
            $table->double('m3')->nullable();
            $table->double('kt')->nullable();
            $table->tinyInteger('display')->unsigned()->nullable()->default(0);
            $table->integer('tcv_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('type');
    }
};
