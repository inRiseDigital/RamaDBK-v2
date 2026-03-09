<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NegotiationVehicle extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'negotiation_vehicle_details';

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
        'veh_id',
        'stock_no',
        'stock_number',
        'usd_ex_rate',
        'price',
        'price_usd',
        'offer_price',
        'offer_price_usd',
        'new_used',
        'grade',
        'mfg_year',
        'mfg_month',
        'model_code',
        'chassis_no',
        'mileage',
        'engine_cc',
        'drive',
        'doors',
        'wd',
        'seat_capacity',
        'loading_capacity',
        'hours',
        'other_info',
        'comment',
        'created_by',
        'created_by_parent',
        'youtube_embed_video_url',
        'location',
        'ports',
        'type',
        'subtype',
        'make',
        'maker',
        'model',
        'fuels',
        'gradeExt',
        'gradeInt',
        'transmissions',
        'colors',
        'shortName',
        'country_of_discharge',
        'port_of_discharge',
        'status',
        'is_auction'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'veh_id' => 'integer',
        'stock_no' => 'integer',
        'usd_ex_rate' => 'decimal:2',
        'price' => 'decimal:2',
        'price_usd' => 'decimal:2',
        'offer_price' => 'decimal:2',
        'offer_price_usd' => 'decimal:2',
        'mfg_month' => 'integer',
        'created_by' => 'integer',
        'created_by_parent' => 'integer',
        'status' => 'integer',
        'is_auction' => 'boolean'
    ];

    /**
     * Get the veh that owns this NegotiationVehicle.
     */
    public function veh()
    {
        return $this->belongsTo(Veh::class, 'veh_id');
    }
}
