<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Make extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'make';

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
        'make_id',
        'value',
        'tcv_id',
        'arai_make'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'make_id' => 'integer',
        'tcv_id' => 'integer',
        'arai_make' => 'integer'
    ];

    /**
     * Get the make that owns this Make.
     */
    public function make()
    {
        return $this->belongsTo(Make::class, 'make_id');
    }

    /**
     * Get the tcv that owns this Make.
     */
    public function tcv()
    {
        return $this->belongsTo(Tcv::class, 'tcv_id');
    }
}
