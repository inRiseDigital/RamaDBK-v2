<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Maker extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'maker';

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
        'maker_id',
        'value',
        'm3',
        'kt',
        'tcv_id'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'maker_id' => 'integer',
        'm3' => 'decimal:2',
        'kt' => 'decimal:2',
        'tcv_id' => 'integer'
    ];

    /**
     * Get the maker that owns this Maker.
     */
    public function maker()
    {
        return $this->belongsTo(Maker::class, 'maker_id');
    }

    /**
     * Get the tcv that owns this Maker.
     */
    public function tcv()
    {
        return $this->belongsTo(Tcv::class, 'tcv_id');
    }
}
