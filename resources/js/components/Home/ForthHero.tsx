import { useLayoutEffect, useRef, useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HoverCard from './HoverCard'

gsap.registerPlugin(ScrollTrigger)

// Extracted outside component to prevent recreation on every render
const videoData = [
  {
    mobileVideo: "/mobile/sedan.mp4",
    desktopVideo: "/Home/sedan.mp4",
    title: "Experience Elegance on Every Drive – Sedan for the Gentleman",
    description: "Step into sophistication with our premium sedan, crafted for the modern gentleman. Designed with sleek lines, luxurious interiors, and smooth performance, this car offers a refined driving experience that commands attention. Whether it's business or pleasure, arrive in style—where comfort meets class. Book your test drive today and redefine your journey."
  },
  {
    mobileVideo: "/mobile/Bick.mp4",
    desktopVideo: "/Home/Sport10001-0600.mp4",
    title: "Unleash Power and Precision – The Sports Car Experience",
    description: "Ignite your passion for performance with our exclusive range of sports cars, crafted for those who live to drive. Engineered with precision, aerodynamic design, and luxurious detailing, every model delivers an adrenaline-charged experience that blends speed with sophistication. From the roar of the engine to the elegance of the interior, these machines are built to thrill and impress. Embrace the spirit of the open road—where luxury meets performance. Take control today and drive beyond limits."
  },
  {
    mobileVideo: "/mobile/Wagon.mp4",
    desktopVideo: "/Home/WAGON.mp4",
    title: "Command Every Journey – The SUV for the Bold",
    description: "Conquer every path with confidence in our dynamic SUVs, built for adventure and refinement. With powerful performance, spacious comfort, and cutting-edge technology, each SUV is designed to take you further—whether through rugged terrains or city streets. Enjoy premium craftsmanship, advanced safety, and versatility that adapts to every lifestyle. Wherever your journey leads, travel with strength, style, and peace of mind. Discover your next adventure—drive the extraordinary."
  },
  {
    mobileVideo: "/mobile/Bick.mp4",
    desktopVideo: "/Home/bick.mp4",
    title: "Feel the Freedom – The Bike That Defines Adventure",
    description: "Embrace the thrill of the open road with our premium bikes, built for those who crave freedom, precision, and performance. Designed with bold styling, agile handling, and powerful engines, every ride delivers pure exhilaration and control. Whether you're gliding through city streets or chasing the horizon, our bikes offer the perfect balance of strength and sophistication. Ride your passion—where power meets purpose. Start your journey today and experience the road like never before."
  }
]

const FONT_STYLE = { fontFamily: 'var(--font-primary)' } as const

export default function ForthHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wagonVideoRef = useRef<HTMLVideoElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth
      setIsDesktop(width >= 1280)
      setIsTablet(width >= 768 && width < 1280)
      setIsLargeScreen(width >= 1024 && width < 1280)
    }

    checkDeviceType()
    window.addEventListener('resize', checkDeviceType, { passive: true })
    return () => window.removeEventListener('resize', checkDeviceType)
  }, [])

  useLayoutEffect(() => {
    if (wagonVideoRef.current) {
      wagonVideoRef.current.playbackRate = 0.5
    }
  }, [])

  useLayoutEffect(() => {
    if (!isDesktop) return

    const ctx = gsap.context(() => {
      const horizontalSections = gsap.utils.toArray('.horizontal-section')

      if (horizontalSections.length === 0) return

      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (horizontalSections.length - 1),
            duration: 0.5,
            ease: 'power1.inOut'
          },
          end: () => `+=${window.innerWidth * (horizontalSections.length - 1)}`,
          pinSpacing: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          id: 'forth-hero-horizontal',
          markers: false,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [isDesktop])

  // Stable slide transition with proper timeout cleanup
  const doTransition = useCallback((getNext: (prev: number) => number) => {
    setIsTransitioning(true)
    clearTimeout(transitionTimerRef.current)
    transitionTimerRef.current = setTimeout(() => {
      setCurrentSlide(getNext)
      setIsTransitioning(false)
    }, 300)
  }, [])

  const nextSlide = useCallback(() => {
    doTransition((prev) => (prev + 1) % videoData.length)
  }, [doTransition])

  const prevSlide = useCallback(() => {
    doTransition((prev) => (prev - 1 + videoData.length) % videoData.length)
  }, [doTransition])

  const goToSlide = useCallback((index: number) => {
    doTransition(() => index)
  }, [doTransition])

  // Cleanup transition timer on unmount
  useEffect(() => {
    return () => clearTimeout(transitionTimerRef.current)
  }, [])

  // Auto-slide for mobile and tablet only
  useEffect(() => {
    if (isDesktop || isLargeScreen) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isDesktop, isLargeScreen, currentSlide, nextSlide])

  const handleVideoEnd = useCallback(() => {
    if (isLargeScreen) nextSlide()
  }, [isLargeScreen, nextSlide])

  // Update video src without remounting the element
  useEffect(() => {
    if (videoRef.current) {
      const newSrc = isTablet
        ? videoData[currentSlide].desktopVideo
        : videoData[currentSlide].mobileVideo;
      if (videoRef.current.currentSrc !== window.location.origin + newSrc) {
        videoRef.current.src = newSrc;
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
      }
    }
  }, [currentSlide, isTablet]);

  // Tablet Layout
  if (isTablet) {
    return (
      <main className="relative h-screen overflow-hidden" style={FONT_STYLE}>
        <div className="relative h-full w-full">
          <video
            ref={videoRef}
            autoPlay
            loop={!isLargeScreen}
            muted
            playsInline
            onEnded={handleVideoEnd}
            src={videoData[currentSlide].desktopVideo}
            className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
            <button
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Desktop-style HoverCard in center */}
          <div className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-all duration-700 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <HoverCard
              title={videoData[currentSlide].title}
              description={videoData[currentSlide].description}
              isDesktop={isLargeScreen}
            />
          </div>
        </div>
      </main>
    )
  }

  // Mobile Layout
  if (!isDesktop && !isTablet) {
    return (
      <main className="relative h-[100dvh] overflow-hidden" style={FONT_STYLE}>
        <div className="relative h-full w-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            src={videoData[currentSlide].mobileVideo}
            className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
            <button
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-1 hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-1 hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Content Card */}
          <div className={`absolute bottom-8 left-4 right-4 z-20 transition-all duration-700 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6">
              <h1 className="text-[12px] font-bold text-white text-center mb-4">
                {videoData[currentSlide].title}
              </h1>
              <p className="text-[10px] text-white text-center leading-relaxed">
                {videoData[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex space-x-2">
              {videoData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  }

  // Desktop Layout (Original horizontal scroll)
  return (
    <main ref={containerRef} className="flex h-screen w-[400%] flex-nowrap" style={FONT_STYLE}>
      {/* Section 01 */}
      <section className="horizontal-section relative flex h-screen w-screen items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src="/Home/sedan.mp4" type="video/mp4" />
        </video>
        <HoverCard
          title="Experience Elegance on Every Drive – Sedan for the Gentleman"
          description="Step into sophistication with our premium sedan, crafted for the modern gentleman. Designed with sleek lines, luxurious interiors, and smooth performance, this car offers a refined driving experience that commands attention. Whether it's business or pleasure, arrive in style—where comfort meets class. Book your test drive today and redefine your journey."
          isDesktop={true}
        />
      </section>

      {/* Section 02 */}
      <section className="horizontal-section relative flex h-screen w-screen items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src="/Home/Sport10001-0600.mp4" type="video/mp4" />
        </video>
        <HoverCard
          title="Unleash Power and Precision – The Sports Car Experience"
          description="Ignite your passion for performance with our exclusive range of sports cars, crafted for those who live to drive. Engineered with precision, aerodynamic design, and luxurious detailing, every model delivers an adrenaline-charged experience that blends speed with sophistication. From the roar of the engine to the elegance of the interior, these machines are built to thrill and impress. Embrace the spirit of the open road—where luxury meets performance. Take control today and drive beyond limits."
          isDesktop={true}
        />
      </section>

      {/* Section 03 */}
      <section className="horizontal-section relative flex h-screen w-screen items-center justify-center overflow-hidden">
        <video
          ref={wagonVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src="/Home/WAGON.mp4" type="video/mp4" />
        </video>
        <HoverCard
          title="Command Every Journey – The SUV for the Bold"
          description="Conquer every path with confidence in our dynamic SUVs, built for adventure and refinement. With powerful performance, spacious comfort, and cutting-edge technology, each SUV is designed to take you further—whether through rugged terrains or city streets. Enjoy premium craftsmanship, advanced safety, and versatility that adapts to every lifestyle. Wherever your journey leads, travel with strength, style, and peace of mind. Discover your next adventure—drive the extraordinary."
          isDesktop={true}
        />
      </section>

      {/* Section 04 */}
      <section className="horizontal-section relative flex h-screen w-screen items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src="/Home/bick.mp4" type="video/mp4" />
        </video>
        <HoverCard
          title="Feel the Freedom – The Bike That Defines Adventure"
          description="Embrace the thrill of the open road with our premium bikes, built for those who crave freedom, precision, and performance. Designed with bold styling, agile handling, and powerful engines, every ride delivers pure exhilaration and control. Whether you're gliding through city streets or chasing the horizon, our bikes offer the perfect balance of strength and sophistication. Ride your passion—where power meets purpose. Start your journey today and experience the road like never before."
          isDesktop={true}
        />
      </section>
    </main>
  )
}
