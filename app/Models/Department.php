<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'department_tbl';

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
        'dept_id',
        'dept_name',
        'dept_head',
        'orders'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'dept_id' => 'integer',
        'dept_head' => 'integer',
        'orders' => 'integer'
    ];

    /**
     * Get the dept that owns this Department.
     */
    public function dept()
    {
        return $this->belongsTo(Dept::class, 'dept_id');
    }
}
