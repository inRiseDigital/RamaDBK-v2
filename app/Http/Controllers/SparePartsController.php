<?php

namespace App\Http\Controllers;

use App\Models\SparePartsDetail;
use App\Models\MainCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class SparePartsController extends Controller
{
    private function cleanUtf8(?string $value): string
    {
        if ($value === null) return '';
        return mb_convert_encoding($value, 'UTF-8', 'UTF-8');
    }

    private function cleanOrNull(?string $value): ?string
    {
        if ($value === null || trim($value) === '') return null;
        return mb_convert_encoding(trim($value), 'UTF-8', 'UTF-8');
    }

    /**
     * Display a listing of spare parts.
     */
    public function index(Request $request): Response
    {
        $filters = $request->only(['search', 'main_category_id', 'sub_category_id', 'page']);
        $cacheKey = 'spare_parts:' . md5(json_encode($filters));

        $data = Cache::remember($cacheKey, now()->addMinutes(10), function () use ($request) {
            $query = SparePartsDetail::with([
                'mainCategory',
                'subCategory',
                'pictures' => fn($q) => $q->select('stock_no', 'picture_id', 'picture_name', 'picture_large', 'img_permission')->limit(1),
                'vehicle' => fn($q) => $q->select('stock_no', 'veh_title', 'price', 'default_price', 'actual_price'),
            ]);

            if ($request->filled('search')) {
                $search = $request->search;
                $query->where(function($q) use ($search) {
                    $q->where('description', 'like', "%{$search}%")
                      ->orWhere('part_number', 'like', "%{$search}%")
                      ->orWhere('keyword_tag', 'like', "%{$search}%");
                });
            }

            if ($request->filled('main_category_id')) {
                $query->where('main_category_id', $request->main_category_id);
            }

            if ($request->filled('sub_category_id')) {
                $query->where('sub_category_id', $request->sub_category_id);
            }

            $paginated = $query->orderBy('s_no', 'desc')->paginate(24);

            $spareParts = $paginated->through(function($part) {
                $price = (float) ($part->vehicle?->price ?? 0);
                $name = $this->cleanUtf8($part->vehicle?->veh_title ?? $part->description ?? $part->part_number ?? '');

                return [
                    'id' => $part->s_no,
                    'stockNo' => $part->stock_no,
                    'image' => $part->primary_image_url,
                    'name' => $name,
                    'partNumber' => $this->cleanUtf8($part->part_number),
                    'description' => mb_substr($this->cleanUtf8($part->description ?? ''), 0, 120),
                    'category' => $this->cleanUtf8($part->mainCategory?->main_category_name ?? ''),
                    'subCategory' => $this->cleanUtf8($part->subCategory?->sub_category_name ?? ''),
                    'keywords' => $this->cleanUtf8($part->keyword_tag ?? ''),
                    'price' => $price,
                ];
            })->items();

            return [
                'spareParts' => $spareParts,
                'pagination' => [
                    'current_page' => $paginated->currentPage(),
                    'last_page' => $paginated->lastPage(),
                    'per_page' => $paginated->perPage(),
                    'total' => $paginated->total(),
                ],
            ];
        });

        // Categories cached separately
        $categories = Cache::remember('spare_parts_categories', now()->addHours(2), function () {
            return MainCategory::withCount('spareParts')
                ->get()
                ->filter(fn($category) => $category->spare_parts_count > 0)
                ->map(function($category) {
                    return [
                        'id' => $category->main_category_id,
                        'name' => $this->cleanUtf8($category->main_category_name),
                        'count' => $category->spare_parts_count,
                    ];
                })->values()->toArray();
        });

        // Sub-categories for the selected main category
        $subCategories = [];
        if ($request->filled('main_category_id')) {
            $subCategories = Cache::remember("spare_sub_cats:{$request->main_category_id}", now()->addHours(2), function () use ($request) {
                return \App\Models\SubCategory::where('main_category_id', $request->main_category_id)
                    ->withCount('spareParts')
                    ->get()
                    ->filter(fn($sc) => $sc->spare_parts_count > 0)
                    ->map(fn($sc) => [
                        'id' => $sc->sub_category_id,
                        'name' => $this->cleanUtf8($sc->sub_category_name),
                        'count' => $sc->spare_parts_count,
                    ])->values()->toArray();
            });
        }

        $data['categories'] = $categories;
        $data['subCategories'] = $subCategories;
        $data['filters'] = [
            'search' => $request->search ?? '',
            'main_category_id' => $request->main_category_id ?? '',
            'sub_category_id' => $request->sub_category_id ?? '',
        ];

        return Inertia::render('SpareParts/SpareParts', $data);
    }

    /**
     * Display the specified spare part.
     */
    public function show(int $id): Response
    {
        $partData = Cache::remember("spare_part:{$id}", now()->addHours(1), function () use ($id) {
            $part = SparePartsDetail::with([
                'mainCategory',
                'subCategory',
                'pictures',
                'vehicle' => fn($q) => $q->select('stock_no', 'veh_title', 'make', 'model', 'price', 'default_price', 'actual_price', 'mileage', 'fuel', 'transmission', 'engine_cc', 'mfg_year', 'ext_color'),
            ])->where('s_no', $id)->firstOrFail();

            $price = (float) ($part->vehicle?->price ?? 0);

            $v = $part->vehicle;
            $name = $this->cleanOrNull($v?->veh_title) ?? $this->cleanOrNull($part->description) ?? $this->cleanOrNull($part->part_number) ?? '';

            return [
                'id' => $part->s_no,
                'stockNo' => $part->stock_no,
                'name' => $name,
                'partNumber' => $this->cleanOrNull($part->part_number) ?? '',
                'description' => $this->cleanOrNull($part->description) ?? '',
                'category' => $this->cleanOrNull($part->mainCategory?->main_category_name) ?? '',
                'subCategory' => $this->cleanOrNull($part->subCategory?->sub_category_name) ?? '',
                'keywords' => $this->cleanOrNull($part->keyword_tag) ?? '',
                'price' => $price,
                'images' => $part->image_urls,
                'image' => $part->primary_image_url,
                // From vehicle_details
                'make' => $this->cleanOrNull($v?->make),
                'model' => $this->cleanOrNull($v?->model),
                'mileage' => $v?->mileage ? number_format($v->mileage) . ' km' : null,
                'fuel' => $this->cleanOrNull($v?->fuel),
                'transmission' => $this->cleanOrNull($v?->transmission),
                'engineCc' => $v?->engine_cc ? number_format($v->engine_cc) . ' cc' : null,
                'year' => $v?->mfg_year ?: null,
                'color' => $this->cleanOrNull($v?->ext_color),
            ];
        });

        return Inertia::render('SpareParts/spareparts-view', [
            'partData' => $partData,
        ]);
    }

    /**
     * Display spare parts by category.
     */
    public function category(int $categoryId): Response
    {
        $categoryData = Cache::remember("spare_parts_category:{$categoryId}", now()->addMinutes(30), function () use ($categoryId) {
            $category = MainCategory::where('main_category_id', $categoryId)->firstOrFail();

            $parts = SparePartsDetail::with([
                'subCategory',
                'pictures' => fn($q) => $q->select('stock_no', 'picture_id', 'picture_name', 'picture_large', 'img_permission')->limit(1),
                'vehicle' => fn($q) => $q->select('stock_no', 'veh_title', 'price'),
            ])
                ->where('main_category_id', $categoryId)
                ->orderBy('s_no', 'desc')
                ->get()
                ->map(function($part) {
                    return [
                        'id' => $part->s_no,
                        'name' => $this->cleanUtf8($part->vehicle?->veh_title ?? $part->description ?? $part->part_number ?? ''),
                        'image' => $part->primary_image_url,
                        'subCategory' => $this->cleanUtf8($part->subCategory?->sub_category_name ?? ''),
                        'description' => mb_substr($this->cleanUtf8($part->description ?? ''), 0, 100),
                        'price' => (float) ($part->vehicle?->price ?? 0),
                    ];
                })->toArray();

            return [
                'id' => $category->main_category_id,
                'categoryName' => $this->cleanUtf8($category->main_category_name),
                'parts' => $parts,
            ];
        });

        return Inertia::render('SparePartsCategory/SparePartsCategory', [
            'categoryData' => $categoryData,
        ]);
    }
}
