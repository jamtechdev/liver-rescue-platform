<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\Rule;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            // Step 1 - Account
            'name'                  => 'required|string|max:255',
            'email'                 => 'required|string|lowercase|email|max:255|unique:users,email',
            'phone'                 => 'nullable|string|max:20|unique:users,phone',
            'password'              => ['required', 'confirmed', Rules\Password::defaults()],
            'role'                  => 'required|in:user,practitioner,service-provider',

            // Step 2 - Basic Profile
            'age'                   => 'required|integer|min:18|max:120',
            'gender'                => ['required', Rule::in(['male', 'female', 'other', 'prefer_not_to_say'])],
            'country'               => 'required|string|max:100',
            'state'                 => 'nullable|string|max:100',
            'city'                  => 'nullable|string|max:100',

            // Step 3 - Healing Info
            'symptoms'              => 'nullable|string|max:1000',
            'healing_stage'         => ['nullable', Rule::in(['early', 'middle', 'advanced', 'maintenance', 'unknown'])],
            'mm_cleanse_days'       => 'nullable|integer|min:0|max:9999',
            'bio'                   => 'nullable|string|max:2000',

            // Step 4 - Photos (profile_photo mandatory)
            'profile_photo'         => 'required|image|mimes:jpeg,png,jpg|max:2048', // 2MB
            'healing_proof_photo'   => 'nullable|image|mimes:jpeg,png,jpg|max:3072', // 3MB
        ]);

        // Create user with all fields
        $user = User::create([
            'name'                  => $validated['name'],
            'email'                 => $validated['email'],
            'phone'                 => $validated['phone'] ?? null,
            'password'              => Hash::make($validated['password']),

            'age'                   => $validated['age'],
            'gender'                => $validated['gender'],
            'country'               => $validated['country'],
            'state'                 => $validated['state'] ?? null,
            'city'                  => $validated['city'] ?? null,

            'symptoms'              => $validated['symptoms'] ?? null,
            'healing_stage'         => $validated['healing_stage'] ?? null,
            'mm_cleanse_days'       => $validated['mm_cleanse_days'] ?? null,
            'bio'                   => $validated['bio'] ?? null,

            'profile_approved'      => false,           // admin approval mandatory
            'available_for_consult' => false,
        ]);

        // Handle profile photo (required)
        if ($request->hasFile('profile_photo')) {
            $path = $request->file('profile_photo')->store('profile-photos', 'public');
            $user->profile_photo = $path;
        }

        // Handle optional healing proof photo
        if ($request->hasFile('healing_proof_photo')) {
            $path = $request->file('healing_proof_photo')->store('healing-proofs', 'public');
            $user->healing_proof_photo = $path;
        }

        $user->save();

        // Assign Spatie role
        $user->assignRole($validated['role']);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false))
            ->with('success', 'Registration successful! Your profile is under review by admin.');
    }
}
