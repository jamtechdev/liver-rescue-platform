<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::with('roles');

        // Search by name or email
        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                    ->orWhere('email', 'like', "%{$request->search}%");
            });
        }

        // Status filter
        if ($request->status !== null && $request->status !== '') {
            $query->where('profile_approved', $request->status);
        }

        // City filter
        if ($request->city) {
            $query->where('city', $request->city);
        }

        // Healing stage filter
        if ($request->healing_stage) {
            $query->where('healing_stage', $request->healing_stage);
        }

        $users = $query->latest()->paginate(10)->withQueryString();

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
            'filters' => $request->only(['search', 'status', 'city', 'healing_stage'])
        ]);
    }

    // VIEW USER
    public function show(User $user)
    {
        $user->load('roles');

        return Inertia::render('Admin/Users/Show', [
            'user' => $user
        ]);
    }

    // EDIT PAGE
    public function edit(User $user)
    {
        $user->load('roles');

        return Inertia::render('Admin/Users/Edit', [
            'user' => $user
        ]);
    }

    // UPDATE USER
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'gender' => 'nullable|in:male,female,other,prefer_not_to_say',
            'age' => 'nullable|integer|min:1|max:120',
            'country' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'healing_stage' => 'nullable|in:early,middle,advanced,maintenance,unknown',
            'mm_cleanse_days' => 'nullable|integer|min:0',
            'symptoms' => 'nullable|string',
            'bio' => 'nullable|string',
            'available_for_consult' => 'nullable|boolean',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'gender' => $request->gender,
            'age' => $request->age,
            'country' => $request->country,
            'state' => $request->state,
            'city' => $request->city,
            'healing_stage' => $request->healing_stage,
            'mm_cleanse_days' => $request->mm_cleanse_days,
            'symptoms' => $request->symptoms,
            'bio' => $request->bio,
            'available_for_consult' => $request->available_for_consult ?? false,
        ]);

        return redirect()
            ->route('admin.users')
            ->with('success', 'User updated successfully.');
    }

    // DELETE USER
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()
            ->back()
            ->with('success', 'User deleted successfully.');
    }

    // APPROVE PROFILE
    public function approve(User $user)
    {
        $user->update([
            'profile_approved' => true
        ]);

        return back()->with('success', 'User approved successfully.');
    }

    // REJECT PROFILE
    public function reject(User $user)
    {
        $user->update([
            'profile_approved' => false
        ]);

        return back()->with('success', 'User rejected.');
    }
}
