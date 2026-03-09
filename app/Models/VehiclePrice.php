<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VehiclePrice extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'vehicle_price';

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
        'price_local'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'price_local' => 'decimal:2'
    ];

}
