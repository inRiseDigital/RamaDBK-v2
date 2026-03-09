<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class YardCharge extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'yard_charges';

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
        'type_id',
        'type',
        'yard_name',
        'yard_location',
        'free_days',
        'first_m3',
        'second_m3',
        'third_m3',
        'fourth_m3',
        'fixed_m3'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'type_id' => 'integer',
        'free_days' => 'integer',
        'first_m3' => 'integer',
        'second_m3' => 'integer',
        'third_m3' => 'integer',
        'fourth_m3' => 'integer',
        'fixed_m3' => 'integer'
    ];

    /**
     * Get the type that owns this YardCharge.
     */
    public function type()
    {
        return $this->belongsTo(Type::class, 'type_id');
    }
}
