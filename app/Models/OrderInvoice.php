<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderInvoice extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'order_invoice_tbl';

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
        'invoice_no',
        'quotation_id',
        'performa_id',
        'lc_doc_no',
        'lc_date',
        'lc_bank',
        'marks_nos',
        'shipment_type',
        'ship_company',
        'ship_date',
        'comment_mid',
        'comment_bot',
        'invoice_date',
        'invoice_exp_days',
        'status',
        'invoice_type',
        'mail_status',
        'jpy_ex_rate',
        'adjust_due_amount',
        'due_adjust_date',
        'shipping_remark',
        'cc_id',
        'docate_no',
        'date',
        'remark',
        'commission_calc_on',
        'cust_id',
        'inv_curr',
        'inv_total_amt',
        'is_inv_spare',
        'inv_chassis_no',
        'cancel_date',
        'last_matching_cron',
        'matching_alert',
        'commission_calc_checked',
        'export_certificate_no',
        'declaration_date',
        'invoice_group_id',
        'document_release',
        'manager_id',
        'courier_sent'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'shipment_type' => 'integer',
        'invoice_date' => 'date',
        'invoice_exp_days' => 'date',
        'status' => 'boolean',
        'invoice_type' => 'boolean',
        'mail_status' => 'boolean',
        'jpy_ex_rate' => 'integer',
        'adjust_due_amount' => 'decimal:2',
        'due_adjust_date' => 'datetime',
        'cc_id' => 'integer',
        'date' => 'date',
        'commission_calc_on' => 'date',
        'cust_id' => 'integer',
        'inv_total_amt' => 'decimal:2',
        'cancel_date' => 'datetime',
        'last_matching_cron' => 'datetime',
        'matching_alert' => 'boolean',
        'commission_calc_checked' => 'date',
        'declaration_date' => 'date',
        'document_release' => 'boolean',
        'courier_sent' => 'boolean'
    ];

    /**
     * Get the quotation that owns this OrderInvoice.
     */
    public function quotation()
    {
        return $this->belongsTo(Quotation::class, 'quotation_id');
    }

    /**
     * Get the performa that owns this OrderInvoice.
     */
    public function performa()
    {
        return $this->belongsTo(Performa::class, 'performa_id');
    }

    /**
     * Get the cc that owns this OrderInvoice.
     */
    public function cc()
    {
        return $this->belongsTo(Cc::class, 'cc_id');
    }

    /**
     * Get the cust that owns this OrderInvoice.
     */
    public function cust()
    {
        return $this->belongsTo(Cust::class, 'cust_id');
    }

    /**
     * Get the invoice_group that owns this OrderInvoice.
     */
    public function invoice_group()
    {
        return $this->belongsTo(InvoiceGroup::class, 'invoice_group_id');
    }

    /**
     * Get the manager that owns this OrderInvoice.
     */
    public function manager()
    {
        return $this->belongsTo(Manager::class, 'manager_id');
    }
}
