<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'members';

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
        'member_id',
        'member',
        'password',
        'status',
        'rating',
        'access_date',
        'create_date',
        'update_date',
        'modify',
        'tag',
        'ip',
        'ipCountry',
        'code',
        'memb_currency',
        'operator',
        'log_date',
        'master_account_email',
        'master_account_id',
        'master_account_amount_per',
        'sub_account_id',
        'master_account_date',
        'purchase_units',
        'auc_permission',
        'uss_image',
        'market_price',
        'bid_permission',
        'bid_mail_permission',
        'is_uss',
        'ship_percentage',
        'bl_copy_sent'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'member_id' => 'integer',
        'status' => 'integer',
        'rating' => 'integer',
        'access_date' => 'datetime',
        'create_date' => 'date',
        'update_date' => 'datetime',
        'modify' => 'integer',
        'log_date' => 'datetime',
        'master_account_id' => 'integer',
        'master_account_amount_per' => 'decimal:2',
        'sub_account_id' => 'integer',
        'master_account_date' => 'date',
        'purchase_units' => 'integer',
        'uss_image' => 'integer',
        'bl_copy_sent' => 'boolean'
    ];

    /**
     * Get the member that owns this Member.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    /**
     * Get the master_account that owns this Member.
     */
    public function master_account()
    {
        return $this->belongsTo(MasterAccount::class, 'master_account_id');
    }

    /**
     * Get the sub_account that owns this Member.
     */
    public function sub_account()
    {
        return $this->belongsTo(SubAccount::class, 'sub_account_id');
    }
}
