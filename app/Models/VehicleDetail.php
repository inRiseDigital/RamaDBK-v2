<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class VehicleDetail extends Model
{
    protected $table = 'vehicle_details';

    protected $primaryKey = 'stock_no';

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
        'user_profile_id',
        'stock_number',
        'default_price',
        'price',
        'price_update_date',
        'actual_price',
        'commission',
        'buying_price',
        'consumption_tax',
        'status',
        'display',
        'location_id',
        'location',
        'port_id',
        'port',
        'new_used',
        'yard_id',
        'type_id',
        'subtype_id',
        'make_id',
        'maker_id',
        'model_id',
        'type',
        'subtype',
        'make',
        'maker',
        'model',
        'grade',
        'mfg_year',
        'mfg_month',
        'chassis_no',
        'mileage',
        'engine_cc',
        'drive',
        'grade_ext',
        'grade_int',
        'auction_grade',
        'doors',
        'seat_capacity',
        'fuel',
        'transmission',
        'model_code',
        'length',
        'width',
        'height',
        'weight',
        'm3',
        'purchase_date',
        'extend_date',
        'supplier_id',
        'spare_supplier_id',
        'purchased_by',
        'requested_by',
        'requested_reason',
        'show_auc',
        'create_date',
        'update_date',
        'int_color',
        'ext_color',
        'wd',
        'other_option',
        'start_date',
        'close_date',
        'data_source',
        'confirm_time',
        'data_sites',
        'veh_title',
        'accident',
        'vin_number',
        'ext_info_pos',
        'ext_info_pos_2',
        'ext_info_neg',
        'sellArea',
        'is_tcv',
        'export_area_id',
        'dead_stock',
        'is_spare',
        'watch_list_status',
        'market_price',
        'market_price_date',
        'customer_id',
        'engine_type',
        'model_description',
        'engine_description',
        'transport_comp_id',
        'cost_type_status',
        'videoFor',
        'youtube_url',
        'is_auction',
        'auction_system',
        'lot_no',
        'hall_name',
        'hall_location',
        'input_date',
        'jays_lk',
        'total_price',
        'price_jpy',
        'quantity',
        'currency',
        'part_number',
        'description',
        'keyword_tag',
        'main_category_id',
        'sub_category_id',
        'sort_order',
        'sold_shipped_30',
        'auction_name',
        'auction_charge',
        'is_green_paper',
        'purchased_by_value',
        'requested_by_value',
        'yard_id_value',
        'is_completed',
        'country',
        'special_price',
        'yard_date',
        'transport_company_id',
        'transport_company',
        'remarks',
        'auction',
        'bid_number',
        'auction_date',
        'auc_import',
        'img_copy',
        'hit_counter',
        'pics',
        'auc_pics',
        'enquiry_counter',
        'customer_name',
        'is_import',
        'mail_sent',
        'checked_date',
        'yard_photo_count',
        'uploaded_docs',
        'is_updated',
        'check_spare_key',
        'check_sd_card',
        'remove_hard_copy',
        'transport_comment',
        're_auction',
        'gp_mail_sent',
        'gp_sent_date',
        'is_repair',
        'is_repair_invoice',
        'create_by',
        'create_by_name',
        'update_by',
        'update_by_name',
        'agasta_stock_no',
        'agasta_stock_img',
        'to_be_delete',
        'agasta_commission',
        'agasta_price',
        'office',
        'ass_ids',
        'ass_vals',
        'd_stock_number',
        'dealer_ref_no',
        'd_stock_no',
        'sync_as',
        'reg_year',
        'reg_month',
        'customer_canceled',
        'production_year',
        'production_month',
        'shaken_date',
        'send_to_recycle',
        'autotax_date_of_apply',
        'autotax_apply',
        'autotax_refund_amt',
        'autotax_rcv_date',
        'autotax_completed',
        'insurance_date_of_apply',
        'insurance_apply',
        'insurance_refund_amt',
        'insurance_rcv_date',
        'insurance_completed',
        'radiation_date_of_apply',
        'radiation_apply',
        'radiation_refund_amt',
        'radiation_rcv_date',
        'radiation_completed',
        'non_radiation',
        'bando_stock',
        'autotax_fax_auction',
        'autotax_application_poa',
        'autotax_certificate_seal',
        'cert_autotax_payment',
        'liability_insurance',
        'date_of_entry',
        'numbers_of_months_remaining',
        'date_of_expiry',
        'radiation_insu_no',
        'radiation_insu_company',
        'radiation_insu_reg_no',
        'aucnet_img_status',
        'pic_status',
        'admin_comment',
        'end_date',
        'arai_img_status',
        'arai_img_check_date',
        'bl_sent_copy',
        'good_value',
        'img_restored'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'stock_no' => 'integer',
        'user_profile_id' => 'integer',
        'default_price' => 'decimal:2',
        'price' => 'decimal:2',
        'price_update_date' => 'date',
        'actual_price' => 'decimal:2',
        'commission' => 'decimal:2',
        'buying_price' => 'decimal:2',
        'status' => 'integer',
        'display' => 'boolean',
        'location_id' => 'integer',
        'port_id' => 'integer',
        'new_used' => 'boolean',
        'yard_id' => 'integer',
        'type_id' => 'integer',
        'subtype_id' => 'integer',
        'make_id' => 'integer',
        'maker_id' => 'integer',
        'model_id' => 'integer',
        'mfg_year' => 'integer',
        'mfg_month' => 'integer',
        'mileage' => 'integer',
        'engine_cc' => 'integer',
        'length' => 'integer',
        'width' => 'integer',
        'height' => 'integer',
        'weight' => 'integer',
        'm3' => 'decimal:2',
        'purchase_date' => 'date',
        'extend_date' => 'date',
        'supplier_id' => 'integer',
        'spare_supplier_id' => 'integer',
        'purchased_by' => 'integer',
        'requested_by' => 'integer',
        'requested_reason' => 'boolean',
        'show_auc' => 'boolean',
        'create_date' => 'datetime',
        'update_date' => 'datetime',
        'start_date' => 'datetime',
        'close_date' => 'datetime',
        'confirm_time' => 'datetime',
        'accident' => 'boolean',
        'ext_info_pos_2' => 'integer',
        'is_tcv' => 'boolean',
        'watch_list_status' => 'boolean',
        'market_price' => 'decimal:2',
        'market_price_date' => 'date',
        'customer_id' => 'integer',
        'transport_comp_id' => 'integer',
        'cost_type_status' => 'boolean',
        'is_auction' => 'boolean',
        'input_date' => 'datetime',
        'jays_lk' => 'boolean',
        'total_price' => 'decimal:2',
        'price_jpy' => 'decimal:2',
        'quantity' => 'integer',
        'currency' => 'integer',
        'main_category_id' => 'integer',
        'sub_category_id' => 'integer',
        'sort_order' => 'integer',
        'sold_shipped_30' => 'boolean',
        'auction_charge' => 'decimal:2',
        'is_green_paper' => 'boolean',
        'is_completed' => 'boolean',
        'special_price' => 'decimal:2',
        'yard_date' => 'date',
        'transport_company_id' => 'integer',
        'auction_date' => 'date',
        'auc_import' => 'boolean',
        'img_copy' => 'boolean',
        'hit_counter' => 'integer',
        'enquiry_counter' => 'integer',
        'is_import' => 'boolean',
        'mail_sent' => 'boolean',
        'checked_date' => 'date',
        'yard_photo_count' => 'integer',
        'is_updated' => 'boolean',
        'check_spare_key' => 'boolean',
        'check_sd_card' => 'boolean',
        'remove_hard_copy' => 'boolean',
        're_auction' => 'boolean',
        'gp_mail_sent' => 'boolean',
        'gp_sent_date' => 'datetime',
        'is_repair' => 'boolean',
        'is_repair_invoice' => 'boolean',
        'create_by' => 'integer',
        'update_by' => 'integer',
        'agasta_stock_no' => 'integer',
        'to_be_delete' => 'boolean',
        'agasta_commission' => 'decimal:2',
        'agasta_price' => 'decimal:2',
        'd_stock_no' => 'integer',
        'reg_year' => 'integer',
        'reg_month' => 'integer',
        'customer_canceled' => 'boolean',
        'production_year' => 'integer',
        'production_month' => 'integer',
        'shaken_date' => 'date',
        'send_to_recycle' => 'boolean',
        'autotax_date_of_apply' => 'date',
        'autotax_apply' => 'boolean',
        'autotax_refund_amt' => 'integer',
        'autotax_rcv_date' => 'date',
        'autotax_completed' => 'boolean',
        'insurance_date_of_apply' => 'date',
        'insurance_apply' => 'boolean',
        'insurance_refund_amt' => 'integer',
        'insurance_rcv_date' => 'date',
        'insurance_completed' => 'boolean',
        'radiation_date_of_apply' => 'date',
        'radiation_apply' => 'boolean',
        'radiation_refund_amt' => 'integer',
        'radiation_rcv_date' => 'date',
        'radiation_completed' => 'boolean',
        'non_radiation' => 'boolean',
        'bando_stock' => 'boolean',
        'autotax_fax_auction' => 'integer',
        'autotax_application_poa' => 'integer',
        'autotax_certificate_seal' => 'integer',
        'cert_autotax_payment' => 'integer',
        'liability_insurance' => 'boolean',
        'date_of_entry' => 'date',
        'numbers_of_months_remaining' => 'integer',
        'date_of_expiry' => 'date',
        'aucnet_img_status' => 'boolean',
        'pic_status' => 'boolean',
        'end_date' => 'datetime',
        'arai_img_status' => 'integer',
        'arai_img_check_date' => 'date',
        'bl_sent_copy' => 'boolean',
        'good_value' => 'integer',
        'img_restored' => 'integer'
    ];

    /**
     * Get the user_profile that owns this VehicleDetail.
     */
    public function user_profile()
    {
        return $this->belongsTo(UserProfile::class, 'user_profile_id');
    }

    /**
     * Get the location that owns this VehicleDetail.
     */
    public function location()
    {
        return $this->belongsTo(Location::class, 'location_id');
    }

    /**
     * Get the port that owns this VehicleDetail.
     */
    public function port()
    {
        return $this->belongsTo(Port::class, 'port_id');
    }

    /**
     * Get the yard that owns this VehicleDetail.
     */
    public function yard()
    {
        return $this->belongsTo(Yard::class, 'yard_id');
    }

    /**
     * Get the type that owns this VehicleDetail.
     */
    public function type()
    {
        return $this->belongsTo(Type::class, 'type_id');
    }

    /**
     * Get the subtype that owns this VehicleDetail.
     */
    public function subtype()
    {
        return $this->belongsTo(Subtype::class, 'subtype_id');
    }

    /**
     * Get the make that owns this VehicleDetail.
     */
    public function make()
    {
        return $this->belongsTo(Make::class, 'make_id');
    }

    /**
     * Get the maker that owns this VehicleDetail.
     */
    public function maker()
    {
        return $this->belongsTo(Maker::class, 'maker_id');
    }

    /**
     * Get the model that owns this VehicleDetail.
     */
    public function model()
    {
        return $this->belongsTo(VehicleModel::class, 'model_id');
    }

    /**
     * Get the supplier that owns this VehicleDetail.
     */
    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id');
    }

    /**
     * Get the spare_supplier that owns this VehicleDetail.
     */
    public function spare_supplier()
    {
        return $this->belongsTo(SpareSupplier::class, 'spare_supplier_id');
    }

    /**
     * Get the export_area that owns this VehicleDetail.
     */
    public function export_area()
    {
        return $this->belongsTo(ExportArea::class, 'export_area_id');
    }

    /**
     * Get the customer that owns this VehicleDetail.
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    /**
     * Get the transport_comp that owns this VehicleDetail.
     */
    public function transport_comp()
    {
        return $this->belongsTo(TransportComp::class, 'transport_comp_id');
    }

    /**
     * Get the main_category that owns this VehicleDetail.
     */
    public function main_category()
    {
        return $this->belongsTo(MainCategory::class, 'main_category_id');
    }

    /**
     * Get the sub_category that owns this VehicleDetail.
     */
    public function sub_category()
    {
        return $this->belongsTo(SubCategory::class, 'sub_category_id');
    }

    /**
     * Get the transport_company that owns this VehicleDetail.
     */
    public function transport_company()
    {
        return $this->belongsTo(TransportCompany::class, 'transport_company_id');
    }

    /**
     * Get all pictures for this vehicle.
     */
    public function pictures(): HasMany
    {
        return $this->hasMany(Picture::class, 'stock_no', 'stock_no')
            ->where('img_permission', 1)
            ->orderBy('picture_id');
    }

    /**
     * Get the primary image URL from the pictures table.
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
     * Get all image URLs from the pictures table.
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
