import { router } from '@inertiajs/react';
import React, { useRef, useState, useCallback, memo } from 'react';

interface Vehicle {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  specialPrice?: number;
  mileage: string;
  fuel: string;
  transmission: string;
}

interface Props {
  vehicles: Vehicle[];
  title?: string;
  viewAllLink?: string;
  viewAllLabel?: string;
}

const NoImagePlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800">
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
);

function FeaturedImage({ src, alt }: { src: string | null; alt: string }) {
  const [failed, setFailed] = React.useState(false);
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
}

const VehicleCard = memo(function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div
      onClick={() => router.visit(`/vehicle/${vehicle.id}`)}
      className="flex-shrink-0 w-[300px] sm:w-[320px] lg:w-[350px] bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/25 snap-start"
    >
      {/* Image */}
      <div className="relative h-56 sm:h-60 bg-gray-800">
        <FeaturedImage src={vehicle.image} alt={vehicle.name} />
        <button
          className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-2 hover:bg-black/60 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-white mb-1 truncate">{vehicle.name}</h3>

        {/* Price */}
        {(() => {
          const discountedPrice = (vehicle.specialPrice && vehicle.specialPrice > 0) ? vehicle.specialPrice : null;
          const isDiscounted = discountedPrice || (vehicle.originalPrice > 0 && vehicle.price > 0 && vehicle.originalPrice > vehicle.price);
          const displayPrice = discountedPrice || vehicle.price;
          const oldPrice = discountedPrice ? vehicle.price : vehicle.originalPrice;

          return (
            <div className="flex items-baseline gap-2 mb-3 flex-wrap">
              <span className={`text-lg font-bold ${isDiscounted ? 'text-green-400' : 'text-white'}`}>
                ${displayPrice.toLocaleString()}
              </span>
              {isDiscounted && oldPrice > 0 && (
                <span className="text-xs text-gray-400 line-through">${oldPrice.toLocaleString()}</span>
              )}
              {isDiscounted && oldPrice > 0 && oldPrice > displayPrice && (
                <span className="text-[10px] font-semibold text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded">
                  -{Math.round(((oldPrice - displayPrice) / oldPrice) * 100)}%
                </span>
              )}
            </div>
          );
        })()}

        {/* Vehicle Info */}
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{vehicle.mileage}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>{vehicle.transmission}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

const FeaturedVehicles: React.FC<Props> = ({ vehicles, title = 'Featured Vehicles', viewAllLink = '/stock-list', viewAllLabel = 'View All Vehicles' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  }, []);

  if (!vehicles || vehicles.length === 0) return null;

  return (
    <div className="relative w-full bg-[var(--color-bg-dark)] py-16 md:py-24" style={{ fontFamily: 'var(--font-primary)' }}>
      <div className="mx-auto max-w-[108rem] px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              {title}
            </h2>
            <div className="w-24 md:w-32 h-1 bg-[var(--color-primary)]"></div>
          </div>
          <button
            onClick={() => router.visit(viewAllLink)}
            className="hidden md:flex items-center gap-2 text-sm md:text-base text-gray-400 hover:text-white transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Scroll Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-black/80 transition-all hidden md:block"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-black/80 transition-all hidden md:block"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 md:hidden">
          <button
            onClick={() => router.visit(viewAllLink)}
            className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium uppercase tracking-wider hover:bg-[var(--color-primary)]/80 transition-colors"
          >
            {viewAllLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(FeaturedVehicles);
