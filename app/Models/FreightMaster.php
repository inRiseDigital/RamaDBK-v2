<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FreightMaster extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'freight_mastertbl';

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
        'frId',
        'fctryId',
        'fportId',
        'f_port',
        'tctryId',
        'tportId',
        't_port',
        'smId',
        'ratePerM3',
        'm3r1a',
        'm3r1b',
        'm3r2a',
        'm3r2b',
        'm3r3a',
        'm3r3b',
        'm3r4a',
        'm3r4b',
        'm3r5a',
        'm3r5b',
        'm3r6a',
        'm3r6b',
        'rateM3r1',
        'rateM3r2',
        'rateM3r3',
        'rateM3r4',
        'rateM3r5',
        'rateM3r6',
        'ratePerKt',
        'ktr1a',
        'ktr1b',
        'ktr2a',
        'ktr2b',
        'ktr3a',
        'ktr3b',
        'ktr4a',
        'ktr4b',
        'ktr5a',
        'ktr5b',
        'ktr6a',
        'ktr6b',
        'rateKtr1',
        'rateKtr2',
        'rateKtr3',
        'rateKtr4',
        'rateKtr5',
        'rateKtr6',
        'con20fM3',
        'con20fUnit',
        'con20fRate',
        'con40fM3',
        'con40fUnit',
        'con40fRate',
        'calculateM3',
        'calculateKt',
        'fos_id',
        'shipment_from',
        'shipment_to',
        'comment',
        'additional_cost',
        'shipper',
        'fright_buffer',
        'no_of_days',
        'cont_20',
        'cont_40',
        'cont_40_cube',
        'default_calculation',
        'ship_company',
        'from_country',
        'to_country',
        'date_of_update',
        'validity'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'frId' => 'integer',
        'fctryId' => 'integer',
        'fportId' => 'integer',
        'tctryId' => 'integer',
        'tportId' => 'integer',
        'smId' => 'integer',
        'ratePerM3' => 'decimal:2',
        'm3r1a' => 'decimal:2',
        'm3r1b' => 'decimal:2',
        'm3r2a' => 'decimal:2',
        'm3r2b' => 'decimal:2',
        'm3r3a' => 'decimal:2',
        'm3r3b' => 'decimal:2',
        'm3r4a' => 'decimal:2',
        'm3r4b' => 'decimal:2',
        'm3r5a' => 'decimal:2',
        'm3r5b' => 'decimal:2',
        'm3r6a' => 'decimal:2',
        'm3r6b' => 'decimal:2',
        'rateM3r1' => 'decimal:2',
        'rateM3r2' => 'decimal:2',
        'rateM3r3' => 'decimal:2',
        'rateM3r4' => 'decimal:2',
        'rateM3r5' => 'decimal:2',
        'rateM3r6' => 'decimal:2',
        'ratePerKt' => 'decimal:2',
        'ktr1a' => 'decimal:2',
        'ktr1b' => 'decimal:2',
        'ktr2a' => 'decimal:2',
        'ktr2b' => 'decimal:2',
        'ktr3a' => 'decimal:2',
        'ktr3b' => 'decimal:2',
        'ktr4a' => 'decimal:2',
        'ktr4b' => 'decimal:2',
        'ktr5a' => 'decimal:2',
        'ktr5b' => 'decimal:2',
        'ktr6a' => 'decimal:2',
        'ktr6b' => 'decimal:2',
        'rateKtr1' => 'decimal:2',
        'rateKtr2' => 'decimal:2',
        'rateKtr3' => 'decimal:2',
        'rateKtr4' => 'decimal:2',
        'rateKtr5' => 'decimal:2',
        'rateKtr6' => 'decimal:2',
        'con20fM3' => 'decimal:2',
        'con20fUnit' => 'decimal:2',
        'con20fRate' => 'decimal:2',
        'con40fM3' => 'decimal:2',
        'con40fUnit' => 'decimal:2',
        'con40fRate' => 'decimal:2',
        'fos_id' => 'integer',
        'shipment_from' => 'integer',
        'shipment_to' => 'integer',
        'additional_cost' => 'decimal:2',
        'fright_buffer' => 'decimal:2',
        'cont_20' => 'decimal:2',
        'cont_40' => 'decimal:2',
        'cont_40_cube' => 'decimal:2',
        'default_calculation' => 'boolean',
        'date_of_update' => 'date',
        'validity' => 'date'
    ];

    /**
     * Get the fos that owns this FreightMaster.
     */
    public function fos()
    {
        return $this->belongsTo(Fo::class, 'fos_id');
    }
}
