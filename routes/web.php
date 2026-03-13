<?php

use App\Http\Controllers\Admin\AdminRecipeController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\RecipeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\LandingController;
use App\Http\Controllers\User\PageController;
use App\Http\Controllers\User\UserDashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LandingController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [UserDashboardController::class, 'index'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/our-mission', [PageController::class, 'ourMission'])->name('our-mission');
Route::get('/add-listing', [PageController::class, 'addListing'])->name('add-listing');
Route::get('/forums', [PageController::class, 'forums'])->name('forums');
Route::get('/recipe', [PageController::class, 'recipe'])->name('recipe');
Route::get('/restaurants', [PageController::class, 'restaurants'])->name('restaurants');
Route::get('/find-your-match', [PageController::class, 'findYourMatch'])->name('find-your-match');
Route::get('/support', [PageController::class, 'support'])->name('support');

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');
    Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
    Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}/update', [UserController::class, 'update'])->name('users.update');
    Route::patch('/users/{user}/approve', [UserController::class, 'approve'])->name('users.approve');
    Route::patch('/users/{user}/reject', [UserController::class, 'reject'])->name('users.reject');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');

    // Recipes Routes
    Route::get('/recipes', [RecipeController::class, 'index'])->name('recipes');
    Route::get('/recipes/create', [RecipeController::class, 'create'])->name('recipes.create');
    Route::post('/recipes', [RecipeController::class, 'store'])->name('recipes.store');
    Route::get('/recipes/{recipe}', [RecipeController::class, 'show']);
    Route::post('/recipes/{recipe}/approve', [RecipeController::class, 'approve']);
    Route::post('/recipes/{recipe}/reject', [RecipeController::class, 'reject']);
    Route::delete('/recipes/{recipe}', [RecipeController::class, 'destroy']);
});

require __DIR__ . '/auth.php';
