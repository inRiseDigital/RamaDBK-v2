<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderPrice extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'order_price';

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
        'fob_price',
        'freight_charges',
        'other_charges',
        'delivery_charges',
        'insurance_charges',
        'total',
        'curr',
        'custom_charges'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'fob_price' => 'decimal:2',
        'freight_charges' => 'decimal:2',
        'other_charges' => 'decimal:2',
        'delivery_charges' => 'decimal:2',
        'insurance_charges' => 'decimal:2',
        'total' => 'decimal:2',
        'custom_charges' => 'decimal:2'
    ];

    /**
     * Get the order that owns this OrderPrice.
     */
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }
}
