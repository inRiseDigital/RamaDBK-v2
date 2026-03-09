<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MemberDetail extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'members_details';

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
        'ref_no',
        'company',
        'company_status',
        'tlt',
        'fname',
        'lname',
        'sex',
        'position_name',
        'dob',
        'address_type',
        'address_1',
        'address_2',
        'city',
        'state',
        'zip',
        'port',
        'country',
        'email_1',
        'email_2',
        'telephone_1',
        'telephone_2',
        'fax',
        'deposit',
        'mobile',
        'vehicle_int',
        'wish_terms',
        'website',
        'work_type',
        'receive',
        'is_newsletter',
        'is_dealer',
        'member_type',
        'language',
        'is_import',
        'how_to_know',
        'auto_login',
        'sales_person_id',
        'member_image',
        'is_update',
        'sales_expiry_date',
        'date_on_expiry',
        'remarks_updated_by',
        'remarks_updated_by_id',
        'remarks_updated_on',
        'is_execute',
        'bid_limit_amount',
        'bid_limitations',
        'bid_limit_reason',
        'result_price',
        'one_price',
        'term',
        'customer_limit'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'member_id' => 'integer',
        'company_status' => 'integer',
        'sex' => 'integer',
        'dob' => 'date',
        'address_type' => 'integer',
        'deposit' => 'integer',
        'is_newsletter' => 'integer',
        'is_dealer' => 'integer',
        'member_type' => 'boolean',
        'is_import' => 'integer',
        'how_to_know' => 'integer',
        'auto_login' => 'boolean',
        'sales_person_id' => 'integer',
        'is_update' => 'boolean',
        'sales_expiry_date' => 'date',
        'date_on_expiry' => 'date',
        'remarks_updated_by_id' => 'integer',
        'remarks_updated_on' => 'datetime',
        'is_execute' => 'boolean',
        'bid_limit_amount' => 'decimal:2',
        'bid_limitations' => 'integer',
        'result_price' => 'boolean',
        'one_price' => 'boolean',
        'customer_limit' => 'decimal:2'
    ];

    /**
     * Get the member that owns this MemberDetail.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    /**
     * Get the sales_person that owns this MemberDetail.
     */
    public function sales_person()
    {
        return $this->belongsTo(SalesPerson::class, 'sales_person_id');
    }

    /**
     * Get the remarks_updated_by that owns this MemberDetail.
     */
    public function remarks_updated_by()
    {
        return $this->belongsTo(RemarksUpdatedBy::class, 'remarks_updated_by_id');
    }
}
