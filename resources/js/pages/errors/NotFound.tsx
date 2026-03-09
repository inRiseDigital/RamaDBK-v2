import { Link } from '@inertiajs/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import NavBar from "@/components/Navigation/NavBar";
import Footer from '@/components/Footer/Footer';

export default function NotFound() {
    useEffect(() => {
        // Add custom styles for 3D animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes stampSlide {
                0% {
                    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-100px) translateY(65px);
                }
                100% {
                    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-100px) translateY(-3935px);
                }
            }

            @keyframes roll {
                0% { transform: rotateZ(0deg); }
                85% { transform: rotateZ(90deg); }
                87% { transform: rotateZ(88deg); }
                90% { transform: rotateZ(90deg); }
                100% { transform: rotateZ(90deg); }
            }

            @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-200px); }
            }

            @keyframes zeroFour {
                0%, 49% { content: '4'; }
                50%, 100% { content: '0'; }
            }

            .stamp-item {
                animation: stampSlide 40s linear infinite;
            }

            .box-container {
                animation: roll 2000ms cubic-bezier(1.000, 0.010, 1.000, 1.000) infinite;
            }

            .forward-container {
                animation: slide 2000ms linear infinite;
            }

            .wall-content::before {
                animation: zeroFour 4000ms linear infinite;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <>
        <NavBar/>
        <div className="relative min-h-screen overflow-hidden flex items-center justify-center font-host-grotesk bg-[var(--color-bg-charcoal)]" style={{
            perspective: '1000px'
        }}>
            {/* Background blur effect */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-80"
                style={{
                    background: 'radial-gradient(circle, #B30000 0%, transparent 70%)',
                    filter: 'blur(250px)',
                    right: '-100px'
                }}
            />

            {/* Logo - Top Left */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
                <img
                    src="/ramalogo.jpg"
                    alt="Rama Logo"
                    className="w-25 h-16 md:w-40 md:h-20 object-contain rounded-lg shadow-lg"
                />
            </div>

            {/* Close Button - Top Right */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
                <Link
                    href="/"
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                >
                    <X className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-gray-200 transition-colors" />
                </Link>
            </div>

            {/* 3D Rail Animation */}
            <div
                className="absolute w-full h-full flex items-center justify-center"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(-30deg) rotateY(-30deg)'
                }}
            >
                {/* Animated stamps on the rail */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`stamp-${i}`}
                        className="stamp-item absolute w-[200px] h-[200px] flex items-center justify-center bg-[rgba(20,20,20,1)] text-white text-[7rem] font-bold"
                        style={{
                            transformStyle: 'preserve-3d',
                            animationDelay: `${i * -2000 - 300}ms`
                        }}
                    >
                        {i % 2 === 0 ? '4' : '0'}
                    </div>
                ))}
            </div>

            {/* 3D Rolling Cube */}
            <div
                className="absolute"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(-30deg) rotateY(-30deg)'
                }}
            >
                <div className="forward-container absolute" style={{ transformStyle: 'preserve-3d' }}>
                    <div
                        className="box-container w-[200px] h-[200px]"
                        style={{
                            transformStyle: 'preserve-3d',
                            transformOrigin: '100% 100%'
                        }}
                    >
                        {/* Cube faces */}
                        {[...Array(6)].map((_, i) => {
                            const transforms = [
                                'translateZ(100px)',
                                'rotateX(180deg) translateZ(100px)',
                                'rotateX(90deg) translateZ(100px)',
                                'rotateX(-90deg) translateZ(100px)',
                                'rotateY(90deg) translateZ(100px)',
                                'rotateY(-90deg) translateZ(100px)'
                            ];

                            const contentTransforms = [
                                '',
                                '',
                                'rotateX(180deg) rotateZ(90deg) translateZ(-1px)',
                                'rotateX(180deg) rotateZ(-90deg) translateZ(-1px)',
                                'rotateX(180deg) translateZ(-1px)',
                                'rotateX(180deg) rotateZ(180deg) translateZ(-1px)'
                            ];

                            const delays = ['0ms', '0ms', '-2000ms', '-2000ms', '0ms', '0ms'];

                            return (
                                <div
                                    key={`wall-${i}`}
                                    className="absolute w-[200px] h-[200px] bg-[rgba(10,10,10,0.8)] border border-white box-border"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transform: transforms[i]
                                    }}
                                >
                                    {i >= 2 && (
                                        <div
                                            className="wall-content absolute w-full h-full flex items-center justify-center text-white text-[7rem] font-bold before:content-['4']"
                                            style={{
                                                transform: contentTransforms[i],
                                                animationDelay: delays[i]
                                            }}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Top Content */}
            <div className="absolute top-30 md:top-20 left-0 right-0 z-10 text-center px-4">
                <h2 className="text-4xl md:text-8xl font-bold text-[var(--color-pure-red)] mb-5 drop-shadow-lg">
                    Page Not Found
                </h2>
                <p className="text-lg text-gray-500 drop-shadow-md">
                    Oops! The page you're looking for seems to have driven off the road.
                </p>
            </div>

            {/* Bottom Error Code */}
            <div className="absolute bottom-8 left-0 right-0 z-10 text-center">
                <p className="text-xs text-gray-600">
                    Error Code: 404 | Page Not Found
                </p>
            </div>
        </div>
        <Footer/>
        </>
    );
}
