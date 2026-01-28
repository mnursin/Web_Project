<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryPostingSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'AI',
            'Machine Learning',
            'IoT',
            'Embedded System',
            'Monitoring',
            'Laravel',
            'React',
            'Story'
        ];

        foreach ($categories as $category) {
            DB::table('category_posting')->insert([
                'category' => $category,
                // 'created_at' => now(),
                // 'updated_at' => now(),
            ]);
        }
    }
}
