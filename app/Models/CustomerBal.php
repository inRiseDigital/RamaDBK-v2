<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerBal extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'customer_bal';

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
        'customer_id',
        'balance',
        'receipt_no'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'balance' => 'decimal:2'
    ];

    /**
     * Get the customer that owns this CustomerBal.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
}
