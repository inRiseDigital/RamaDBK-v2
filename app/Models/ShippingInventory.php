<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShippingInventory extends Model
{
    

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'shipping_inventory';

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
        's_no',
        'stock_no',
        'stock_number',
        'chassis_no',
        'invoice_no',
        'shipping_status',
        'shipping_status_value',
        'shipping_line',
        'vessel_name',
        'voyage_number',
        'ETD_date',
        'ETA_date',
        'Remark_inner_cargo',
        'Remark_internal_mng',
        'cancel_date',
        'cancel_reason',
        'is_authorized',
        'autherize_remark',
        'shipment_type',
        'shipment_remark',
        'bill_of_lading_date',
        'bill_of_lading_number',
        'bill_of_lading_charge',
        'auth_timestamp',
        'shipping_remark_last_modified_time',
        'shipping_remark_create_time',
        'BL_sent',
        'BL_received',
        'bill_sent_date',
        'amount_due',
        're_shipped_date',
        're_shipped_remark',
        'BL_new_sent',
        'invoice_date',
        'person_in_charge',
        'person_in_charge_name',
        'is_domestic',
        'status',
        'booking_ref',
        'our_ref',
        'cut_date',
        'forwarder',
        'forwarder_name',
        'remark',
        'request_date',
        'voyage_no',
        'request_status',
        'applied_date',
        'inspection_date',
        'inspection_type_id',
        'ref_no',
        'fname',
        'port_to_id',
        'port_to',
        'to_country',
        'to_country_id',
        'lc_bank',
        'freight_charges',
        'received_amount',
        'auction_charge',
        'custom_clearaence',
        'fwt_charge',
        'inspection_charge',
        'other_charge',
        'transportation_fee',
        '_freight',
        'sailing_date',
        'SO_status',
        'auction_name',
        'ext_color',
        'length',
        'width',
        'height',
        'm3',
        'make',
        'weight',
        'yard_id',
        'yard_id_value',
        'mfg_year',
        'maker',
        'type',
        'subtype',
        'is_updated',
        'member_id',
        'autherize_status',
        'inspection_type_name',
        'veh_status',
        'purchase_date',
        'requested_reason',
        'courier_date',
        'docate_no',
        'courier_remark',
        'cc_id',
        'courier_company_name',
        'invoice_curr',
        'jpy_ex_rate',
        'total',
        'payment_allocated',
        'inspection_status',
        'certificate_issued_date',
        'display',
        'requested_by_id',
        'requested_by',
        'transport_company',
        'yard_date',
        'masho_application_date',
        'from_port_id',
        'from_port',
        'from_country_id',
        'from_country',
        'expire_date',
        'issue_date',
        'latest_date_shipment',
        'memo',
        'yard_in_status',
        'ask_inspection',
        'ask_tentative_booking',
        'make_shipping_order',
        'mark_as_shipped',
        'actual_etd',
        'actual_eta',
        'case_no',
        'booking_order',
        'yard_photo_count',
        'uploaded_docs',
        'is_inspection_asked',
        'export_masho_uploaded_date',
        'is_repair',
        'repair_no',
        'request_by',
        'end_by',
        'location',
        'repair_remark',
        'estimate_cost',
        'actual_cost',
        'vendor',
        'vendor_id',
        'repair_status',
        'repair_invoice_no',
        'consumption_tax',
        'repair_invoice_date',
        'repair_invoice_exrate',
        'upzipfile',
        'send_to_ship_pending',
        'copy_to_inspection',
        'hs_code',
        'send_to_si',
        'auction_transportation_cost',
        'inspection_charges_cost',
        'auction_fee_cost',
        'road_tax_cost',
        'recycle_fee_cost',
        'auction_listing_fee_cost',
        'other_charges_cost',
        'inland_transportation_cost',
        'repair_charges_cost',
        'fwt_charges_cost',
        'spare_parts_cost',
        'freight_charges_cost',
        'shipping_charges_cost',
        'vanning_charges_cost',
        'operating_cost',
        'insurance_cost',
        'dismantle_charges_cost',
        'consumption_tax_cost',
        'brokers_commision_cost',
        'claim_refund_cost',
        'storage_fee_cost',
        'domestic_transport_fee_cost',
        'amendment_charge_cost',
        'photo_cost',
        'lashing_cost',
        'go_down_cost',
        'washing_cost',
        'radiation_inspection_cost',
        'bank_charges_cost',
        'bl_bank_acceptance_fee_cost',
        'engine_check_charges_cost',
        'bl_issue_date',
        'bl_status',
        'bl_collector',
        'bl_remark',
        'inspection_result',
        'inspection_remarks',
        'lc_number',
        'repair_invoice_created_by',
        'repair_invoice_created_by_id',
        'repair_invoice_created_on',
        'mail_send_date',
        'inspection_mail_send_date',
        'si_mail_send_date',
        'booking_mail_send_date',
        'office_charges_cost',
        'actual_cost_rp',
        'consumption_tax_rp',
        'so_date',
        'memo_forwarder',
        'final_destination',
        'ms_status',
        'ms_status_date',
        'ms_name',
        'ms_original',
        'ms_memo',
        'model_id',
        'model_name',
        'engine_no',
        'free_space',
        'bl_issue_place',
        'bl_memo',
        'bl_color',
        'isp_memo',
        'inland_del_memo',
        'document_date',
        'document_memo',
        'bl_status_date',
        'bl_name',
        'bl_copy',
        'bl_amend',
        'inspection_yard',
        'bl_body_remarks',
        'so_no',
        'to_do',
        'to_do_rank',
        'amount',
        'gross_weight_of_veh',
        'seating_capacity',
        'fuel',
        'usednew',
        'shipping_mark',
        'mileage',
        'c_no',
        'notify',
        'notify2',
        'book_confirm_mail_sale',
        'so_system_input',
        'book_agent',
        'in_stock',
        'bl_copy_sent_sale',
        'bl_system_input',
        'frt_paid',
        'bl_amend_select',
        'mbl_no',
        'lc_no',
        'mbl_surrendered',
        'shipper',
        'first_reg_month',
        'first_reg_year',
        'engine_cc',
        'bl_issued',
        'remarks',
        'country',
        'country_id',
        'shipping_line_id',
        'shipment_type_value',
        'bl_amend_date',
        'bl_amend_before',
        'bl_amend_after',
        'freight_value',
        'sales_person',
        'price',
        'consigneeid',
        'buyer_name',
        'inspection_completed_date',
        'repair_completed_date',
        'inspection_mail_apply_send_date',
        'book_status_date',
        'inspection_status_date',
        'bl_consignee_country_id',
        'bl_consignee_country',
        'inspection_company_id',
        'inspection_company_name',
        'model_code',
        'ms_check',
        'ed',
        'dec_col',
        'dec_col_date',
        'rename_col',
        'so_cut',
        'delv_check',
        'delv_date'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        's_no' => 'integer',
        'stock_no' => 'integer',
        'shipping_status' => 'integer',
        'ETD_date' => 'date',
        'ETA_date' => 'date',
        'cancel_date' => 'date',
        'is_authorized' => 'boolean',
        'shipment_type' => 'boolean',
        'bill_of_lading_date' => 'date',
        'bill_of_lading_charge' => 'integer',
        'auth_timestamp' => 'date',
        'shipping_remark_last_modified_time' => 'datetime',
        'shipping_remark_create_time' => 'datetime',
        'bill_sent_date' => 'date',
        're_shipped_date' => 'date',
        'invoice_date' => 'date',
        'person_in_charge' => 'integer',
        'is_domestic' => 'boolean',
        'status' => 'boolean',
        'cut_date' => 'date',
        'forwarder' => 'integer',
        'request_date' => 'date',
        'request_status' => 'integer',
        'applied_date' => 'date',
        'inspection_date' => 'date',
        'inspection_type_id' => 'integer',
        'port_to_id' => 'integer',
        'to_country_id' => 'integer',
        'freight_charges' => 'decimal:2',
        'received_amount' => 'decimal:2',
        'auction_charge' => 'decimal:2',
        'custom_clearaence' => 'decimal:2',
        'fwt_charge' => 'decimal:2',
        'inspection_charge' => 'decimal:2',
        'other_charge' => 'decimal:2',
        'transportation_fee' => 'decimal:2',
        'sailing_date' => 'date',
        'SO_status' => 'integer',
        'length' => 'integer',
        'width' => 'integer',
        'height' => 'integer',
        'm3' => 'decimal:2',
        'weight' => 'integer',
        'yard_id' => 'integer',
        'mfg_year' => 'integer',
        'is_updated' => 'boolean',
        'member_id' => 'integer',
        'purchase_date' => 'date',
        'courier_date' => 'date',
        'cc_id' => 'integer',
        'jpy_ex_rate' => 'integer',
        'total' => 'decimal:2',
        'payment_allocated' => 'decimal:2',
        'inspection_status' => 'integer',
        'certificate_issued_date' => 'date',
        'display' => 'boolean',
        'requested_by_id' => 'integer',
        'yard_date' => 'date',
        'masho_application_date' => 'date',
        'from_port_id' => 'integer',
        'from_country_id' => 'integer',
        'expire_date' => 'date',
        'issue_date' => 'date',
        'latest_date_shipment' => 'date',
        'yard_in_status' => 'date',
        'ask_inspection' => 'date',
        'ask_tentative_booking' => 'date',
        'make_shipping_order' => 'date',
        'mark_as_shipped' => 'date',
        'actual_etd' => 'date',
        'actual_eta' => 'date',
        'yard_photo_count' => 'integer',
        'is_inspection_asked' => 'boolean',
        'export_masho_uploaded_date' => 'date',
        'is_repair' => 'boolean',
        'request_by' => 'date',
        'end_by' => 'date',
        'estimate_cost' => 'decimal:2',
        'actual_cost' => 'decimal:2',
        'vendor_id' => 'integer',
        'consumption_tax' => 'decimal:2',
        'repair_invoice_date' => 'date',
        'send_to_ship_pending' => 'boolean',
        'copy_to_inspection' => 'boolean',
        'send_to_si' => 'boolean',
        'auction_transportation_cost' => 'decimal:2',
        'inspection_charges_cost' => 'decimal:2',
        'auction_fee_cost' => 'decimal:2',
        'road_tax_cost' => 'decimal:2',
        'recycle_fee_cost' => 'decimal:2',
        'auction_listing_fee_cost' => 'decimal:2',
        'other_charges_cost' => 'decimal:2',
        'inland_transportation_cost' => 'decimal:2',
        'repair_charges_cost' => 'decimal:2',
        'fwt_charges_cost' => 'decimal:2',
        'spare_parts_cost' => 'decimal:2',
        'freight_charges_cost' => 'decimal:2',
        'shipping_charges_cost' => 'decimal:2',
        'vanning_charges_cost' => 'decimal:2',
        'operating_cost' => 'decimal:2',
        'insurance_cost' => 'decimal:2',
        'dismantle_charges_cost' => 'decimal:2',
        'consumption_tax_cost' => 'decimal:2',
        'brokers_commision_cost' => 'decimal:2',
        'claim_refund_cost' => 'decimal:2',
        'storage_fee_cost' => 'decimal:2',
        'domestic_transport_fee_cost' => 'decimal:2',
        'amendment_charge_cost' => 'decimal:2',
        'photo_cost' => 'decimal:2',
        'lashing_cost' => 'decimal:2',
        'go_down_cost' => 'decimal:2',
        'washing_cost' => 'decimal:2',
        'radiation_inspection_cost' => 'decimal:2',
        'bank_charges_cost' => 'decimal:2',
        'bl_bank_acceptance_fee_cost' => 'decimal:2',
        'engine_check_charges_cost' => 'decimal:2',
        'bl_issue_date' => 'date',
        'repair_invoice_created_by' => 'integer',
        'repair_invoice_created_on' => 'datetime',
        'mail_send_date' => 'date',
        'inspection_mail_send_date' => 'date',
        'si_mail_send_date' => 'date',
        'booking_mail_send_date' => 'date',
        'office_charges_cost' => 'decimal:2',
        'actual_cost_rp' => 'decimal:2',
        'consumption_tax_rp' => 'decimal:2',
        'so_date' => 'date',
        'ms_status_date' => 'date',
        'model_id' => 'integer',
        'document_date' => 'date',
        'bl_status_date' => 'date',
        'bl_amend' => 'boolean',
        'amount' => 'integer',
        'book_confirm_mail_sale' => 'integer',
        'so_system_input' => 'integer',
        'in_stock' => 'integer',
        'bl_copy_sent_sale' => 'integer',
        'bl_system_input' => 'integer',
        'frt_paid' => 'integer',
        'mbl_surrendered' => 'integer',
        'first_reg_month' => 'integer',
        'first_reg_year' => 'integer',
        'engine_cc' => 'integer',
        'country_id' => 'integer',
        'shipping_line_id' => 'integer',
        'bl_amend_date' => 'date',
        'inspection_completed_date' => 'date',
        'repair_completed_date' => 'date',
        'inspection_mail_apply_send_date' => 'date',
        'book_status_date' => 'date',
        'inspection_status_date' => 'date',
        'bl_consignee_country_id' => 'integer',
        'inspection_company_id' => 'integer',
        'ms_check' => 'integer',
        'ed' => 'integer',
        'dec_col' => 'integer',
        'dec_col_date' => 'date',
        'rename_col' => 'integer',
        'so_cut' => 'date',
        'delv_check' => 'integer',
        'delv_date' => 'date'
    ];

    /**
     * Get the inspection_type that owns this ShippingInventory.
     */
    public function inspection_type()
    {
        return $this->belongsTo(InspectionType::class, 'inspection_type_id');
    }

    /**
     * Get the port_to that owns this ShippingInventory.
     */
    public function port_to()
    {
        return $this->belongsTo(PortTo::class, 'port_to_id');
    }

    /**
     * Get the to_country that owns this ShippingInventory.
     */
    public function to_country()
    {
        return $this->belongsTo(ToCountry::class, 'to_country_id');
    }

    /**
     * Get the yard that owns this ShippingInventory.
     */
    public function yard()
    {
        return $this->belongsTo(Yard::class, 'yard_id');
    }

    /**
     * Get the member that owns this ShippingInventory.
     */
    public function member()
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    /**
     * Get the cc that owns this ShippingInventory.
     */
    public function cc()
    {
        return $this->belongsTo(Cc::class, 'cc_id');
    }

    /**
     * Get the requested_by that owns this ShippingInventory.
     */
    public function requested_by()
    {
        return $this->belongsTo(RequestedBy::class, 'requested_by_id');
    }

    /**
     * Get the from_port that owns this ShippingInventory.
     */
    public function from_port()
    {
        return $this->belongsTo(FromPort::class, 'from_port_id');
    }

    /**
     * Get the from_country that owns this ShippingInventory.
     */
    public function from_country()
    {
        return $this->belongsTo(FromCountry::class, 'from_country_id');
    }

    /**
     * Get the vendor that owns this ShippingInventory.
     */
    public function vendor()
    {
        return $this->belongsTo(Vendor::class, 'vendor_id');
    }

    /**
     * Get the repair_invoice_created_by that owns this ShippingInventory.
     */
    public function repair_invoice_created_by()
    {
        return $this->belongsTo(RepairInvoiceCreatedBy::class, 'repair_invoice_created_by_id');
    }

    /**
     * Get the model that owns this ShippingInventory.
     */
    public function model()
    {
        return $this->belongsTo(VehicleModel::class, 'model_id');
    }

    /**
     * Get the country that owns this ShippingInventory.
     */
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    /**
     * Get the shipping_line that owns this ShippingInventory.
     */
    public function shipping_line()
    {
        return $this->belongsTo(ShippingLine::class, 'shipping_line_id');
    }

    /**
     * Get the bl_consignee_country that owns this ShippingInventory.
     */
    public function bl_consignee_country()
    {
        return $this->belongsTo(BlConsigneeCountry::class, 'bl_consignee_country_id');
    }

    /**
     * Get the inspection_company that owns this ShippingInventory.
     */
    public function inspection_company()
    {
        return $this->belongsTo(InspectionCompany::class, 'inspection_company_id');
    }
}
