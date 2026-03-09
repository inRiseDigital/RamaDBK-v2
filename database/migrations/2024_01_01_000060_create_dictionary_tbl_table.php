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
        Schema::create('dictionary_tbl', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->string('jap_text', 224)->nullable();
            $table->string('eng_text', 224)->nullable();
            $table->boolean('status')->unsigned()->nullable()->default(2);
            $table->boolean('update_status')->unsigned()->nullable()->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dictionary_tbl');
    }
};
