<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourierManager extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courier_manager';

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
        'invoice_no',
        'cc_id',
        'docate_no',
        'date',
        'remark'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        's_no' => 'integer',
        'cc_id' => 'integer',
        'date' => 'date'
    ];

    /**
     * Get the cc that owns this CourierManager.
     */
    public function cc()
    {
        return $this->belongsTo(Cc::class, 'cc_id');
    }
}
