<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class UserDashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('User/UserDashboard');
    }
}
