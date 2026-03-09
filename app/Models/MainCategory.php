<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MainCategory extends Model
{
    protected $table = 'main_category';

    public $timestamps = false;

    protected $primaryKey = 'main_category_id';

    protected $fillable = [
        'main_category_id',
        'main_category_name',
    ];

    /**
     * Get the spare parts for the main category.
     */
    public function spareParts(): HasMany
    {
        return $this->hasMany(SparePartsDetail::class, 'main_category_id', 'main_category_id');
    }

    /**
     * Get the sub categories for the main category.
     */
    public function subCategories(): HasMany
    {
        return $this->hasMany(SubCategory::class, 'main_category_id', 'main_category_id');
    }
}
