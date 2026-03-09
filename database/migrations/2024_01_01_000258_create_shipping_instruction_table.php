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
        Schema::create('shipping_instruction', function (Blueprint $table) {
            $table->string('order_id', 10)->default('');
            $table->date('order_date')->default('0000-00-00');
            $table->string('freight', 20)->default('');
            $table->string('ocean_vessel', 50)->default('');
            $table->string('sailing', 50)->default('');
            $table->string('from_port', 30)->default('0');
            $table->string('to_port', 30)->default('0');
            $table->string('final_destination', 50)->default('');
            $table->string('bl_issue', 50)->default('');
            $table->string('bl_original', 50)->default('');
            $table->boolean('status')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_instruction');
    }
};
