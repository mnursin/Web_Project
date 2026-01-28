<?php

namespace App\Http\Controllers;

use App\Models\Posting;
use App\Models\CategoryPosting;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Class Posting
 * @package App\Http\Controllers
 *
 * Controller for handling posting operations.
 */
class controllerPosting extends Controller
{

//     public function index(Request $request) //menampilkan data postingan dari database
//     {
//         // $postings = Posting::with('user')->get();
//         $postings = Posting::with(['user', 'categories'])
//         ->latest()
//         ->get();
//         $categories = CategoryPosting::all();

//           // Filter category
//     if ($request->filled('category_ids')) {
//         $query->whereHas('categories', function ($q) use ($request) {
//             $q->whereIn('categories.id', $request->category_ids);
//         });
//     }

//     // Filter time
//     if ($request->filled('date_from')) {
//         $query->whereDate(
//             $request->date_type ?? 'created_at',
//             '>=',
//             $request->date_from
//         );
//     }

//     if ($request->filled('date_to')) {
//         $query->whereDate(
//             $request->date_type ?? 'created_at',
//             '<=',
//             $request->date_to
//         );
//     }


//     // Periksa apakah data postingan kosong
//     $hasPostings = !$postings->isEmpty();
    
    
//     if ($hasPostings) {
//     // foreach ($postings as $posting) {
//     //     // Tampilkan data postingan
//     //     echo "User: " . $posting->user->name . " - Content: " . $posting->content . "<br>";
//     //     }
//     // } else {
//     //         echo "Tidak ada postingan tersedia.<br>";
//     //     }
                
                
//         // dd($request);
//         // dd($categories);
//         // dd($postings);
//         return Inertia::render('posting/view', [
//             'postings' => $postings,
//             'hasPostings' => $hasPostings, // Kirim status ke frontend
//             'categories' => $categories,
//             // 'filters' => $request-all(),
//             ]);
//             }
            
// }

public function index(Request $request)
{
    // 🔑 1. PAKAI QUERY BUILDER
    $query = Posting::with(['user', 'categories'])->latest();

    // 🔎 2. FILTER CATEGORY
    if ($request->filled('category_ids')) {
        $query->whereHas('categories', function ($q) use ($request) {
            $q->whereIn('category_posting.id', $request->category_ids);
        });
    }

    // 🕒 3. FILTER TIME
    if ($request->filled('date_from')) {
        $query->whereDate(
            $request->date_type ?? 'created_at',
            '>=',
            $request->date_from
        );
    }

    if ($request->filled('date_to')) {
        $query->whereDate(
            $request->date_type ?? 'created_at',
            '<=',
            $request->date_to
        );
    }

    // 📦 4. EXECUTE QUERY
    $postings = $query->get();

    $categories = CategoryPosting::all();

    return Inertia::render('posting/view', [
        'postings'     => $postings,
        'categories'   => $categories,
        'filters'      => $request->only([
            'category_ids',
            'date_from',
            'date_to',
            'date_type',
            'description',
            'content',
        ]),
    ]);
}

            
public function store(Request $request)
{
    $validated = $request->validate([
        'description'    => 'required|string|max:255',
        'content'        => 'required|string',
        'category_ids'   => 'required|array|min:1',
        'category_ids.*' => 'exists:category_posting,id',
    ]);

    DB::transaction(function () use ($validated) {
        $posting = Posting::create([
            'id_user'     => auth()->id(),
            'description' => $validated['description'],
            'content'     => $validated['content'],
        ]);

        $posting->categories()->sync($validated['category_ids']);
    });

    return redirect()->back()->with('success', 'Posting berhasil ditambahkan');
}


    public function update(Request $request, Posting $posting)
        {
        // logger($request->all());
logger()->info('UPDATE PAYLOAD', $request->all());
    logger()->info('POSTING', $posting->toArray());
            $validated = $request->validate([
                'description'    => 'required|string|max:255',
                'content'        => 'required|string',
                'category_ids'   => 'array',
                // 'category_ids.*' => 'exists:categories,id', //menjadi masalah karena nama tabel pivotnya berbeda
                'category_ids.*' => 'exists:category_posting,id',

            ]);

            DB::transaction(function () use ($posting, $validated) {
                $posting->update([
                    'description' => $validated['description'],
                    'content'     => $validated['content'],
                ]);

                if (isset($validated['category_ids'])) {
                    $posting->categories()->sync($validated['category_ids']);
                }
            });

            return redirect()
                ->back()
                ->with('success', 'Posting berhasil diperbarui');
        }


    /**
     * DELETE POSTING
     */
    public function destroy(Posting $posting)
    {
        // dd($posting);
        DB::transaction(function () use ($posting) {
            // hapus relasi pivot
            $posting->categories()->detach();

            // hapus posting
            $posting->delete();
        });

        return redirect()
            ->back()
            ->with('success', 'Posting berhasil dihapus');
    }

}
