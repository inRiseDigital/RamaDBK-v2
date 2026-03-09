<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MashoManager extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'masho_manager';

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
        'stock_no',
        'chassis_no',
        'fchassis_no',
        'stock_number',
        'vehicle_title',
        'masho_shaken',
        'port',
        'created_by_id',
        'created_by',
        'created_on',
        'PlNo1',
        'PlNo2',
        'PlNo3',
        'PlNo4',
        'PlNo5',
        'PlNo6',
        'PlNo7',
        'PlNo8',
        'PlNo9',
        'PlNo10',
        'PlNo11',
        'PlNo12',
        'plateNo',
        'expiry_on'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'stock_no' => 'integer',
        'masho_shaken' => 'integer',
        'port' => 'integer',
        'created_by_id' => 'integer',
        'created_on' => 'datetime',
        'expiry_on' => 'datetime'
    ];

    /**
     * Get the created_by that owns this MashoManager.
     */
    public function created_by()
    {
        return $this->belongsTo(CreatedBy::class, 'created_by_id');
    }
}
