<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BidOffer extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'bid_offers';

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
        'member_id',
        'stock_id',
        'message',
        'bid_price',
        'client_bid_price',
        'status',
        'bid_time',
        'finish_bid_price',
        'admin_msg',
        'customer_email',
        'person_incharge',
        'is_import',
        'is_invoice',
        'auc_cond',
        'client_bid_currency',
        'finish_bid_price_usd',
        'm3',
        'auction_fee',
        'inspection',
        'agent_fee',
        'transport_fees',
        'insurance_fees',
        'other_fees',
        'custom_m3',
        'commission',
        'freight_m3',
        'currency',
        'ex_rate',
        'total_cf_jpy',
        'total_cf',
        'bid_source',
        'previous_bid_price',
        'is_buyer_read',
        'is_admin_read',
        'bid_update_time_front',
        'bid_edit_text',
        'sel_start_price',
        'sel_last_price',
        'is_dealer',
        'dealer_id',
        'dealer_stock_id',
        'bid_price_usd',
        'member_name',
        'member_company',
        'member_country',
        'member_country_id',
        'qa_chassis',
        'auction_id',
        'auction_name',
        'grade',
        'grade_exterior',
        'grade_interior',
        'lot_no',
        'start_price',
        'start_date',
        'close_date',
        'make',
        'model',
        'mfg_year',
        'transmission',
        'color',
        'fuel',
        'engine_capacity',
        'drive',
        'mileage',
        'vehicle_status',
        'bid_status',
        'chassis_id',
        'priv',
        'auc_finish_bid_price',
        'info',
        'equip',
        'alert_status',
        'auct',
        'auc_time_update',
        'dealer_sno',
        'auc_time_hour',
        'auc_time_min',
        'update_date',
        'msg_sales_to_purchase',
        'msg_purchase_to_sales',
        'bid_send_status',
        'auc_group',
        'auc_unit',
        'bid_status_change_by',
        'bid_status_change_time',
        'auc_date',
        'auct_ref',
        'adjust_amount',
        'customer_ref',
        'is_synced',
        'sync_message',
        'sync_error',
        'is_deleted'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        's_no' => 'integer',
        'bid_price' => 'decimal:2',
        'client_bid_price' => 'decimal:2',
        'status' => 'integer',
        'bid_time' => 'datetime',
        'finish_bid_price' => 'decimal:2',
        'person_incharge' => 'integer',
        'is_import' => 'boolean',
        'is_invoice' => 'boolean',
        'finish_bid_price_usd' => 'decimal:2',
        'm3' => 'decimal:2',
        'auction_fee' => 'decimal:2',
        'inspection' => 'decimal:2',
        'agent_fee' => 'decimal:2',
        'transport_fees' => 'decimal:2',
        'insurance_fees' => 'decimal:2',
        'other_fees' => 'decimal:2',
        'custom_m3' => 'decimal:2',
        'commission' => 'decimal:2',
        'freight_m3' => 'decimal:2',
        'ex_rate' => 'decimal:2',
        'total_cf_jpy' => 'decimal:2',
        'total_cf' => 'decimal:2',
        'bid_source' => 'boolean',
        'previous_bid_price' => 'decimal:2',
        'is_buyer_read' => 'boolean',
        'is_admin_read' => 'boolean',
        'bid_update_time_front' => 'datetime',
        'sel_start_price' => 'decimal:2',
        'sel_last_price' => 'decimal:2',
        'is_dealer' => 'boolean',
        'dealer_id' => 'integer',
        'dealer_stock_id' => 'integer',
        'bid_price_usd' => 'decimal:2',
        'member_country_id' => 'integer',
        'lot_no' => 'integer',
        'start_price' => 'decimal:2',
        'start_date' => 'datetime',
        'close_date' => 'datetime',
        'mfg_year' => 'integer',
        'engine_capacity' => 'integer',
        'mileage' => 'integer',
        'bid_status' => 'integer',
        'auc_finish_bid_price' => 'decimal:2',
        'auc_time_update' => 'boolean',
        'dealer_sno' => 'integer',
        'update_date' => 'datetime',
        'bid_send_status' => 'integer',
        'auc_unit' => 'integer',
        'bid_status_change_by' => 'integer',
        'bid_status_change_time' => 'datetime',
        'auc_date' => 'date',
        'auct_ref' => 'integer',
        'adjust_amount' => 'integer',
        'is_synced' => 'boolean',
        'sync_error' => 'boolean',
        'is_deleted' => 'integer'
    ];

    /**
     * Get the member that owns this BidOffer.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    /**
     * Get the stock that owns this BidOffer.
     */
    public function stock()
    {
        return $this->belongsTo(Stock::class, 'stock_id');
    }

    /**
     * Get the dealer that owns this BidOffer.
     */
    public function dealer()
    {
        return $this->belongsTo(Dealer::class, 'dealer_id');
    }

    /**
     * Get the dealer_stock that owns this BidOffer.
     */
    public function dealer_stock()
    {
        return $this->belongsTo(DealerStock::class, 'dealer_stock_id');
    }

    /**
     * Get the member_country that owns this BidOffer.
     */
    public function member_country()
    {
        return $this->belongsTo(MemberCountry::class, 'member_country_id');
    }

    /**
     * Get the auction that owns this BidOffer.
     */
    public function auction()
    {
        return $this->belongsTo(Auction::class, 'auction_id');
    }

    /**
     * Get the chassis that owns this BidOffer.
     */
    public function chassis()
    {
        return $this->belongsTo(Chassi::class, 'chassis_id');
    }
}
