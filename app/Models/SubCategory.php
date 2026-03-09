<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SubCategory extends Model
{
    protected $table = 'sub_category';

    public $timestamps = false;

    protected $primaryKey = 'sub_category_id';

    protected $fillable = [
        'sub_category_id',
        'sub_category_name',
        'main_category_id',
    ];

    /**
     * Get the main category that owns the sub category.
     */
    public function mainCategory(): BelongsTo
    {
        return $this->belongsTo(MainCategory::class, 'main_category_id', 'main_category_id');
    }

    /**
     * Get the spare parts for the sub category.
     */
    public function spareParts(): HasMany
    {
        return $this->hasMany(SparePartsDetail::class, 'sub_category_id', 'sub_category_id');
    }
}
