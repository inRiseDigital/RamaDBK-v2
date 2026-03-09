import React, { useRef, useState, useEffect, lazy, Suspense, useCallback, useMemo, memo } from 'react';
import FirstHero from '@/components/Home/FirstHero';
import NavBar from "@/components/Navigation/NavBar";
import Footer from '@/components/Footer/Footer';

const SecondHero = lazy(() => import('@/components/Home/SecondHero'));
const ForthHero = lazy(() => import('@/components/Home/ForthHero'));
const OurServices = lazy(() => import('@/components/Home/OurServices'));
const FeaturedVehicles = lazy(() => import('@/components/Home/FeaturedVehicles'));
const Userfeedback = lazy(() => import('@/components/Home/Userfeedback'));

// Reusable fallback to avoid repeated inline divs
const SectionFallback = memo(function SectionFallback({ className }: { className: string }) {
  return <div className={className} />;
});

// Memoized FadeIn to prevent re-renders when parent state changes
const FadeIn = memo(function FadeIn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
});

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

interface HomeProps {
  featuredVehicles: Vehicle[];
  auctionVehicles: Vehicle[];
  discountedVehicles: Vehicle[];
}

const Home: React.FC<HomeProps> = ({ featuredVehicles, auctionVehicles, discountedVehicles }) => {
  const bannerSectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const updateDimensions = useCallback(() => {
    setIsDesktop(window.innerWidth >= 1280);
    setViewportHeight(window.innerHeight);
    setViewportWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions, { passive: true });
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  return (
    <>
      <NavBar />
      <div className="relative">
        <FirstHero bannerSectionRef={bannerSectionRef} />

        <FadeIn>
          <Suspense fallback={<SectionFallback className="min-h-[50vh] bg-[#1a1a1a]" />}>
            <FeaturedVehicles vehicles={featuredVehicles} />
          </Suspense>
        </FadeIn>

        {discountedVehicles.length > 0 && (
          <FadeIn>
            <Suspense fallback={<SectionFallback className="min-h-[50vh] bg-[#1a1a1a]" />}>
              <FeaturedVehicles
                vehicles={discountedVehicles}
                title="Discounted Vehicles"
                viewAllLink="/stock-list/discounted"
                viewAllLabel="View All Discounted"
              />
            </Suspense>
          </FadeIn>
        )}

        {auctionVehicles.length > 0 && (
          <FadeIn>
            <Suspense fallback={<SectionFallback className="min-h-[50vh] bg-[#1a1a1a]" />}>
              <FeaturedVehicles
                vehicles={auctionVehicles}
                title="Auction Vehicles"
                viewAllLink="/stock-list/aucnet"
                viewAllLabel="View All Auction"
              />
            </Suspense>
          </FadeIn>
        )}

        <Suspense fallback={<SectionFallback className="h-[200vh] bg-black" />}>
          <SecondHero />
        </Suspense>

        <div
          style={useMemo(() => ({
            position: 'relative' as const,
            backgroundColor: '#000',
            minHeight: isDesktop && viewportHeight ? `${viewportWidth * 3 + viewportHeight}px` : 'auto',
          }), [isDesktop, viewportHeight, viewportWidth])}
        >
          <Suspense fallback={<SectionFallback className="h-screen bg-black" />}>
            <ForthHero />
          </Suspense>
        </div>

        <Suspense fallback={<SectionFallback className="min-h-screen bg-[#292929]" />}>
          <OurServices />
        </Suspense>

        <FadeIn>
          <Suspense fallback={<SectionFallback className="min-h-screen bg-[#1a1a1a]" />}>
            <Userfeedback />
          </Suspense>
        </FadeIn>

        <FadeIn>
          <div className="relative z-10">
            <Footer />
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Home;
