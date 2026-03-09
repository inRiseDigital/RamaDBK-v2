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
        Schema::create('linktbl', function (Blueprint $table) {
            $table->integer('linkId');
            $table->string('linkName', 224)->nullable();
            $table->string('parentId', 50)->nullable()->default('0');
            $table->string('linkPage', 224)->nullable();
            $table->string('link', 224)->nullable();
            $table->text('subFiles')->nullable();
            $table->text('help')->nullable();
            $table->integer('displayOrder')->nullable()->default(0);
            $table->string('jap_name', 224)->default('');
            $table->string('icon', 224)->default('');
            $table->string('japaneseImage', 150)->default('');
            $table->tinyInteger('group_id')->default(0);
            $table->boolean('status')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('linktbl');
    }
};
