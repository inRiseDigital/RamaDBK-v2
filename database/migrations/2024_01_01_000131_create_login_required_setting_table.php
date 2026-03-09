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
        Schema::create('login_required_setting', function (Blueprint $table) {
            $table->integer('id');
            $table->string('field_name', 50);
            $table->tinyInteger('status')->default(2)->comment('1 - on 2 - off');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('login_required_setting');
    }
};
