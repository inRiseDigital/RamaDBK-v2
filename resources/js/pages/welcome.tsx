import WarningUser from '@/components/warning/WarningUser';
import Home from '@/pages/home/Home';
import { usePage } from '@inertiajs/react';

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

interface PageProps {
    featuredVehicles: Vehicle[];
    auctionVehicles: Vehicle[];
    discountedVehicles: Vehicle[];
    [key: string]: unknown;
}

export default function Welcome() {
    const { featuredVehicles, auctionVehicles, discountedVehicles } = usePage<PageProps>().props;

    return (
        <div>
            <div className='fixed top-15 lg:top-15 xl:top-15 right-3 z-50'>
                <WarningUser/>
            </div>
            <Home
                featuredVehicles={featuredVehicles || []}
                auctionVehicles={auctionVehicles || []}
                discountedVehicles={discountedVehicles || []}
            />
        </div>
    );
}
