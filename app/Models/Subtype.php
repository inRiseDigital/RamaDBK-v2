<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subtype extends Model
{


    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'subtype';

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
        'subtype_id',
        'value',
        'm3',
        'kt',
        'type_id',
        'tcv_id',
        'subtype_image'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'subtype_id' => 'integer',
        'm3' => 'decimal:2',
        'kt' => 'decimal:2',
        'tcv_id' => 'integer'
    ];

    /**
     * Get the subtype that owns this Subtype.
     */
    public function subtype()
    {
        return $this->belongsTo(Subtype::class, 'subtype_id');
    }

    /**
     * Get the tcv that owns this Subtype.
     */
    public function tcv()
    {
        return $this->belongsTo(Tcv::class, 'tcv_id');
    }
}
