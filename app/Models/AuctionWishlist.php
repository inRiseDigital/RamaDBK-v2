<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AuctionWishlist extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'auction_wishlist';

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
        'member_id',
        'create_date',
        'ip',
        'stock_date',
        'stock_type',
        'wish_list_part',
        'make',
        'maker',
        'type',
        'subtype',
        'model',
        'mfg_year',
        'mfg_month',
        'chassis_no',
        'model_code',
        'mileage',
        'engine_cc',
        'drive',
        'grade_ext',
        'grade_int',
        'doors',
        'seat_capacity',
        'fuel',
        'color',
        'transmission',
        'picture',
        'auction_name',
        'price',
        'offer_price',
        'start_price_en',
        'end_price_en',
        'stock_number',
        'lot_no',
        'lot_date',
        'auc_grade',
        'acc'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'wishlist_id' => 'integer',
        'member_id' => 'integer',
        'create_date' => 'date',
        'stock_date' => 'date',
        'mfg_month' => 'integer',
        'mileage' => 'decimal:2',
        'engine_cc' => 'decimal:2',
        'doors' => 'integer',
        'price' => 'decimal:2',
        'offer_price' => 'decimal:2',
        'start_price_en' => 'decimal:2',
        'end_price_en' => 'decimal:2',
        'lot_date' => 'datetime'
    ];

    /**
     * Get the wishlist that owns this AuctionWishlist.
     */
    public function wishlist()
    {
        return $this->belongsTo(Wishlist::class, 'wishlist_id');
    }

    /**
     * Get the member that owns this AuctionWishlist.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }
}
