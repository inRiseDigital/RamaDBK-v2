import { RefObject, memo, useState, useEffect, useCallback } from 'react'

const SECTION_STYLE = { fontFamily: 'var(--font-primary)', maxWidth: '100vw' } as const

interface FirstHeroProps {
  bannerSectionRef: RefObject<HTMLElement | null>;
}

export default memo(function FirstHero({ bannerSectionRef }: FirstHeroProps) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <section
      ref={bannerSectionRef}
      className="relative top-0 left-0 h-screen w-screen flex overflow-hidden"
      style={SECTION_STYLE}
    >
      {/* Single video — only the correct one for the viewport is rendered */}
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src={isMobile ? "/mobile/firstvid.mp4" : "/Home/home1.mp4"}
      />

      {/* Text Overlay */}
      <div className="w-full flex flex-col justify-end relative z-10 px-5 lg:px-10 xl:px-24 pb-10 xl:pb-14 h-full will-change-transform">
        <div className="max-w-full flex flex-col space-y-3 items-start text-left animate-fade-in-up">
          <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-7xl font-bold tracking-wide text-white">
            DRIVE YOUR GREAT DREAMS
          </h1>
          <p className="text-xxs md:text-lg lg:text-lg xl:text-xl max-w-xxs md:max-w-xl lg:max-w-2xl text-white opacity-90">
            Experience luxury and performance with our exclusive collection of vehicles.
            Find your perfect match today and enjoy our award-winning customer service.
          </p>
        </div>
      </div>
    </section>
  )
})
