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
        Schema::create('bank_details', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->string('bank_name', 20);
            $table->text('details');
            $table->integer('position');
            $table->boolean('status');
            $table->boolean('show_in_invoice')->default(2);
            $table->boolean('is_default')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bank_details');
    }
};
