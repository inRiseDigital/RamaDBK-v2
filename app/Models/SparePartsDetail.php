<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SparePartsDetail extends Model
{
    protected $table = 'spare_parts_details';

    public $timestamps = false;

    protected $primaryKey = 's_no';

    protected $fillable = [
        's_no',
        'stock_no',
        'part_number',
        'description',
        'keyword_tag',
        'main_category_id',
        'sub_category_id',
    ];

    /**
     * Get the main category.
     */
    public function mainCategory(): BelongsTo
    {
        return $this->belongsTo(MainCategory::class, 'main_category_id', 'main_category_id');
    }

    /**
     * Get the sub category.
     */
    public function subCategory(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class, 'sub_category_id', 'sub_category_id');
    }

    /**
     * Get the linked vehicle detail (for price, title, etc.).
     */
    public function vehicle(): BelongsTo
    {
        return $this->belongsTo(VehicleDetail::class, 'stock_no', 'stock_no');
    }

    /**
     * Get all pictures for this spare part via stock_no.
     */
    public function pictures(): HasMany
    {
        return $this->hasMany(Picture::class, 'stock_no', 'stock_no')
            ->where('img_permission', 1)
            ->orderBy('picture_id');
    }

    /**
     * Get the primary image URL.
     * Uses relationLoaded() to avoid N+1 queries when pictures aren't eager loaded.
     */
    public function getPrimaryImageUrlAttribute(): ?string
    {
        if (!$this->relationLoaded('pictures')) {
            return null;
        }
        $picture = $this->pictures->first();
        return $picture?->url;
    }

    /**
     * Get all image URLs.
     * Uses relationLoaded() to avoid N+1 queries when pictures aren't eager loaded.
     */
    public function getImageUrlsAttribute(): array
    {
        if (!$this->relationLoaded('pictures')) {
            return [];
        }
        return $this->pictures->map(fn($pic) => $pic->url)->toArray();
    }
}
