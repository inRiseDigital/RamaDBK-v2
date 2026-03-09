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
        Schema::create('rating', function (Blueprint $table) {
            $table->integer('r_id');
            $table->string('r_name', 50)->default('');
            $table->integer('status')->unsigned()->default(0);
            $table->string('auction_fee', 50);
            $table->string('handling_fee', 50);
            $table->double('service_charge');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rating');
    }
};
