<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $totalUsers = User::count();

        $approvedUsers = User::where('profile_approved', true)->count();

        $pendingUsers = User::where('profile_approved', false)->count();

        $consultUsers = User::where('available_for_consult', true)->count();

        $recentUsers = User::latest()
            ->take(5)
            ->get(['id', 'name', 'email', 'profile_approved']);

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'totalUsers' => $totalUsers,
                'approvedUsers' => $approvedUsers,
                'pendingUsers' => $pendingUsers,
                'consultUsers' => $consultUsers,
            ],
            'recentUsers' => $recentUsers
        ]);
    }
}
