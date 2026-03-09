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
        Schema::create('shipping_inventory_view', function (Blueprint $table) {
            $table->integer('id');
            $table->string('view_name', 50);
            $table->text('vcolumn');
            $table->text('fixed_column');
            $table->text('multiple_update_field');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_inventory_view');
    }
};
