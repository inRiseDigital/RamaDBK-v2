<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactAddress extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'contact_address';

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
        'title',
        'company',
        'contact_person',
        'address_1',
        'address_2',
        'city',
        'state',
        'country',
        'zip',
        'telephone',
        'fax',
        'mobile',
        'email',
        'email_s',
        'website',
        'website_s',
        'office_timmings',
        'office_off',
        'comment',
        'smtp_host',
        'smtp_port',
        'smtp_username',
        'smtp_password',
        'is_main',
        'priority',
        'status'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'smtp_port' => 'integer',
        'is_main' => 'integer',
        'priority' => 'integer',
        'status' => 'integer'
    ];

}
