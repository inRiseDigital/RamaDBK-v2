import React, { useEffect, useRef, useState, useCallback, memo } from 'react';

interface SceneData {
  title: string;
  description?: string[];
  features?: string[];
  image: string;
  imageAlt: string;
}

const scenesData: SceneData[] = [
  {
    title: "Search Car for Me with RamaDBK",
    description: [
      "This form allows you to create a personalized notification alert without having to register with us. Once you submit the form, we will send you recommendations that match your desired vehicles.",
      "However, if you wish, you can also become a member for free and enjoy many other benefits. If you are already a member of RamaDBK, please log-in and use 'My Preferences' to create your personalized notifications."
    ],
    image: "/Home/search car.webp",
    imageAlt: "Search car service",
  },
  {
    title: "After Sales Guarantee",
    features: [
      "For International Customers",
      "Specially For Sri Lankan Customers",
      "Car Wash Packages",
      "Auto Detailing Packages",
      "Lubrication Packages",
    ],
    image: "/Home/after sales.webp",
    imageAlt: "After sales service",
  },
  {
    title: "Vehicle Insurance",
    description: [
      "It is the duty of the Assured and their agents, in all cases to take such measures as be reasonable for the purpose of averting or minimizing a loss and to ensure that all rights against carriers, bailees or other third parties are properly preserved and exercised.",
      "To claim immediately on the carriers, port authorities or other bailees for any missing packages. In no circumstances except under written protest to give clean receipts where goods are in doubtful condition."
    ],
    image: "/Home/car insurance.webp",
    imageAlt: "Vehicle inspection",
  },
  {
    title: "Our Bank Details",
    features: [
      "For your convenience, RamaDBK offers different types of accounts from major banks in Japan.",
      "If you would like to make a transfer from overseas, please check the bank details under \"Overseas Remittance\".",
      "If you would like to make the remittance within Japan please check the details under \"Local Remittance\".",
      "To take a print out of our bank details, please click on the \"print\" link available at the upper right corner.",
    ],
    image: "/Home/Our Bank Details.webp",
    imageAlt: "Certified Membership",
  },
  {
    title: "Our Team",
    description: [
      "RamaDBK operates with a multinational team of around 40",
      "Our Sales-Team consist of members that are fluent in English, Japanese, Russian, French, Mongolian, Sinhalese and Tamil."
    ],
    image: "/Home/Our team.webp",
    imageAlt: "Import export services",
  },
  {
    title: "Import Regulations",
    description: [
      "Importing used vehicles from Japan is regulated by the destination country's customs and transport authorities. Buyers must comply with age limits, emission standards, and documentation requirements specific to their region. All exports from Japan follow international quality inspections and certified shipping procedures.",
    ],
    image: "/Home/Import Regulations.webp",
    imageAlt: "Vehicle customization",
  },
  {
    title: "Weekly Campaigns",
    description: [
      "Discover RamaDBK's exclusive Weekly Vehicle Campaigns, featuring fresh offers on top-quality Japanese used cars every week. Stay updated with the latest arrivals, special discounts, and limited-time deals carefully selected to meet global customer demand.",
    ],
    image: "/Home/Weekly Campaigns.webp",
    imageAlt: "Insurance services",
  },
  {
    title: "Certified Membership",
    description: [
      "JUMVEA (Japan Used Motor Vehicle Exporters Association) Safe Trade (JUST) is a secure payment service that protects both buyers and suppliers. RamaDBK Ltd. is an active member of JUST. JUMVEA is a non profit government recognized business association approved by Ministry of Economy, Trade and Industry (METI). JUST ensures quick and easy supply of best quality used vehicles from Japan without any worries of loss or fraud.",
    ],
    image: "/Home/Certified Membership.webp",
    imageAlt: "Roadside assistance",
  }
];

const FONT_STYLE = { fontFamily: 'var(--font-primary)' } as const

const OurServices: React.FC = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % scenesData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + scenesData.length) % scenesData.length);
  }, []);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(handleNext, 5000);
  }, [handleNext]);

  useEffect(() => {
    autoPlayRef.current = setInterval(handleNext, 5000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [handleNext]);

  const goNext = useCallback(() => { handleNext(); resetAutoPlay(); }, [handleNext, resetAutoPlay]);
  const goPrev = useCallback(() => { handlePrev(); resetAutoPlay(); }, [handlePrev, resetAutoPlay]);
  const goTo = useCallback((i: number) => { setCurrentIndex(i); resetAutoPlay(); }, [resetAutoPlay]);

  return (
    <div className="relative w-full bg-[var(--color-bg-medium-dark)]" style={FONT_STYLE}>
      <section className="relative h-screen flex flex-col justify-center items-center">
        <div className="mx-auto w-full lg:max-w-[56rem] xl:max-w-[108rem] px-4 md:px-6 lg:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
            Our Services
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">

            {/* Left Panel - Text */}
            <div className="flex w-full md:w-auto h-auto md:h-auto lg:h-[70vh] xl:h-[70vh] lg:w-[60%] xl:w-[40%] flex-col justify-end rounded-[1.25rem] bg-[var(--color-bg-gray)] p-4 md:p-6">
              <div className="relative mb-4 md:mb-6 h-full min-h-[250px] md:min-h-0">
                {scenesData.map((scene, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 flex flex-col justify-start text-center"
                    style={{
                      opacity: index === currentIndex ? 1 : 0,
                      transform: index === currentIndex ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.5s ease, transform 0.5s ease',
                      pointerEvents: index === currentIndex ? 'auto' : 'none',
                    }}
                  >
                    <h2 className="text-xl md:text-2xl lg:text-[1.5rem] xl:text-[2.125rem] font-medium leading-tight text-gray-100 mb-3 md:mb-4">
                      {scene.title.includes('RamaDBK') ? (
                        <>
                          {scene.title.split('RamaDBK')[0]}
                          <span className="text-[var(--color-primary)]">Rama</span>DBK
                        </>
                      ) : scene.title}
                    </h2>
                    <div className="lg:my-0 xl:my-4 w-full bg-gray-500" />
                    {scene.description ? (
                      <div className="space-y-2 md:space-y-3 text-gray-400">
                        {scene.description.map((para, i) => (
                          <p key={i} className="text-xs md:text-sm lg:text-[14px] xl:text-xl leading-relaxed">{para}</p>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1 md:space-y-2 text-left text-gray-400">
                        {scene.features?.slice(0, 5).map((feature, i) => (
                          <p key={i} className="text-xs md:text-sm lg:text-[14px] xl:text-xl">• {feature}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center gap-2 mb-3">
                {scenesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-[var(--color-primary)] w-6'
                        : 'bg-gray-500 hover:bg-gray-400 w-2'
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>

              <button className="w-full rounded-lg bg-[var(--color-primary)] py-2 md:py-3 text-xs md:text-sm uppercase tracking-wider text-gray-200 transition hover:bg-[var(--color-bg-near-black)]">
                Explore More
              </button>
            </div>

            {/* Right Panel - Image */}
            <div className="relative w-full md:w-auto h-[50vh] md:h-[70vh] lg:w-[40%] xl:w-[60%] overflow-hidden rounded-[1.25rem]">
              {scenesData.map((scene, index) => (
                <div
                  key={index}
                  className="absolute inset-0"
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    transform: index === currentIndex ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                  }}
                >
                  <img
                    src={scene.image}
                    alt={scene.imageAlt}
                    loading="lazy"
                    className="h-full w-full rounded-[1.25rem] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

                  <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-lg bg-black/50 px-4 py-2 backdrop-blur-sm">
                    <span className="text-2xl font-light text-white">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-2xl font-light text-white/30">/</span>
                    <span className="text-2xl font-light text-white/30">{String(scenesData.length).padStart(2, '0')}</span>
                  </div>
                </div>
              ))}

              {/* Nav Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between px-4 z-10">
                <button
                  onClick={goPrev}
                  className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 shadow-lg"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 shadow-lg"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default OurServices;
