<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\SparePartsController;
use App\Http\Controllers\StockListController;
use App\Models\VehicleDetail;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    $baseSelect = ['stock_no', 'veh_title', 'make', 'model', 'grade', 'price', 'default_price', 'actual_price', 'special_price', 'mileage', 'fuel', 'transmission', 'create_date'];

    $mapVehicle = function ($vehicle) {
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
        ];
    };

    $withPictures = function ($q) {
        $q->select('stock_no', 'picture_id', 'picture_name', 'picture_large', 'img_permission');
    };

    $hasImages = function ($query) {
        $query->selectRaw('1')
            ->from('pictures')
            ->whereColumn('pictures.stock_no', 'vehicle_details.stock_no')
            ->where('pictures.img_permission', 1);
    };

    $featuredVehicles = Cache::remember('featured_vehicles', now()->addMinutes(30), function () use ($baseSelect, $mapVehicle, $withPictures, $hasImages) {
        return VehicleDetail::with(['pictures' => $withPictures])
            ->select($baseSelect)
            ->where('display', 1)
            ->where('status', 1)
            ->whereExists($hasImages)
            ->orderBy('create_date', 'desc')
            ->limit(8)
            ->get()
            ->map($mapVehicle)
            ->values()
            ->toArray();
    });

    $auctionVehicles = Cache::remember('auction_vehicles_home', now()->addMinutes(30), function () use ($baseSelect, $mapVehicle, $withPictures, $hasImages) {
        return VehicleDetail::with(['pictures' => $withPictures])
            ->select($baseSelect)
            ->where('display', 1)
            ->where('status', 1)
            ->whereExists($hasImages)
            ->where(function ($q) {
                $q->where('is_auction', 1)
                  ->orWhere('data_source', 'like', '%aucnet%')
                  ->orWhere('auction_system', 'like', '%aucnet%')
                  ->orWhere(function ($sub) {
                      $sub->whereNotNull('auction_name')
                          ->where('auction_name', '!=', '');
                  });
            })
            ->orderBy('create_date', 'desc')
            ->limit(8)
            ->get()
            ->map($mapVehicle)
            ->values()
            ->toArray();
    });

    $discountedVehicles = Cache::remember('discounted_vehicles_home', now()->addMinutes(30), function () use ($baseSelect, $mapVehicle, $withPictures, $hasImages) {
        return VehicleDetail::with(['pictures' => $withPictures])
            ->select($baseSelect)
            ->where('display', 1)
            ->where('status', 1)
            ->whereExists($hasImages)
            ->where(function ($q) {
                $q->where(function ($sub) {
                    $sub->whereColumn('price', '<', 'default_price')
                        ->where('default_price', '>', 0)
                        ->where('price', '>', 0);
                })->orWhere(function ($sub) {
                    $sub->whereNotNull('special_price')
                        ->where('special_price', '>', 0);
                });
            })
            ->orderBy('create_date', 'desc')
            ->limit(8)
            ->get()
            ->map($mapVehicle)
            ->values()
            ->toArray();
    });

    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
        'featuredVehicles' => $featuredVehicles,
        'auctionVehicles' => $auctionVehicles,
        'discountedVehicles' => $discountedVehicles,
    ]);
})->name('home');

// Payment Routes
Route::get('/payments', [PaymentController::class, 'index'])->name('payment');
Route::get('/overseas-remittance', [PaymentController::class, 'overseas'])->name('overseas-remittance');
Route::get('/local-remittance', [PaymentController::class, 'local'])->name('local-remittance');

// Spare Parts Routes
Route::get('/spare-parts', [SparePartsController::class, 'index'])->name('spare-parts');
Route::get('/sparepart/{id}', [SparePartsController::class, 'show'])->name('spare-part.show');
Route::get('/sparepart-category/{categoryId}', [SparePartsController::class, 'category'])->name('spare-parts-category');

// Stock List Routes
Route::get('/stock-list', [StockListController::class, 'index'])->name('stock-list');
Route::get('/stock-list/discounted', [StockListController::class, 'discounted'])->name('stock-list.discounted');
Route::get('/stock-list/aucnet', [StockListController::class, 'aucnet'])->name('stock-list.aucnet');
Route::get('/vehicle/{id}', [StockListController::class, 'show'])->name('vehicle.show');

// Services Routes
Route::get('/services', [ServicesController::class, 'index'])->name('services');
Route::post('/services', [ServicesController::class, 'store'])->name('services.store');

// Contact Routes
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// Chat Route
Route::get('/chat', function () {
    return Inertia::render('chatbot/Chat');
})->name('chat');

require __DIR__.'/settings.php';

// 404 Fallback Route - Must be at the end
Route::fallback(function () {
    return Inertia::render('errors/NotFound');
});
