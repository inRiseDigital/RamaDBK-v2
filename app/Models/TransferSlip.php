<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransferSlip extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'transfer_slips_tbl';

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
        'transfer_slip_no',
        'transfer_slip_id',
        'slip_create_date',
        'transfer_slip_type',
        'name',
        'branch_name',
        'amount',
        'currency',
        'exchange_rate',
        'amount_jpy',
        'remark',
        'status',
        'created_by',
        'last_edit_by',
        'un_balanced_amount',
        'finalize_date'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'transfer_slip_no' => 'integer',
        'slip_create_date' => 'date',
        'amount' => 'decimal:2',
        'exchange_rate' => 'decimal:2',
        'amount_jpy' => 'integer',
        'created_by' => 'integer',
        'last_edit_by' => 'integer',
        'un_balanced_amount' => 'decimal:2',
        'finalize_date' => 'date'
    ];

    /**
     * Get the transfer_slip that owns this TransferSlip.
     */
    public function transfer_slip()
    {
        return $this->belongsTo(TransferSlip::class, 'transfer_slip_id');
    }
}
