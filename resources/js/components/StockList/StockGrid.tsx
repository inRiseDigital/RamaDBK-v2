import { useState, memo, useCallback } from 'react';
import { router } from '@inertiajs/react';

interface Vehicle {
  id: number;
  name: string;
  image: string | null;
  price: number;
  originalPrice: number;
  specialPrice?: number;
  mileage: string;
  fuel: string;
  transmission: string;
  make: string;
  model: string;
  type: string;
  year: number | null;
  engineCc: string | null;
  color: string | null;
  steering: string | null;
  stockNo: string | null;
}

const NoImagePlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800">
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
);

const VehicleImage = memo(function VehicleImage({ src, alt }: { src: string | null; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <NoImagePlaceholder />;

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
    />
  );
});

const VehicleCard = memo(function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const handleClick = useCallback(() => {
    router.visit(`/vehicle/${vehicle.id}`);
  }, [vehicle.id]);

  return (
    <div
      onClick={handleClick}
      className="flex flex-col rounded-xl overflow-hidden cursor-pointer border border-white/15 hover:border-white/30 transition-all duration-200 hover:shadow-lg hover:shadow-black/20"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Image */}
      <div className="relative h-48">
        <VehicleImage src={vehicle.image} alt={vehicle.name} />
        {vehicle.year && (
          <span className="absolute top-2 left-2 px-2 py-0.5 text-xs font-semibold bg-black/60 backdrop-blur-sm text-white rounded-md">
            {vehicle.year}
          </span>
        )}
        {vehicle.type && (
          <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-medium bg-red-600/80 backdrop-blur-sm text-white rounded-md uppercase">
            {vehicle.type}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2 leading-tight">
          {vehicle.name}
        </h3>
        {vehicle.stockNo && (
          <p className="text-[11px] text-gray-400 mb-2 font-mono">Stock# {vehicle.stockNo}</p>
        )}
        {(() => {
          const discountedPrice = (vehicle.specialPrice && vehicle.specialPrice > 0) ? vehicle.specialPrice : null;
          const isDiscounted = discountedPrice || (vehicle.originalPrice > 0 && vehicle.price > 0 && vehicle.originalPrice > vehicle.price);
          const displayPrice = discountedPrice || vehicle.price;
          const oldPrice = discountedPrice ? vehicle.price : vehicle.originalPrice;

          return (
            <div className="flex items-baseline gap-2 mb-3 flex-wrap">
              {displayPrice > 0 ? (
                <>
                  <span className={`text-lg font-bold ${isDiscounted ? 'text-green-400' : 'text-white'}`}>
                    ¥{displayPrice.toLocaleString()}
                  </span>
                  {isDiscounted && oldPrice > 0 && (
                    <span className="text-xs text-gray-500 line-through">
                      ¥{oldPrice.toLocaleString()}
                    </span>
                  )}
                  {isDiscounted && oldPrice > 0 && oldPrice > displayPrice && (
                    <span className="text-[10px] font-semibold text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded">
                      -{Math.round(((oldPrice - displayPrice) / oldPrice) * 100)}%
                    </span>
                  )}
                </>
              ) : (
                <span className="text-sm text-gray-400">Contact for price</span>
              )}
            </div>
          );
        })()}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs mb-3">
          {vehicle.mileage && (
            <div className="flex items-center gap-1.5 text-gray-300">
              <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="truncate">{vehicle.mileage}</span>
            </div>
          )}
          {vehicle.engineCc && (
            <div className="flex items-center gap-1.5 text-gray-300">
              <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate">{vehicle.engineCc}</span>
            </div>
          )}
          {vehicle.fuel && (
            <div className="flex items-center gap-1.5 text-gray-300">
              <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="truncate">{vehicle.fuel}</span>
            </div>
          )}
          {vehicle.transmission && (
            <div className="flex items-center gap-1.5 text-gray-300">
              <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="truncate">{vehicle.transmission}</span>
            </div>
          )}
          {vehicle.steering && (
            <div className="flex items-center gap-1.5 text-gray-300">
              <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <circle cx="12" cy="12" r="3" strokeWidth={2} />
                <path strokeLinecap="round" strokeWidth={2} d="M12 2v7M12 15v7M2 12h7M15 12h7" />
              </svg>
              <span className="truncate">{vehicle.steering}</span>
            </div>
          )}
          {vehicle.color && (
            <div className="flex items-center gap-1.5 text-gray-300">
              <svg className="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <span className="truncate">{vehicle.color}</span>
            </div>
          )}
        </div>
        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className="w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded-lg text-sm font-medium transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
});

const StockGrid = memo(function StockGrid({ vehicles }: { vehicles: Vehicle[] }) {
  if (vehicles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p className="text-lg">No vehicles found</p>
        <p className="text-sm mt-1">Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
});

export default StockGrid;
