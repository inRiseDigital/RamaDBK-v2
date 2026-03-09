<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JpnOrder extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'jpn_orders';

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
        'order_id',
        'is_import',
        'import_code_no',
        'order_date',
        'payment_type',
        'order_no',
        'types',
        'currency',
        'ex_rate',
        'from_country',
        'from_port',
        'to_country',
        'to_port',
        'to_destination',
        'due_date',
        'pay_term_id',
        'term',
        'export_cert_no',
        'export_insp_no',
        'bank_id',
        'admin_comment',
        'buyer_comment',
        'vessel_name',
        'etd_date',
        'eta_date',
        'voyage_no',
        'ship_method',
        'vanning_no',
        'seal_no',
        'shipping_remark',
        'shipment_remark',
        'create_by',
        'show_exp_cert',
        'show_insp_no',
        'show_vessel',
        'show_etd',
        'show_eta',
        'show_voyage',
        'show_method',
        'show_vanning',
        'show_seal_no',
        'show_ship_remark',
        'show_shipment_remark',
        'show_admncmt',
        'show_all_bankShip',
        'show_shippingComp',
        'shippingName',
        'order_ref',
        'is_switch',
        'buyer_id',
        'ci_year',
        'ci_proforma_order_no',
        'ci_proforma_order_date',
        'ci_proforma_order_text',
        'ci_proforma_order_text_update',
        'co_year',
        'booking_request_date',
        'status',
        'marine_remark',
        'insurance_company',
        'insurance_company_id',
        'date_of_policy',
        'insured_amount',
        'ci_beneficiary_certificate',
        'ci_text',
        'validity_lc',
        'payment_trams',
        'ci_title',
        'ci_lc_number',
        'ci_lc_in_date',
        'ci_lc_issued_by',
        'negoId',
        'coupon_amount',
        'coupon_id',
        'points_amount',
        'points_id',
        'create_by_name',
        'shippingCompanyName',
        'container_no',
        'is_coupon_request',
        'coupon_request_date',
        'is_consignee_update_req',
        'consignee_update_req_date',
        'is_point_assign',
        'paidAmount',
        'invAmount',
        'is_point_request',
        'is_point_confirmed',
        'insp_id',
        'insp',
        'fd_country_id',
        'fd_country',
        'fd_city',
        'extend_due_date',
        'cc_id',
        'cc_name',
        'cc_date',
        'cc_track_no',
        'cc_track_url',
        'coupon_request_amount',
        'tlt',
        'name',
        'company',
        'address',
        'city',
        'country',
        'email',
        'tel_1',
        'tel_2',
        'same_as',
        'con_tlt',
        'con_name',
        'con_company',
        'con_address',
        'con_city',
        'con_country',
        'state',
        'con_email',
        'con_tel_1',
        'con_tel_2',
        'ship_company',
        'ship_address1',
        'ship_address2',
        'ship_city',
        'ship_state',
        'ship_country',
        'consstate',
        'ship_zip',
        'ship_telephone_1',
        'ship_fax',
        'ship_website',
        'ship_email',
        'zip',
        'conszip',
        'total_order_price',
        'unit',
        'tax_percent',
        'tax_amount',
        'gtotal'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'order_id' => 'integer',
        'is_import' => 'boolean',
        'order_date' => 'date',
        'payment_type' => 'boolean',
        'order_no' => 'integer',
        'ex_rate' => 'decimal:2',
        'from_country' => 'integer',
        'from_port' => 'integer',
        'to_country' => 'integer',
        'to_port' => 'integer',
        'to_destination' => 'integer',
        'due_date' => 'date',
        'bank_id' => 'integer',
        'etd_date' => 'date',
        'eta_date' => 'date',
        'create_by' => 'integer',
        'show_exp_cert' => 'boolean',
        'show_insp_no' => 'boolean',
        'show_vessel' => 'boolean',
        'show_etd' => 'boolean',
        'show_eta' => 'boolean',
        'show_voyage' => 'boolean',
        'show_method' => 'boolean',
        'show_vanning' => 'boolean',
        'show_seal_no' => 'boolean',
        'show_ship_remark' => 'boolean',
        'show_shipment_remark' => 'boolean',
        'show_admncmt' => 'boolean',
        'show_all_bankShip' => 'boolean',
        'show_shippingComp' => 'boolean',
        'shippingName' => 'integer',
        'order_ref' => 'integer',
        'is_switch' => 'boolean',
        'buyer_id' => 'integer',
        'ci_year' => 'integer',
        'ci_proforma_order_date' => 'date',
        'ci_proforma_order_text_update' => 'boolean',
        'co_year' => 'integer',
        'booking_request_date' => 'date',
        'insurance_company_id' => 'integer',
        'date_of_policy' => 'date',
        'insured_amount' => 'decimal:2',
        'ci_lc_in_date' => 'date',
        'negoId' => 'integer',
        'coupon_amount' => 'decimal:2',
        'coupon_id' => 'integer',
        'points_amount' => 'decimal:2',
        'points_id' => 'integer',
        'is_coupon_request' => 'boolean',
        'coupon_request_date' => 'datetime',
        'is_consignee_update_req' => 'boolean',
        'consignee_update_req_date' => 'datetime',
        'is_point_assign' => 'boolean',
        'paidAmount' => 'decimal:2',
        'invAmount' => 'decimal:2',
        'is_point_request' => 'integer',
        'is_point_confirmed' => 'integer',
        'insp_id' => 'integer',
        'fd_country_id' => 'integer',
        'extend_due_date' => 'date',
        'cc_id' => 'integer',
        'cc_date' => 'date',
        'coupon_request_amount' => 'decimal:2',
        'total_order_price' => 'decimal:2',
        'unit' => 'integer',
        'tax_percent' => 'decimal:2',
        'tax_amount' => 'decimal:2',
        'gtotal' => 'decimal:2'
    ];

    /**
     * Get the order that owns this JpnOrder.
     */
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    /**
     * Get the pay_term that owns this JpnOrder.
     */
    public function pay_term()
    {
        return $this->belongsTo(PayTerm::class, 'pay_term_id');
    }

    /**
     * Get the bank that owns this JpnOrder.
     */
    public function bank()
    {
        return $this->belongsTo(Bank::class, 'bank_id');
    }

    /**
     * Get the buyer that owns this JpnOrder.
     */
    public function buyer()
    {
        return $this->belongsTo(Buyer::class, 'buyer_id');
    }

    /**
     * Get the insurance_company that owns this JpnOrder.
     */
    public function insurance_company()
    {
        return $this->belongsTo(InsuranceCompany::class, 'insurance_company_id');
    }

    /**
     * Get the coupon that owns this JpnOrder.
     */
    public function coupon()
    {
        return $this->belongsTo(Coupon::class, 'coupon_id');
    }

    /**
     * Get the points that owns this JpnOrder.
     */
    public function points()
    {
        return $this->belongsTo(Point::class, 'points_id');
    }

    /**
     * Get the insp that owns this JpnOrder.
     */
    public function insp()
    {
        return $this->belongsTo(Insp::class, 'insp_id');
    }

    /**
     * Get the fd_country that owns this JpnOrder.
     */
    public function fd_country()
    {
        return $this->belongsTo(FdCountry::class, 'fd_country_id');
    }

    /**
     * Get the cc that owns this JpnOrder.
     */
    public function cc()
    {
        return $this->belongsTo(Cc::class, 'cc_id');
    }
}
