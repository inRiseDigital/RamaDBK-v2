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
        Schema::create('one_price_setting', function (Blueprint $table) {
            $table->integer('id');
            $table->double('one_price')->default(0)->comment('in %');
            $table->double('amount')->default(0)->comment('fix amount');
            $table->double('lower_range')->default(0);
            $table->double('upper_range');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('one_price_setting');
    }
};
