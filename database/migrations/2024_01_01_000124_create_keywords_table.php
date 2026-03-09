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
        Schema::create('keywords', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->string('fileName', 224)->nullable()->default('0');
            $table->longText('title')->nullable();
            $table->longText('keyword')->nullable();
            $table->longText('des')->nullable();
            $table->integer('active')->unsigned()->nullable();
            $table->boolean('defaults')->unsigned()->default(0);
            $table->text('other_meta')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('keywords');
    }
};
