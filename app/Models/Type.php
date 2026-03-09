<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'type';

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
        'value',
        'm3',
        'kt',
        'display',
        'tcv_id'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'type_id' => 'integer',
        'm3' => 'decimal:2',
        'kt' => 'decimal:2',
        'display' => 'integer',
        'tcv_id' => 'integer'
    ];

    /**
     * Get the type that owns this Type.
     */
    public function type()
    {
        return $this->belongsTo(Type::class, 'type_id');
    }

    /**
     * Get the tcv that owns this Type.
     */
    public function tcv()
    {
        return $this->belongsTo(Tcv::class, 'tcv_id');
    }
}
