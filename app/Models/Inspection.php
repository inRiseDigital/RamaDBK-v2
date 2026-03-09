<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inspection extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'inspection_tbl';

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
        'row_no',
        'col_no',
        'c_id',
        'caption',
        'status'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'stock_no' => 'integer',
        'row_no' => 'integer',
        'col_no' => 'integer',
        'c_id' => 'integer',
        'status' => 'boolean'
    ];

    /**
     * Get the c that owns this Inspection.
     */
    public function c()
    {
        return $this->belongsTo(C::class, 'c_id');
    }
}
