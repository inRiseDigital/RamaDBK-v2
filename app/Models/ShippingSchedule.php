<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShippingSchedule extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'shipping_schedule';

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
        'region_id',
        'shipcompany_id',
        'forwarder_id',
        'vessel_id',
        'vessel_name',
        'voyage_no',
        'types',
        'shipping_date',
        'arrive_date'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'region_id' => 'integer',
        'shipcompany_id' => 'integer',
        'forwarder_id' => 'integer',
        'vessel_id' => 'integer'
    ];

    /**
     * Get the region that owns this ShippingSchedule.
     */
    public function region()
    {
        return $this->belongsTo(Region::class, 'region_id');
    }

    /**
     * Get the shipcompany that owns this ShippingSchedule.
     */
    public function shipcompany()
    {
        return $this->belongsTo(Shipcompany::class, 'shipcompany_id');
    }

    /**
     * Get the forwarder that owns this ShippingSchedule.
     */
    public function forwarder()
    {
        return $this->belongsTo(Forwarder::class, 'forwarder_id');
    }

    /**
     * Get the vessel that owns this ShippingSchedule.
     */
    public function vessel()
    {
        return $this->belongsTo(Vessel::class, 'vessel_id');
    }
}
