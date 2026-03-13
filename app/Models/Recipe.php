<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'image',
        'ingredients',
        'instructions',
        'servings',
        'prep_time',
        'is_paid',
        'price',
        'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
