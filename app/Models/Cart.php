<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'cart';

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
        'stock_no',
        'ses_id',
        'member_id',
        'stock_number',
        'quantity',
        'create_date',
        'ip',
        'status',
        'order_id',
        'expiry',
        'vehicle_tbl'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'quantity' => 'integer',
        'create_date' => 'date',
        'status' => 'integer',
        'expiry' => 'decimal:2'
    ];

    /**
     * Get the member that owns this Cart.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    /**
     * Get the order that owns this Cart.
     */
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }
}
