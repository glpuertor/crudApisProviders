<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class providers extends Model
{
    use HasFactory;

    protected $table = 'providers';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'description',
        'status',
    ];

}
