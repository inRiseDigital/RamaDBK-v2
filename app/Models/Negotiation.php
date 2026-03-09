<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Negotiation extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'negotiation_details';

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
        'nego_id',
        'veh_id',
        'cust_id',
        'nego_date',
        'read_flag',
        'nego_status',
        'when_cancel',
        'who_cancel',
        'when_req_process',
        'who_req_process',
        'when_in_process',
        'is_refund',
        'sales_person',
        'sales_assign_date'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'nego_id' => 'integer',
        'veh_id' => 'integer',
        'cust_id' => 'integer',
        'nego_date' => 'date',
        'read_flag' => 'boolean',
        'when_cancel' => 'datetime',
        'when_req_process' => 'datetime',
        'when_in_process' => 'datetime',
        'is_refund' => 'boolean',
        'sales_person' => 'integer',
        'sales_assign_date' => 'date'
    ];

    /**
     * Get the nego that owns this Negotiation.
     */
    public function nego()
    {
        return $this->belongsTo(Nego::class, 'nego_id');
    }

    /**
     * Get the veh that owns this Negotiation.
     */
    public function veh()
    {
        return $this->belongsTo(Veh::class, 'veh_id');
    }

    /**
     * Get the cust that owns this Negotiation.
     */
    public function cust()
    {
        return $this->belongsTo(Cust::class, 'cust_id');
    }
}
