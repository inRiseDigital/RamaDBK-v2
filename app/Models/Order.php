<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'orders_view';

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
        'invoice_type',
        'order_id',
        'ses_id',
        'member_id',
        'customer_id',
        'company',
        'fname',
        'lname',
        'address_1',
        'address_2',
        'city',
        'state',
        'zip',
        'country',
        'email_1',
        'email_2',
        'telephone_1',
        'telephone_2',
        'mobile',
        'fax',
        'is_consignee',
        'n_name',
        'n_company',
        'n_add1',
        'n_add2',
        'n_city',
        'n_state',
        'n_zip',
        'n_country',
        'n_email',
        'n_telephone',
        'n_fax',
        'comments',
        'question',
        'create_date',
        'ip',
        'quotation_status',
        'order_status',
        'status',
        'mail_status',
        'order_type',
        'bank_type',
        'is_invoice',
        'send_mail_status',
        'b_company',
        'b_fname',
        'b_address_1',
        'b_address_2',
        'b_city',
        'b_zip',
        'b_state',
        'b_country',
        'b_email_1',
        'b_telephone_1',
        'b_fax',
        'use_in_invoice'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'invoice_type' => 'boolean',
        'member_id' => 'integer',
        'is_consignee' => 'integer',
        'create_date' => 'datetime',
        'quotation_status' => 'integer',
        'order_status' => 'integer',
        'status' => 'integer',
        'mail_status' => 'boolean',
        'is_invoice' => 'boolean',
        'send_mail_status' => 'date'
    ];

    /**
     * Get the order that owns this Order.
     */
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    /**
     * Get the member that owns this Order.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    /**
     * Get the customer that owns this Order.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
}
