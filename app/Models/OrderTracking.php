<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderTracking extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'order_tracking';

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
        'tracking_id',
        'order_id',
        'action',
        'details',
        'create_date'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'tracking_id' => 'integer',
        'create_date' => 'datetime'
    ];

    /**
     * Get the tracking that owns this OrderTracking.
     */
    public function tracking()
    {
        return $this->belongsTo(Tracking::class, 'tracking_id');
    }

    /**
     * Get the order that owns this OrderTracking.
     */
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }
}
