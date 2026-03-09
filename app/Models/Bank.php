<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'bank_details';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'bank_name',
        'details',
        'position',
        'status',
        'show_in_invoice',
        'is_default'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'position' => 'integer',
        'status' => 'boolean',
        'show_in_invoice' => 'boolean',
        'is_default' => 'boolean'
    ];

}
