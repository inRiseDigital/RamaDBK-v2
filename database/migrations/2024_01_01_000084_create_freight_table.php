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
        Schema::create('freight', function (Blueprint $table) {
            $table->integer('freight_id')->unsigned();
            $table->integer('port_from_id')->unsigned()->nullable()->default(0);
            $table->integer('port_to_id')->unsigned()->default(0);
            $table->double('m3_rate')->nullable();
            $table->string('ft3_rate', 100)->nullable();
            $table->string('wt_rate', 100)->nullable();
            $table->string('container_rate', 100)->nullable();
            $table->text('comment')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('freight');
    }
};
