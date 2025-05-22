<?php

namespace App\Http\Controllers;

use App\Models\Posting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|string',
        ]);

        Posting::create([
            'id_user' => Auth::id(),
            'content' => $request->input('content'),
        ]);

        return redirect()->back()->with('success', 'Catatan berhasil disimpan.');
    }

    public function index()
    {
        $postings = Posting::with('user')->get();
    
        // Periksa apakah data postingan kosong
        $hasPostings = !$postings->isEmpty();

    
        // if ($hasPostings) {
        //     foreach ($postings as $posting) {
        //     // Tampilkan data postingan
        //     echo "User: " . $posting->user->name . " - Content: " . $posting->content . "<br>";
        //     }
        // } else {
        //     echo "Tidak ada postingan tersedia.<br>";
        // }

        return Inertia::render('posting/view', [
            'postings' => $postings,
            'hasPostings' => $hasPostings, // Kirim status ke frontend
        ]);
    }


}
