interface VehiclePriceTagProps {
  price: number;
  rating?: number;
}

export default function VehiclePriceTag({ price, rating = 4 }: VehiclePriceTagProps) {
  return (
    <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-xl">
      <div className="flex flex-col items-end">
        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold">${price.toLocaleString()}</span>
        </div>

      </div>
    </div>
  );
}
