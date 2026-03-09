<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Picture extends Model
{
    protected $table = 'pictures';

    public $incrementing = false;
    public $timestamps = false;

    protected $fillable = [
        'stock_no',
        'picture_id',
        'picture_name',
        'picture_large',
        'img_permission',
        'flg',
        'img_for_jctjson',
        'imgmove_aws_date',
        'pic_copy_date',
        'img_restored',
        'aws_copied',
        'data_source',
        'upload_date',
    ];

    protected $casts = [
        'img_permission' => 'integer',
        'flg' => 'integer',
        'img_for_jctjson' => 'integer',
        'img_restored' => 'integer',
        'aws_copied' => 'integer',
    ];

    public function vehicle(): BelongsTo
    {
        return $this->belongsTo(VehicleDetail::class, 'stock_no', 'stock_no');
    }

    public function getUrlAttribute(): string
    {
        $baseUrl = config('app.image_base_url', 'https://www.ramadbk.com/VIMGS');
        return rtrim($baseUrl, '/') . '/medium/' . $this->picture_large;
    }

    public function getThumbnailUrlAttribute(): string
    {
        $baseUrl = config('app.image_base_url', 'https://www.ramadbk.com/VIMGS');
        return rtrim($baseUrl, '/') . '/thumb/' . $this->picture_name;
    }
}
