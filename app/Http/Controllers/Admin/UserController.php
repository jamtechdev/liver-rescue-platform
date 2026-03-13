<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('roles:name')
            ->select('id', 'name', 'email', 'profile_photo', 'profile_approved')
            ->latest()
            ->paginate(15);

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
        ]);
    }

    public function approve(User $user)
    {
        $user->update(['profile_approved' => true]);
        return back()->with('success', 'User approved successfully.');
    }

    public function reject(User $user)
    {
        // Optional: delete ya reason ke saath reject kar sakte ho
        $user->update(['profile_approved' => false]);
        // $user->delete(); // agar reject pe delete karna ho to

        return back()->with('success', 'User rejected.');
    }
}
