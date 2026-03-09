<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AuctionWish extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'auction_wish_list';

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
        'wishlist_id',
        'stock_no',
        'create_date',
        'customer_id',
        'ip_address',
        'auction_date',
        'lot_no',
        'auction_hall',
        'mfg_year',
        'make',
        'model',
        'transmission',
        'engine_cc',
        'mileage',
        'color',
        'chassis_no',
        'start_price',
        'final_price',
        'auction_status',
        'auction_grade',
        'accessories',
        'data_source',
        'wish_list_part',
        'auct_ref',
        'images',
        'pic_url'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'wishlist_id' => 'integer',
        'create_date' => 'date',
        'auction_date' => 'datetime',
        'mfg_year' => 'integer',
        'engine_cc' => 'integer',
        'mileage' => 'integer',
        'start_price' => 'decimal:2',
        'final_price' => 'decimal:2'
    ];

    /**
     * Get the wishlist that owns this AuctionWish.
     */
    public function wishlist()
    {
        return $this->belongsTo(Wishlist::class, 'wishlist_id');
    }

    /**
     * Get the customer that owns this AuctionWish.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
}
