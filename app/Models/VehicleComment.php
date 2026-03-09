<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VehicleComment extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'vehicle_comment';

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
        'comment',
        'type',
        'status'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'type' => 'boolean',
        'status' => 'boolean'
    ];

}
