<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShippingOrder extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'shipping_order';

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
        'shipment_type',
        'shipper',
        'consignee',
        'notify_party',
        'remarks',
        'vessel_company',
        'voyage_no',
        'sailing_date',
        'ETA_date',
        'loading_port',
        'loading_country',
        'discharge_country',
        'discharge_port',
        'shipping_marks',
        'vehs_weight',
        'vehs_m3',
        'container_no',
        'seal_no',
        'tare_weight',
        'total_m3',
        'BL_issue_place',
        'original_BL',
        'vessel_name',
        '_freight',
        'total_weight',
        'SO_status',
        '_freight_prepaid_as'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'shipment_type' => 'boolean',
        'sailing_date' => 'date',
        'ETA_date' => 'date',
        'vehs_weight' => 'decimal:2',
        'vehs_m3' => 'decimal:2',
        'tare_weight' => 'decimal:2',
        'total_m3' => 'decimal:2',
        'total_weight' => 'decimal:2',
        'SO_status' => 'integer'
    ];

}
