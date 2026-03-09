<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'curr_list';

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
        'curr_id',
        'curr_symbol',
        'curr_name',
        'curr_description',
        'conversion_rate',
        'curr_default',
        'curr_status',
        'last_updated'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'curr_id' => 'integer',
        'conversion_rate' => 'decimal:2',
        'curr_default' => 'integer',
        'curr_status' => 'integer',
        'last_updated' => 'datetime'
    ];

    /**
     * Get the curr that owns this Currency.
     */
    public function curr()
    {
        return $this->belongsTo(Curr::class, 'curr_id');
    }
}
