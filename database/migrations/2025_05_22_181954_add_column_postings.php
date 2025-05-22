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
        Schema::table('postings', function (Blueprint $table) {
            $table->string('category')->after('content'); // Tambah kolom category
            $table->text('description')->nullable()->after('category'); // Tambah kolom description
        });
    }

    public function down(): void
    {
        Schema::table('postings', function (Blueprint $table) {
            $table->dropColumn(['category', 'description']);
        });
    }
};