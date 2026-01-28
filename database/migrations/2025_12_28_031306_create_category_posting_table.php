<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
Schema::create('category_posting_pivot', function (Blueprint $table) {
    $table->id();

    $table->unsignedBigInteger('posting_id');
    $table->unsignedBigInteger('category_id');

    $table->foreign('posting_id')
          ->references('id_posting')
          ->on('postings')
          ->onDelete('cascade');

    $table->foreign('category_id')
          ->references('id')
          ->on('category_posting')
          ->onDelete('cascade');
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('category_posting_pivot');
    }
};
