<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Posting;
use App\Models\CategoryPosting;

class PostingSeeder extends Seeder
{
    public function run(): void
    {
        // Ambil category ID
        $categories = CategoryPosting::pluck('id')->toArray();

        // Contoh posting
        $postings = [
            [
                'id_user' => 1,
                'content' => '<p>Ini adalah konten posting pertama.</p>',
                'description' => 'Monitoring solar panel menggunakan ESP32 dan Laravel',
                'categories' => [$categories[0], $categories[1]],
            ],
            [
                'id_user' => 1,
                'content' => '<p>Konten tentang Laravel dan React.</p>',
                'description' => 'Best practice Laravel + React Inertia',
                'categories' => [$categories[5], $categories[6] ?? $categories[0]],
            ],
        ];

        foreach ($postings as $data) {
            $posting = Posting::create([
                'id_user' => $data['id_user'],
                'content' => $data['content'],
                'description' => $data['description'],
            ]);

            // Attach category ke pivot
            $posting->categories()->attach($data['categories']);
        }
    }
}
