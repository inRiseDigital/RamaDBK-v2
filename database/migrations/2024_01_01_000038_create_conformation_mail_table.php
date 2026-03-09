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
        Schema::create('conformation_mail', function (Blueprint $table) {
            $table->integer('id');
            $table->string('tlt', 3);
            $table->string('name', 50);
            $table->string('email', 50);
            $table->smallInteger('status');
            $table->string('code', 255);
            $table->timestamp('create_date')->useCurrent();
            $table->bigInteger('ip');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('conformation_mail');
    }
};
