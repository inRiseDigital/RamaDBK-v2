<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PartsShipment extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'parts_shipment';

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
        'parts_shipment_flag',
        'courier_id',
        'ETD',
        'ETA',
        'tracking_no',
        'payment_type',
        'account_no',
        'shipment_type',
        'from_country',
        'from_port',
        'to_country',
        'to_port',
        'shipping_line',
        'vessel_name',
        'voyage_no',
        'forwarder',
        'carrier',
        'flight_no',
        'awb_no',
        'container_no',
        'sales_person_id',
        'create_date'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'parts_shipment_flag' => 'integer',
        'courier_id' => 'integer',
        'ETD' => 'date',
        'ETA' => 'date',
        'payment_type' => 'integer',
        'shipment_type' => 'integer',
        'from_country' => 'integer',
        'from_port' => 'integer',
        'to_country' => 'integer',
        'to_port' => 'integer',
        'shipping_line' => 'integer',
        'forwarder' => 'integer',
        'sales_person_id' => 'integer',
        'create_date' => 'datetime'
    ];

    /**
     * Get the courier that owns this PartsShipment.
     */
    public function courier()
    {
        return $this->belongsTo(Courier::class, 'courier_id');
    }

    /**
     * Get the sales_person that owns this PartsShipment.
     */
    public function sales_person()
    {
        return $this->belongsTo(SalesPerson::class, 'sales_person_id');
    }
}
