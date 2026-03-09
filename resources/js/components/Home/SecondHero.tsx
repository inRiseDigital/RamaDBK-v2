import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState, useEffect, useCallback, memo } from 'react';

const FONT_STYLE = { fontFamily: 'var(--font-primary)' } as const

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export default memo(function SecondHero() {
    const container = useRef(null);
    const [bp, setBp] = useState<Breakpoint>('desktop');

    const updateBp = useCallback(() => {
        const w = window.innerWidth;
        setBp(w < 768 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop');
    }, []);

    useEffect(() => {
        updateBp();
        window.addEventListener('resize', updateBp, { passive: true });
        return () => window.removeEventListener('resize', updateBp);
    }, [updateBp]);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    // Title scale/opacity per breakpoint
    const titleScale = useTransform(
        scrollYProgress,
        bp === 'mobile' ? [0, 0.5] : bp === 'tablet' ? [0, 0.5] : [0, 1],
        bp === 'mobile' ? [1, 6] : bp === 'tablet' ? [1, 4] : [1, 9]
    );
    const titleOpacity = useTransform(
        scrollYProgress,
        bp === 'tablet' ? [0, 0.4, 0.5] : [0, 0.5, 1],
        bp === 'tablet' ? [1, 0.5, 0] : [1, 0.5, 0]
    );

    // Quote section animations
    const quoteScale = useTransform(scrollYProgress, [0.5, 0.7, 0.8], [0.5, 1.1, 1]);
    const quoteOpacity = useTransform(scrollYProgress, [0.5, 0.7, 0.8], [0, 0.5, 1]);

    return (
        <div
            ref={container}
            className="h-[200vh] relative w-screen"
            style={FONT_STYLE}
        >
            <div className="sticky top-0 h-screen w-screen flex items-center justify-center overflow-hidden">
                {/* Single responsive title */}
                <motion.div
                    style={{ scale: titleScale, opacity: titleOpacity }}
                    className="origin-center"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center px-4 whitespace-nowrap">
                        {bp === 'mobile' ? (
                            <>Welcome To <br/><span className='text-[var(--color-pure-red)] font-bold'>RAMA</span>DBK <br/>Limited</>
                        ) : (
                            <>Welcome To <span className='text-[var(--color-pure-red)] font-bold'>RAMA</span>DBK Limited</>
                        )}
                    </h1>
                </motion.div>

                {/* Quote Section - responsive */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
                    style={{
                        scale: quoteScale,
                        opacity: quoteOpacity,
                    }}
                >
                    <div className="max-w-xs md:max-w-7xl w-full text-center px-4 md:px-6 p-6 md:p-10 shadow-2xl pointer-events-auto mt-12 md:mt-20">
                        <p className="text-gray-200 text-xl lg:text-3xl xl:text-5xl mb-6 md:mb-10 leading-relaxed font-['Host_Grotesk']">
                            <span className="text-red-600 font-bold text-lg md:text-6xl">"</span> Established in 1988{' '}
                            <span className="text-red-600 font-bold">Rama</span>DBK is now one of the leading vehicle
                            exporters in Japan and serves customers in over 80 countries on six
                            continents. We deal with a wide variety of Japanese new and used
                            vehicles as well as brand new vehicles.
                            <span className="text-red-600 font-bold text-lg md:text-6xl">"</span>
                        </p>
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-10 py-2 md:py-3 rounded font-medium text-sm md:text-lg transition-all hover:scale-105"
                        >
                            Read More →
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
})
