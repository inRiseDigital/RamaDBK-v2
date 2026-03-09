<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InspectionJpn extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'inspection_jpn';

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
        'title',
        'dorder'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'dorder' => 'integer'
    ];

}
