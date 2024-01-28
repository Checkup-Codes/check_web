<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LandingPage\ExploreController;
use App\Http\Controllers\LandingPage\ProductsController;
use App\Http\Controllers\LandingPage\SolutionsController;
use App\Http\Controllers\LandingPage\PricingController;
use App\Http\Controllers\LandingPage\PartnersController;
use App\Http\Controllers\LandingPage\ResourcesController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/explore', [ExploreController::class, 'index'])->name('lp.explore');
Route::get('/products', [ProductsController::class, 'index'])->name('lp.products');
Route::get('/solutions', [SolutionsController::class, 'index'])->name('lp.solutions');
Route::get('/pricing', [PricingController::class, 'index'])->name('lp.pricing');
Route::get('/partners', [PartnersController::class, 'index'])->name('lp.partners');
Route::get('/resources', [ResourcesController::class, 'index'])->name('lp.resources');

require __DIR__.'/auth.php';
