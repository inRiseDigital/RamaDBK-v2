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
        Schema::create('wishlist', function (Blueprint $table) {
            $table->string('wishlist_id', 71)->default('');
            $table->string('stock_no', 20)->default('');
            $table->string('member_id', 50)->default('');
            $table->string('ses_id', 40)->default('');
            $table->date('create_date')->nullable();
            $table->string('ip', 50)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wishlist');
    }
};
