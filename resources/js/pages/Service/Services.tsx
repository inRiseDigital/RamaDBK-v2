import React, { lazy, Suspense } from 'react';
import { CarForMe } from "@/components/Service/CarForMe"
import { SalesGuarantee } from "@/components/Service/SalesGuarantee"
import { ServicePackages } from "@/components/Service/ServicePackages"
import { CarCareMap } from "@/components/Service/CarCareMap"
import { InsurancePolicy } from "@/components/Service/InsurancePolicy"
import { Team } from "@/components/Team/Team"
import { WeeklyCampaigns } from "@/components/WeeklyCampaigns/WeeklyCampaigns"
import NavBar from "@/components/Navigation/NavBar";
import Footer from '@/components/Footer/Footer';

// Lazy load heavy components (Three.js Globe ~600KB, Leaflet ~150KB)
const AuctionLocation = lazy(() => import("@/components/Service/AuctionLocation").then(m => ({ default: m.AuctionLocation })));
const Globe3D = lazy(() => import("@/components/3DMap/Globe3D"));

const LazyFallback = React.memo(() => (
  <div className="flex items-center justify-center min-h-[400px] bg-[var(--color-bg-medium-dark)]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-gray-600 border-t-red-600 rounded-full animate-spin" />
      <span className="text-gray-400 text-sm">Loading...</span>
    </div>
  </div>
));

const Service: React.FC = (): React.ReactElement => {
  return (
    <>
      <NavBar/>
      <CarForMe />
      <SalesGuarantee />
      <ServicePackages />
      <CarCareMap />
      <InsurancePolicy />
      <Team />
      <WeeklyCampaigns />
      <Suspense fallback={<LazyFallback />}>
        <AuctionLocation />
      </Suspense>
      <Suspense fallback={<LazyFallback />}>
        <Globe3D/>
      </Suspense>
      <Footer/>
    </>
  )
}

export default Service;
