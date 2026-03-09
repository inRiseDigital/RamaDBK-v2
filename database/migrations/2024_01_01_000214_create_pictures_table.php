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
        Schema::create('pictures', function (Blueprint $table) {
            $table->string('stock_no', 20)->default('');
            $table->string('picture_id', 25)->default('');
            $table->string('picture_name', 224)->nullable();
            $table->string('picture_large', 255);
            $table->boolean('img_permission')->nullable()->default(1);
            $table->boolean('flg');
            $table->boolean('img_for_jctjson')->default(2);
            $table->dateTime('imgmove_aws_date');
            $table->dateTime('pic_copy_date');
            $table->integer('img_restored')->default(1);
            $table->integer('aws_copied')->default(2);
            $table->string('data_source', 12);
            $table->dateTime('upload_date')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pictures');
    }
};
