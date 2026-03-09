<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'country_list';

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
        'country_id',
        'country_name',
        'country_code',
        'status'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'country_id' => 'integer',
        'status' => 'integer'
    ];

    /**
     * Get the country that owns this Country.
     */
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }
}
