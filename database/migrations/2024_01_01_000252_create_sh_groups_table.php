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
        Schema::create('sh_groups', function (Blueprint $table) {
            $table->integer('id');
            $table->string('region', 100);
            $table->string('sales_persons', 100);
            $table->string('sales_persons_names', 250);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sh_groups');
    }
};
