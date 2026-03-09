<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class YardOperation extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'yard_operation';

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
        'create_by',
        'create_date',
        'in_date',
        'auction_yard',
        'yard_name',
        'out_date',
        'reason_out',
        'requested_by',
        'transported_by',
        'key_number',
        'remarks',
        'updated_by',
        'updated_on',
        'stock_number',
        'chassis_no',
        'type',
        'images',
        'insp_sheet',
        'insp_sheetout'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'create_by' => 'integer',
        'create_date' => 'datetime',
        'in_date' => 'date',
        'out_date' => 'date',
        'key_number' => 'integer',
        'updated_by' => 'integer',
        'updated_on' => 'datetime'
    ];

}
