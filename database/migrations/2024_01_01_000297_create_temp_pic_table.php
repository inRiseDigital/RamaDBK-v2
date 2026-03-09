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
        Schema::create('temp_pic', function (Blueprint $table) {
            $table->integer('s_no');
            $table->string('stock_id', 50);
            $table->string('pic_url', 255);
            $table->string('pic_id', 2);
            $table->dateTime('date');
            $table->boolean('import_type')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temp_pic');
    }
};
