<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentAllocation extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'payment_allocation';

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
        'receipt_no',
        'invoice_no',
        'credit',
        'debit',
        'user_id',
        'user_name',
        'alloc_currency',
        'alloc_ex_rate',
        'allocation_date'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        's_no' => 'integer',
        'credit' => 'decimal:2',
        'debit' => 'decimal:2',
        'user_id' => 'integer',
        'allocation_date' => 'date'
    ];

    /**
     * Get the user that owns this PaymentAllocation.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
