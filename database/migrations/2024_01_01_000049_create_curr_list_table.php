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
        Schema::create('curr_list', function (Blueprint $table) {
            $table->integer('curr_id')->unsigned();
            $table->string('curr_symbol', 20)->default('');
            $table->string('curr_name', 10)->default('');
            $table->string('curr_description', 100)->nullable();
            $table->double('conversion_rate')->default(1);
            $table->integer('curr_default')->unsigned()->default(0);
            $table->integer('curr_status')->unsigned()->default(1);
            $table->timestamp('last_updated')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('curr_list');
    }
};
