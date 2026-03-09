<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Insurance extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'insurance_tbl';

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
        'insurance_no',
        'member_id',
        'member_name',
        'stock_number',
        'created_by',
        'insurance_amount',
        'create_date',
        'adjust_due_amount',
        'inv_ref_id',
        'insurance_doc',
        'insurance_curr',
        'buying_price',
        'buying_curr',
        'member_email',
        'stock_no',
        'created_by_name',
        'curr_ex_rate',
        'totalallocated',
        'is_paid',
        'chassis_no'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'insurance_amount' => 'decimal:2',
        'create_date' => 'date',
        'adjust_due_amount' => 'decimal:2',
        'buying_price' => 'decimal:2',
        'stock_no' => 'integer',
        'curr_ex_rate' => 'decimal:2',
        'totalallocated' => 'decimal:2',
        'is_paid' => 'boolean'
    ];

    /**
     * Get the member that owns this Insurance.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    /**
     * Get the inv_ref that owns this Insurance.
     */
    public function inv_ref()
    {
        return $this->belongsTo(InvRef::class, 'inv_ref_id');
    }
}
