<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'payment_info';

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
        'receipt_no',
        'payment_type',
        'debit_type',
        'bank_id',
        'payment_mode',
        'LC_draft_no',
        'draft_value',
        'chassis_no',
        'payment_ref',
        'name',
        'payment_received_in_bank',
        'payment_received_in_bank_curr',
        'payment_received_in_bank_curr_exrate',
        'received_amount',
        'curr_received',
        'payment_date',
        'customer_id',
        'sales_person_id',
        'assign_status',
        'lock_status',
        'remark',
        'issue_date',
        'deposit_date',
        'lc_receive_date',
        'applicant_name',
        'applicant_bank',
        'lc_number',
        'submit_bank_date',
        'payment_status',
        'unallocated_amount',
        'unallocated_amount_jpy',
        'jpy_ex_rate',
        'transaction_type',
        'amend_no',
        'adjust_access_amount',
        'access_amount_adjust_date',
        'payment_received_date',
        'expire_date',
        'cheque_no',
        'scan_file',
        'payment_assigned_to',
        'other_scan_file',
        'sales_assistant_id',
        'send_mail_status',
        'latest_date_shipment',
        'remark_update_id',
        'remark_update_date'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'receipt_no' => 'integer',
        'bank_id' => 'integer',
        'received_amount' => 'integer',
        'payment_date' => 'date',
        'customer_id' => 'integer',
        'sales_person_id' => 'integer',
        'issue_date' => 'date',
        'deposit_date' => 'date',
        'lc_receive_date' => 'date',
        'submit_bank_date' => 'date',
        'payment_status' => 'boolean',
        'unallocated_amount' => 'decimal:2',
        'unallocated_amount_jpy' => 'decimal:2',
        'jpy_ex_rate' => 'decimal:2',
        'amend_no' => 'integer',
        'adjust_access_amount' => 'decimal:2',
        'access_amount_adjust_date' => 'datetime',
        'payment_received_date' => 'date',
        'expire_date' => 'date',
        'sales_assistant_id' => 'integer',
        'send_mail_status' => 'date',
        'latest_date_shipment' => 'date',
        'remark_update_id' => 'integer',
        'remark_update_date' => 'datetime'
    ];

    /**
     * Get the bank that owns this Payment.
     */
    public function bank()
    {
        return $this->belongsTo(Bank::class, 'bank_id');
    }

    /**
     * Get the customer that owns this Payment.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    /**
     * Get the sales_person that owns this Payment.
     */
    public function sales_person()
    {
        return $this->belongsTo(SalesPerson::class, 'sales_person_id');
    }

    /**
     * Get the sales_assistant that owns this Payment.
     */
    public function sales_assistant()
    {
        return $this->belongsTo(SalesAssistant::class, 'sales_assistant_id');
    }

    /**
     * Get the remark_update that owns this Payment.
     */
    public function remark_update()
    {
        return $this->belongsTo(RemarkUpdate::class, 'remark_update_id');
    }
}
