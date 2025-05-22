<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\controllerPosting;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('solar/solar', function () {
        return Inertia::render('solar/solar');
    })->name('solar');

    Route::get('resume/resume', function () {
        return Inertia::render('resume/resume');
    })->name('resume');

    Route::get('posting/posting', function () {
        return Inertia::render('posting/posting');
    })->name('posting');
    
    Route::get('posting/createPosting', function () {
        return Inertia::render('posting/createPosting');
    })->name('posting');
    
    // Route::get('posting/view', function () {
    //     return Inertia::render('posting/view');
    // })->name('posting');

    Route::get('user/user', function () {
        return Inertia::render('user/user');
    })->name('user');

    Route::middleware('auth')->group(function () {
        Route::post('/postings', [controllerPosting::class, 'store']);
    });

    Route::get('/posting/view', [controllerPosting::class, 'index'])->name('postings.index');
    // Route::post('/postings', [controllerPosting::class, 'store'])->name('postings.store');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
