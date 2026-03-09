<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enquiry extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'enquiry';

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
        'enquiry_key',
        'create_date',
        'stock_no',
        'stock_number',
        'type',
        'make',
        'model',
        'model_code_id',
        'model_code',
        'chassis_no',
        'grade',
        'make_id',
        'model_id',
        'grade_id',
        'type_id',
        'transmission',
        'fuel',
        'engine_cc',
        'engine_cc_to',
        'mileage',
        'mileage_to',
        'color',
        'grade_ext',
        'grade_int',
        'mfg_year_from',
        'mfg_year_to',
        'price_from',
        'price_to',
        'currency',
        'drive',
        'message',
        'tlt',
        'name',
        'company',
        'address_1',
        'address_2',
        'city',
        'state',
        'zip',
        'country',
        'port',
        'email_1',
        'email_2',
        'telephone_1',
        'telephone_2',
        'mobile',
        'fax',
        'website',
        'dealer_type',
        'user_ip',
        'ip_country',
        'status',
        'code',
        'matching_alert',
        'sales_person',
        'mail_status',
        'last_matching_cron',
        'part_number',
        'description',
        'veh_title',
        'source',
        'spam_status',
        'forward_by',
        'forward_date',
        'member_id',
        'sales_person_name',
        'have_invoice',
        'crm_id',
        'crm_name',
        'is_updated',
        'last_auto_followup',
        'rating',
        'forward_date_time',
        'forward_ip'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'create_date' => 'datetime',
        'stock_no' => 'integer',
        'model_code_id' => 'integer',
        'make_id' => 'integer',
        'model_id' => 'integer',
        'grade_id' => 'integer',
        'type_id' => 'integer',
        'engine_cc' => 'integer',
        'engine_cc_to' => 'integer',
        'mileage' => 'integer',
        'mileage_to' => 'integer',
        'price_from' => 'decimal:2',
        'price_to' => 'decimal:2',
        'sales_person' => 'integer',
        'last_matching_cron' => 'datetime',
        'part_number' => 'integer',
        'spam_status' => 'integer',
        'forward_by' => 'integer',
        'forward_date' => 'date',
        'member_id' => 'integer',
        'crm_id' => 'integer',
        'last_auto_followup' => 'datetime',
        'forward_date_time' => 'datetime'
    ];

    /**
     * Get the model_code that owns this Enquiry.
     */
    public function model_code()
    {
        return $this->belongsTo(ModelCode::class, 'model_code_id');
    }

    /**
     * Get the make that owns this Enquiry.
     */
    public function make()
    {
        return $this->belongsTo(Make::class, 'make_id');
    }

    /**
     * Get the model that owns this Enquiry.
     */
    public function model()
    {
        return $this->belongsTo(VehicleModel::class, 'model_id');
    }

    /**
     * Get the grade that owns this Enquiry.
     */
    public function grade()
    {
        return $this->belongsTo(Grade::class, 'grade_id');
    }

    /**
     * Get the type that owns this Enquiry.
     */
    public function type()
    {
        return $this->belongsTo(Type::class, 'type_id');
    }

    /**
     * Get the member that owns this Enquiry.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    /**
     * Get the crm that owns this Enquiry.
     */
    public function crm()
    {
        return $this->belongsTo(Crm::class, 'crm_id');
    }
}
