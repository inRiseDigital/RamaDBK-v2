<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JpnOrderVehicle extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'jpn_order_vehicle';

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
        'order_id',
        'source',
        'auction_hall',
        'stock_id',
        'stock_number',
        'bid_id',
        'car_price',
        'make_id',
        'make',
        'maker_id',
        'maker',
        'model_code',
        'mfg_year',
        'mfg_month',
        'reg_year',
        'reg_month',
        'fuel',
        'chassis_no',
        'length',
        'width',
        'height',
        'wd',
        'm3_size',
        'engine_cc',
        'engine_no',
        'ext_color',
        'body_type',
        'transmission',
        'hs_code',
        'mileage',
        'seat',
        'expcertino',
        'expinspecno',
        'other_options',
        'show_body_type',
        'show_trans',
        'show_hscode',
        'show_mileage',
        'show_seat',
        'show_auc_hall',
        'show_stock_num',
        'show_engno',
        'show_option',
        'show_all',
        'shw_expcertino',
        'show_expinspecno',
        'insured_amount',
        'stearing',
        'auction_date',
        'grade_ext',
        'lot_number',
        'cif_car_price',
        'cif_insurance',
        'cif_freight',
        'cif_accessories'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'order_id' => 'integer',
        'stock_id' => 'integer',
        'bid_id' => 'integer',
        'car_price' => 'decimal:2',
        'make_id' => 'integer',
        'maker_id' => 'integer',
        'mfg_month' => 'integer',
        'reg_month' => 'integer',
        'length' => 'integer',
        'width' => 'integer',
        'height' => 'integer',
        'm3_size' => 'decimal:2',
        'mileage' => 'integer',
        'seat' => 'integer',
        'show_body_type' => 'boolean',
        'show_trans' => 'boolean',
        'show_hscode' => 'boolean',
        'show_mileage' => 'boolean',
        'show_seat' => 'boolean',
        'show_auc_hall' => 'boolean',
        'show_stock_num' => 'boolean',
        'show_engno' => 'boolean',
        'show_option' => 'boolean',
        'show_all' => 'boolean',
        'shw_expcertino' => 'boolean',
        'show_expinspecno' => 'boolean',
        'insured_amount' => 'decimal:2',
        'auction_date' => 'date',
        'cif_car_price' => 'integer',
        'cif_insurance' => 'decimal:2',
        'cif_freight' => 'decimal:2'
    ];

    /**
     * Get the order that owns this JpnOrderVehicle.
     */
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    /**
     * Get the stock that owns this JpnOrderVehicle.
     */
    public function stock()
    {
        return $this->belongsTo(Stock::class, 'stock_id');
    }

    /**
     * Get the bid that owns this JpnOrderVehicle.
     */
    public function bid()
    {
        return $this->belongsTo(Bid::class, 'bid_id');
    }

    /**
     * Get the make that owns this JpnOrderVehicle.
     */
    public function make()
    {
        return $this->belongsTo(Make::class, 'make_id');
    }

    /**
     * Get the maker that owns this JpnOrderVehicle.
     */
    public function maker()
    {
        return $this->belongsTo(Maker::class, 'maker_id');
    }
}
