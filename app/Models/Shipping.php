<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'shipping_info';

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
        's_no',
        'stock_no',
        'stock_number',
        'chassis_no',
        'invoice_no',
        'shipping_status',
        'shipping_line',
        'vessel_name',
        'voyage_number',
        'ETD_date',
        'ETA_date',
        'Remark_inner_cargo',
        'Remark_internal_mng',
        'cancel_date',
        'cancel_reason',
        'is_authorized',
        'autherize_remark',
        'shipment_type',
        'shipment_remark',
        'bill_of_lading_date',
        'bill_of_lading_number',
        'bill_of_lading_charge',
        'auth_timestamp',
        'shipping_remark_last_modified_time',
        'shipping_remark_create_time',
        'BL_sent',
        'BL_received',
        'bill_sent_date',
        'amount_due',
        're_shipped_date',
        're_shipped_remark',
        'BL_new_sent',
        'is_imported'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        's_no' => 'integer',
        'stock_no' => 'integer',
        'shipping_status' => 'integer',
        'ETD_date' => 'date',
        'ETA_date' => 'date',
        'cancel_date' => 'date',
        'is_authorized' => 'boolean',
        'shipment_type' => 'integer',
        'bill_of_lading_date' => 'date',
        'bill_of_lading_charge' => 'integer',
        'auth_timestamp' => 'datetime',
        'shipping_remark_last_modified_time' => 'datetime',
        'shipping_remark_create_time' => 'datetime',
        'bill_sent_date' => 'date',
        're_shipped_date' => 'date',
        'is_imported' => 'boolean'
    ];

}
