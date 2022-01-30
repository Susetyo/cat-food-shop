<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AnimalFoodController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/users', [UserController::class,'index'])->middleware(['auth', 'verified'])->name('users');
Route::get('/edit-users', [UserController::class,'edit'])->middleware(['auth', 'verified'])->name('edit-users');
Route::put('/update-user', [UserController::class,'update'])->middleware(['auth', 'verified'])->name('update-user');

Route::get('/animal-foods', [AnimalFoodController::class,'index'])->middleware(['auth', 'verified'])->name('animal-foods');
Route::get('/animal-foods-create', [AnimalFoodController::class,'create'])->middleware(['auth', 'verified'])->name('animal-foods-create');
Route::post('/animal-foods', [AnimalFoodController::class,'store'])->middleware(['auth', 'verified'])->name('animal-foods');


require __DIR__.'/auth.php';
