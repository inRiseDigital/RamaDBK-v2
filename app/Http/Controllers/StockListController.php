<?php

namespace App\Http\Controllers;

use App\Models\VehicleDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class StockListController extends Controller
{
    /**
     * Display a listing of vehicles in stock.
     */
    public function index(Request $request): Response
    {
        return $this->listVehicles($request, 'all');
    }

    /**
     * Display discounted vehicles (price < default_price or special_price set).
     */
    public function discounted(Request $request): Response
    {
        return $this->listVehicles($request, 'discounted');
    }

    /**
     * Display Aucnet vehicles.
     */
    public function aucnet(Request $request): Response
    {
        return $this->listVehicles($request, 'aucnet');
    }

    /**
     * Shared listing logic for all inventory types.
     */
    private function listVehicles(Request $request, string $inventoryType): Response
    {
        $filterParams = $request->only([
            'type', 'make', 'fuel', 'transmission', 'steering', 'drive', 'search', 'page',
        ]);
        $cacheKey = "stock_list:{$inventoryType}:" . md5(json_encode($filterParams));

        $data = Cache::remember($cacheKey, now()->addMinutes(10), function () use ($request, $inventoryType) {
            $query = VehicleDetail::with(['pictures' => function ($q) {
                    $q->select('stock_no', 'picture_id', 'picture_name', 'picture_large', 'img_permission');
                }])
                ->select('stock_no', 'veh_title', 'make', 'model', 'grade', 'price', 'default_price', 'actual_price', 'special_price', 'mileage', 'fuel', 'transmission', 'type', 'drive', 'stock_number', 'create_date', 'engine_cc', 'mfg_year', 'ext_color', 'wd')
                ->where('display', 1)
                ->where('status', 1);

            // Apply inventory type filters
            if ($inventoryType === 'discounted') {
                $query->where(function ($q) {
                    $q->where(function ($sub) {
                        $sub->whereColumn('price', '<', 'default_price')
                            ->where('default_price', '>', 0)
                            ->where('price', '>', 0);
                    })->orWhere(function ($sub) {
                        $sub->whereNotNull('special_price')
                            ->where('special_price', '>', 0);
                    });
                });
            } elseif ($inventoryType === 'aucnet') {
                $query->where(function ($q) {
                    $q->where('is_auction', 1)
                      ->orWhere('data_source', 'like', '%aucnet%')
                      ->orWhere('auction_system', 'like', '%aucnet%')
                      ->orWhere(function ($sub) {
                          $sub->whereNotNull('auction_name')
                              ->where('auction_name', '!=', '');
                      });
                });
            }

            if ($request->filled('type')) {
                $query->where('type', $request->type);
            }

            if ($request->filled('make')) {
                $query->where('make', $request->make);
            }

            if ($request->filled('fuel')) {
                $query->where('fuel', $request->fuel);
            }

            if ($request->filled('transmission')) {
                $query->where('transmission', $request->transmission);
            }

            if ($request->filled('steering')) {
                $query->where('drive', $request->steering);
            }

            if ($request->filled('drive')) {
                $query->where('wd', $request->drive);
            }

            if ($request->filled('search')) {
                $search = $request->search;
                $query->where(function($q) use ($search) {
                    $q->where('veh_title', 'like', "%{$search}%")
                      ->orWhere('make', 'like', "%{$search}%")
                      ->orWhere('model', 'like', "%{$search}%")
                      ->orWhere('stock_number', 'like', "%{$search}%");
                });
            }

            $paginated = $query->orderBy('create_date', 'desc')
                ->paginate(30);

            return [
                'vehicles' => $paginated->through(function($vehicle) {
                    return [
                        'id' => $vehicle->stock_no,
                        'name' => $vehicle->veh_title ?: trim("{$vehicle->make} {$vehicle->model} {$vehicle->grade}"),
                        'image' => $vehicle->primary_image_url,
                        'price' => (float) $vehicle->price,
                        'originalPrice' => (float) ($vehicle->default_price ?: $vehicle->actual_price),
                        'specialPrice' => (float) ($vehicle->special_price ?? 0),
                        'mileage' => number_format($vehicle->mileage ?? 0) . ' KM',
                        'fuel' => $vehicle->fuel,
                        'transmission' => $vehicle->transmission,
                        'make' => $vehicle->make,
                        'model' => $vehicle->model,
                        'type' => $vehicle->type,
                        'year' => $vehicle->mfg_year,
                        'engineCc' => $vehicle->engine_cc ? number_format($vehicle->engine_cc) . ' cc' : null,
                        'color' => $vehicle->ext_color,
                        'steering' => $vehicle->drive,
                        'stockNo' => $vehicle->stock_number,
                    ];
                })->items(),
                'pagination' => [
                    'current_page' => $paginated->currentPage(),
                    'last_page' => $paginated->lastPage(),
                    'per_page' => $paginated->perPage(),
                    'total' => $paginated->total(),
                ],
            ];
        });

        // Route name map for building filter URLs
        $routeMap = [
            'all' => 'stock-list',
            'discounted' => 'stock-list.discounted',
            'aucnet' => 'stock-list.aucnet',
        ];

        // Filter options — cached independently for 1 hour
        $filterOptionsCacheKey = "stock_filter_options:{$inventoryType}";
        $filterOptions = Cache::remember($filterOptionsCacheKey, now()->addHours(1), function () use ($inventoryType) {
            $baseQuery = DB::table('vehicle_details')
                ->where('display', 1)->where('status', 1);

            if ($inventoryType === 'discounted') {
                $baseQuery->where(function ($q) {
                    $q->where(function ($sub) {
                        $sub->whereColumn('price', '<', 'default_price')
                            ->where('default_price', '>', 0)
                            ->where('price', '>', 0);
                    })->orWhere(function ($sub) {
                        $sub->whereNotNull('special_price')
                            ->where('special_price', '>', 0);
                    });
                });
            } elseif ($inventoryType === 'aucnet') {
                $baseQuery->where(function ($q) {
                    $q->where('is_auction', 1)
                      ->orWhere('data_source', 'like', '%aucnet%')
                      ->orWhere('auction_system', 'like', '%aucnet%')
                      ->orWhere(function ($sub) {
                          $sub->whereNotNull('auction_name')
                              ->where('auction_name', '!=', '');
                      });
                });
            }

            $rows = $baseQuery->select('make', 'type', 'fuel', 'transmission', 'drive')->get();

            return [
                'makes' => $rows->pluck('make')->filter(fn($v) => $v !== null && $v !== '')->unique()->sort()->values()->toArray(),
                'types' => $rows->pluck('type')->filter(fn($v) => $v !== null && $v !== '')->unique()->sort()->values()->toArray(),
                'fuels' => $rows->pluck('fuel')->filter(fn($v) => $v !== null && $v !== '')->unique()->sort()->values()->toArray(),
                'transmissions' => $rows->pluck('transmission')->filter(fn($v) => $v !== null && $v !== '')->unique()->sort()->values()->toArray(),
                'steerings' => $rows->pluck('drive')->filter(fn($v) => $v !== null && $v !== '')->unique()->sort()->values()->toArray(),
            ];
        });

        $data['filterOptions'] = $filterOptions;
        $data['inventoryType'] = $inventoryType;
        $data['routeName'] = $routeMap[$inventoryType];
        $data['filters'] = [
            'type' => $request->type ?? '',
            'make' => $request->make ?? '',
            'fuel' => $request->fuel ?? '',
            'transmission' => $request->transmission ?? '',
            'steering' => $request->steering ?? '',
            'drive' => $request->drive ?? '',
            'search' => $request->search ?? '',
        ];

        return Inertia::render('StockList/StockList', $data);
    }

    /**
     * Display the specified vehicle.
     */
    public function show(int $id): Response
    {
        $vehicleData = Cache::remember("vehicle:{$id}", now()->addHours(1), function () use ($id) {
            $vehicle = VehicleDetail::with(['pictures' => function ($q) {
                    $q->select('stock_no', 'picture_id', 'picture_name', 'picture_large', 'img_permission');
                }])
                ->select('stock_no', 'veh_title', 'make', 'model', 'grade', 'price', 'default_price', 'actual_price', 'mileage', 'fuel', 'transmission', 'drive', 'engine_cc', 'reg_year', 'reg_month', 'mfg_year', 'mfg_month', 'description', 'ext_color', 'stock_number', 'seat_capacity', 'doors')
                ->where('stock_no', $id)->firstOrFail();

            $images = $vehicle->image_urls;
            $primaryImage = $images[0] ?? null;

            return [
                'id' => $vehicle->stock_no,
                'name' => $vehicle->veh_title ?: trim("{$vehicle->make} {$vehicle->model} {$vehicle->grade}"),
                'brand' => $vehicle->make,
                'model' => $vehicle->model,
                'mileage' => number_format($vehicle->mileage ?? 0) . ' km',
                'transmission' => $vehicle->transmission,
                'driveSide' => $vehicle->drive,
                'grade' => $vehicle->grade,
                'engine' => number_format($vehicle->engine_cc ?? 0) . ' cc',
                'regYear' => $vehicle->reg_year && $vehicle->reg_month
                    ? "{$vehicle->reg_year}/{$vehicle->reg_month}"
                    : ($vehicle->mfg_year && $vehicle->mfg_month ? "{$vehicle->mfg_year}/{$vehicle->mfg_month}" : null),
                'price' => (float) $vehicle->price,
                'originalPrice' => (float) ($vehicle->default_price ?: $vehicle->actual_price ?: $vehicle->price),
                'rating' => 4,
                'image' => $primaryImage,
                'images' => $images,
                'description' => $vehicle->description,
                'colors' => $vehicle->ext_color ? [$vehicle->ext_color] : [],
                'stockNo' => $vehicle->stock_number,
                'fuel' => $vehicle->fuel,
                'seats' => (string) $vehicle->seat_capacity,
                'drive' => $vehicle->drive,
                'doors' => (string) $vehicle->doors,
            ];
        });

        return Inertia::render('StockList/stockView', [
            'vehicleData' => $vehicleData,
        ]);
    }
}
