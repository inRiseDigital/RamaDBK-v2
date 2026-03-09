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
        Schema::table('spare_parts_details', function (Blueprint $table) {
            $table->string('title', 255)->nullable()->after('part_number');
            $table->string('image', 255)->nullable()->after('description');
            $table->text('images')->nullable()->after('image'); // JSON array of images
            $table->decimal('price', 10, 2)->nullable()->after('images');
            $table->text('colors')->nullable()->after('price'); // JSON array of colors
            $table->string('brand', 100)->nullable()->after('colors');
            $table->string('model', 100)->nullable()->after('brand');
            $table->string('engine_capacity', 50)->nullable()->after('model');
            $table->string('manufacture_year', 20)->nullable()->after('engine_capacity');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('spare_parts_details', function (Blueprint $table) {
            $table->dropColumn([
                'title',
                'image',
                'images',
                'price',
                'colors',
                'brand',
                'model',
                'engine_capacity',
                'manufacture_year'
            ]);
        });
    }
};
