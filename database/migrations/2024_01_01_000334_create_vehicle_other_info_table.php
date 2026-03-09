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
        Schema::create('vehicle_other_info', function (Blueprint $table) {
            $table->string('stock_no', 20)->default('');
            $table->text('info')->nullable();
            $table->string('comment', 250)->nullable();
            $table->integer('status')->unsigned()->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicle_other_info');
    }
};
