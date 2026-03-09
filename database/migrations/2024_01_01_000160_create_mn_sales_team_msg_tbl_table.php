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
        Schema::create('mn_sales_team_msg_tbl', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('nagotiate_id');
            $table->text('msg');
            $table->dateTime('msg_date');
            $table->integer('sales_person_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mn_sales_team_msg_tbl');
    }
};
