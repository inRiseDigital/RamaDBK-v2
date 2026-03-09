<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceRequest extends Model
{
    protected $fillable = [
        'make',
        'model',
        'transmission',
        'reg_year_from',
        'reg_year_to',
        'name',
        'country',
        'mobile',
        'email',
        'accept_terms',
        'status',
    ];

    protected $casts = [
        'accept_terms' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
