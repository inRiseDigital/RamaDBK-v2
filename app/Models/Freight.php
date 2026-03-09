<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Freight extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'freight';

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
        'freight_id',
        'port_from_id',
        'port_to_id',
        'm3_rate',
        'ft3_rate',
        'wt_rate',
        'container_rate',
        'comment'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'freight_id' => 'integer',
        'port_from_id' => 'integer',
        'port_to_id' => 'integer',
        'm3_rate' => 'decimal:2'
    ];

    /**
     * Get the freight that owns this Freight.
     */
    public function freight()
    {
        return $this->belongsTo(Freight::class, 'freight_id');
    }

    /**
     * Get the port_from that owns this Freight.
     */
    public function port_from()
    {
        return $this->belongsTo(PortFrom::class, 'port_from_id');
    }

    /**
     * Get the port_to that owns this Freight.
     */
    public function port_to()
    {
        return $this->belongsTo(PortTo::class, 'port_to_id');
    }
}
