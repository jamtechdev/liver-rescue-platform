<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function ourMission(): Response
    {
        return Inertia::render('User/PlaceholderPage', ['title' => 'Our Mission']);
    }

    public function addListing(): Response
    {
        return Inertia::render('User/PlaceholderPage', ['title' => 'Add New Listing']);
    }

    public function forums(): Response
    {
        return Inertia::render('User/PlaceholderPage', ['title' => 'Forums']);
    }

    public function recipe(): Response
    {
        return Inertia::render('User/PlaceholderPage', ['title' => 'Recipe']);
    }

    public function restaurants(): Response
    {
        return Inertia::render('User/PlaceholderPage', ['title' => 'Restaurants']);
    }

    public function findYourMatch(): Response
    {
        return Inertia::render('User/PlaceholderPage', ['title' => 'Find Your Match']);
    }

    public function support(): Response
    {
        return Inertia::render('User/PlaceholderPage', ['title' => 'Support']);
    }
}
