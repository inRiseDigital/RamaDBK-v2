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
        Schema::create('negotiation_issue_docs', function (Blueprint $table) {
            $table->integer('id');
            $table->integer('negotiate_id');
            $table->string('docs_id', 30);
            $table->tinyInteger('docs_type')->comment('1 - proforma, 2 - invoice');
            $table->tinyInteger('status')->comment('1-active, 2- cancel');
            $table->dateTime('create_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negotiation_issue_docs');
    }
};
