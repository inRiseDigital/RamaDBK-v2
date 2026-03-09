<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VehicleModel extends Model
{
    protected $table = 'model';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'model_id',
        'value',
        'm3',
        'kt'
    ];

    protected $casts = [
        'model_id' => 'integer',
        'm3' => 'decimal:2',
        'kt' => 'decimal:2'
    ];
}
