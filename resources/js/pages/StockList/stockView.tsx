import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import VehicleDetails from '../../components/StockListView/VehicleDetails';
import VehicleImageGallery from '../../components/StockListView/VehicleImageGallery';
import VehiclePriceTag from '../../components/StockListView/VehiclePriceTag';
import BackButton from '../../components/StockListView/BackButton';
import Navbar from '@/components/Navigation/NavBar';

interface VehicleDetail {
  id: number;
  name: string;
  brand: string;
  model: string;
  mileage: string;
  transmission: string;
  driveSide: string;
  grade: string;
  engine: string;
  regYear: string;
  price: number;
  originalPrice: number;
  rating: number;
  images: string[];
  image: string;
  description?: string;
  colors?: string[];
  stockNo?: string;
  fuel?: string;
  seats?: string;
  drive?: string;
  doors?: string;
}

interface VehiclePageProps {
  vehicleData?: VehicleDetail;
  [key: string]: any;
}

export default function StockView() {
  const { props } = usePage<VehiclePageProps>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const vehicle = props?.vehicleData;

  if (!vehicle) return <p className="mt-10 text-center text-gray-400">Loading...</p>;

  const images = vehicle.images?.length ? vehicle.images : [vehicle.image];
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="stocklist-gradient-bg flex min-h-screen flex-col">
      <Navbar />

      <div className="grid w-full max-w-7xl mx-auto items-start gap-6 md:grid-cols-1 lg:grid-cols-[35%_65%] px-4 sm:px-6 lg:px-8 pt-20 pb-4">
        {/* LEFT COLUMN: Vehicle details */}
        <div className="flex flex-col w-full">
          <VehicleDetails vehicle={vehicle} />
        </div>

        {/* RIGHT COLUMN: images with price tag, description */}
        <div className="relative flex flex-col">
          <VehicleImageGallery
            images={images}
            currentIndex={currentIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
            totalImages={images.length}
            description={vehicle.description}
            colors={vehicle.colors}
          />
          <VehiclePriceTag price={vehicle.price} rating={vehicle.rating} />
        </div>
      </div>
    </div>
  );
}
