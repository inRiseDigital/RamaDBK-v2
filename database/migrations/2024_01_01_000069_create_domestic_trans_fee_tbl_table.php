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
        Schema::create('domestic_trans_fee_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->string('auction_hall', 50);
            $table->double('passenger_central_asia');
            $table->double('passenger_other');
            $table->double('truck_central_asia');
            $table->double('truck_other');
            $table->double('charge');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('domestic_trans_fee_tbl');
    }
};
