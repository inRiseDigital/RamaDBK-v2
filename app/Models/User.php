<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{


    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'usertbl';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'userId';

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
        'userId',
        'loginName',
        'password',
        'permission',
        'status',
        'dateCreated',
        'userTitle',
        'userName',
        'company',
        'addressOne',
        'addressTwo',
        'city',
        'state',
        'zip',
        'country',
        'emailOne',
        'emailTwo',
        'telOne',
        'telTwo',
        'mobile',
        'fax',
        'label',
        'image',
        'grp_id',
        'tcv_member_id',
        'tcv_checksum',
        'stock_access',
        'commission',
        'working_status',
        'no_of_inquiry',
        'no_of_negotiation',
        'sales_assistant_id',
        'no_of_days_on_order',
        'no_of_days_no_order',
        'showallmembers',
        'dob',
        'age',
        'nicno',
        'ppno',
        'confirm_date',
        'join_date',
        'epfno',
        'permanent_add',
        'permanent_email',
        'house_phone',
        'pmobile',
        'marital_status',
        'duration',
        'family_details',
        'designation',
        'shift_time',
        'present_salary',
        'idproof',
        'fb',
        'insta',
        'gplus',
        'twitter',
        'youtube',
        'skype',
        'social_media',
        'admin_comment',
        'rating',
        'green_paper_send_date',
        'remarks',
        'default_view',
        'cancel_invoice',
        'mobile2',
        'whatsapp_check',
        'viber_check',
        'line_check',
        'token_time',
        'token_code',
        'overs_access',
        'stock_offer_country',
        'sales_team',
        'jpy_account_statement',
        'max_stock_offers',
        'admin_access'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'userId' => 'integer',
        'label' => 'integer',
        'grp_id' => 'integer',
        'stock_access' => 'boolean',
        'commission' => 'decimal:2',
        'working_status' => 'integer',
        'no_of_inquiry' => 'integer',
        'no_of_negotiation' => 'integer',
        'sales_assistant_id' => 'integer',
        'no_of_days_on_order' => 'integer',
        'no_of_days_no_order' => 'integer',
        'showallmembers' => 'boolean',
        'dob' => 'date',
        'age' => 'integer',
        'confirm_date' => 'date',
        'join_date' => 'date',
        'present_salary' => 'decimal:2',
        'rating' => 'integer',
        'green_paper_send_date' => 'datetime',
        'default_view' => 'integer',
        'cancel_invoice' => 'boolean',
        'whatsapp_check' => 'boolean',
        'viber_check' => 'boolean',
        'line_check' => 'boolean',
        'token_time' => 'datetime',
        'overs_access' => 'integer',
        'jpy_account_statement' => 'boolean',
        'max_stock_offers' => 'boolean',
        'admin_access' => 'boolean'
    ];

    /**
     * Get the grp that owns this User.
     */
    public function grp()
    {
        return $this->belongsTo(Grp::class, 'grp_id');
    }

    /**
     * Get the tcv_member that owns this User.
     */
    public function tcv_member()
    {
        return $this->belongsTo(TcvMember::class, 'tcv_member_id');
    }

    /**
     * Get the sales_assistant that owns this User.
     */
    public function sales_assistant()
    {
        return $this->belongsTo(SalesAssistant::class, 'sales_assistant_id');
    }
}
