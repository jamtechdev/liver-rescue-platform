<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, HasRoles, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',

        'profile_photo',
        'healing_proof_photo',
        'profile_approved',

        'gender',
        'age',

        'country',
        'state',
        'city',

        'symptoms',
        'healing_stage',
        'mm_cleanse_days',

        'bio',
        'available_for_consult',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'profile_approved'      => 'boolean',
            'available_for_consult' => 'boolean',

            'age'                   => 'integer',
            'mm_cleanse_days'       => 'integer',

            'gender'                => 'string',
            'healing_stage'         => 'string',
        ];
    }
}
