<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::with('user')
            ->latest()
            ->get();

        return Inertia::render('Admin/Recipes/Index', [
            'recipes' => $recipes
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Recipes/Create'); 
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        Recipe::create([
            'title' => $request->title,
            'description' => $request->description,
            'user_id' => auth()->id(),
            'status' => 'pending',
        ]);

        return redirect()->route('admin.recipes.index')->with('success', 'Recipe created successfully!');
    }

    public function show(Recipe $recipe)
    {
        $recipe->load('user');

        return Inertia::render('Admin/Recipes/Show', [
            'recipe' => $recipe
        ]);
    }

    public function approve(Recipe $recipe)
    {
        $recipe->update([
            'status' => 'approved'
        ]);

        return back();
    }

    public function reject(Recipe $recipe)
    {
        $recipe->update([
            'status' => 'rejected'
        ]);

        return back();
    }

    public function destroy(Recipe $recipe)
    {
        $recipe->delete();

        return back();
    }
}
