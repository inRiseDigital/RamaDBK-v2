<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AucImage extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'auc_image';

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
        'image_id',
        'image_name',
        'image_large',
        'auc_permission',
        'flg',
        'img_for_jctjson'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'stock_no' => 'integer',
        'auc_permission' => 'boolean',
        'flg' => 'integer',
        'img_for_jctjson' => 'boolean'
    ];

    /**
     * Get the image that owns this AucImage.
     */
    public function image()
    {
        return $this->belongsTo(Image::class, 'image_id');
    }
}
