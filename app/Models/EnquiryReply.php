<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EnquiryReply extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'enquiry_reply_details';

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
        'inq_id',
        'reply_message',
        'file_name',
        'create_date',
        'reply_by'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'inq_id' => 'integer',
        'create_date' => 'datetime',
        'reply_by' => 'integer'
    ];

    /**
     * Get the inq that owns this EnquiryReply.
     */
    public function inq()
    {
        return $this->belongsTo(Inq::class, 'inq_id');
    }
}
