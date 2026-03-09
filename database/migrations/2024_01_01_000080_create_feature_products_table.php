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
        Schema::create('feature_products', function (Blueprint $table) {
            $table->string('stock_no', 20)->default('');
            $table->date('from_date')->nullable();
            $table->date('to_date')->nullable();
            $table->double('dummy_price')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feature_products');
    }
};
