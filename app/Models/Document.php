<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'documents';

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
        'document_id',
        'document_name',
        'document_title',
        'doc_permission',
        'flg',
        'uniq_code',
        'doc_master_id',
        'doc_restored',
        'imgmove_aws_date',
        'aws_copied',
        'upload_date'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'doc_permission' => 'boolean',
        'flg' => 'boolean',
        'doc_master_id' => 'integer',
        'doc_restored' => 'integer',
        'imgmove_aws_date' => 'datetime',
        'aws_copied' => 'integer',
        'upload_date' => 'datetime'
    ];

    /**
     * Get the document that owns this Document.
     */
    public function document()
    {
        return $this->belongsTo(Document::class, 'document_id');
    }

    /**
     * Get the doc_master that owns this Document.
     */
    public function doc_master()
    {
        return $this->belongsTo(Doc::class, 'doc_master_id');
    }
}
