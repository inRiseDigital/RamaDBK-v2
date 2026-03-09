<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClaimManager extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'claim_manager';

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
        'request_id',
        'request_date',
        'request_by',
        'customer_id',
        'request_status',
        'request_type',
        'reason_of_refund',
        'bank_information',
        'claim_approver_comment',
        'refund_amount',
        'currency',
        'authorize_by',
        'authorize_date',
        'auth_remark',
        'check_by',
        'check_date',
        'check_comment',
        'image_name',
        'stock_id',
        'stock_number',
        'invoice_stock_id',
        'chassis_no',
        'vehicle_title',
        'invoice_member',
        'invoice_no',
        'request_name',
        'approve_date',
        'paid_from_bank',
        'paid_date',
        'paid_amount'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'request_id' => 'integer',
        'request_date' => 'date',
        'request_by' => 'integer',
        'customer_id' => 'integer',
        'request_status' => 'integer',
        'request_type' => 'integer',
        'refund_amount' => 'decimal:2',
        'authorize_by' => 'integer',
        'authorize_date' => 'datetime',
        'check_by' => 'integer',
        'check_date' => 'datetime',
        'stock_id' => 'integer',
        'invoice_stock_id' => 'integer',
        'approve_date' => 'date',
        'paid_from_bank' => 'integer',
        'paid_date' => 'date',
        'paid_amount' => 'integer'
    ];

    /**
     * Get the request that owns this ClaimManager.
     */
    public function request()
    {
        return $this->belongsTo(Request::class, 'request_id');
    }

    /**
     * Get the customer that owns this ClaimManager.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    /**
     * Get the stock that owns this ClaimManager.
     */
    public function stock()
    {
        return $this->belongsTo(Stock::class, 'stock_id');
    }

    /**
     * Get the invoice_stock that owns this ClaimManager.
     */
    public function invoice_stock()
    {
        return $this->belongsTo(InvoiceStock::class, 'invoice_stock_id');
    }
}
