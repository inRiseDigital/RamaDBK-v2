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
        Schema::create('cost_types', function (Blueprint $table) {
            $table->integer('cost_type_id');
            $table->string('cost_type_name', 250);
            $table->string('short_name', 200);
            $table->string('commission', 255)->default('0');
            $table->string('add_permission', 255)->default('1');
            $table->string('ship_inventory_column', 100);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cost_types');
    }
};
