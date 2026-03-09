<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VehicleRemark extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'vehicle_remark';

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
        'stock_no',
        'stock_number',
        'operator_id',
        'remark',
        'date_time',
        'trico_no'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        's_no' => 'integer',
        'stock_no' => 'integer',
        'date_time' => 'datetime'
    ];

    /**
     * Get the operator that owns this VehicleRemark.
     */
    public function operator()
    {
        return $this->belongsTo(Operator::class, 'operator_id');
    }
}
