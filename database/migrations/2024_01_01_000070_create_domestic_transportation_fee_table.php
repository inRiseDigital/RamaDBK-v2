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
        Schema::create('domestic_transportation_fee', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('region_id');
            $table->integer('venue_id');
            $table->integer('city_id');
            $table->tinyInteger('first_type_id')->comment('1 - automobile unit price 2 - self run vehicle');
            $table->tinyInteger('second_type_id')->comment('1 - medium 2 - large');
            $table->integer('port_id');
            $table->double('domestic_trans_fee');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('domestic_transportation_fee');
    }
};
