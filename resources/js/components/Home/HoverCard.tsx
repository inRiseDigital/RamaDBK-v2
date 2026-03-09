import { useRef, useState, useEffect, useMemo, memo } from 'react'

interface HoverCardProps {
  title: string
  description: string
  isDesktop?: boolean
}

const FONT_STYLE = { fontFamily: 'var(--font-primary)' } as const

export default memo(function HoverCard({ title, description, isDesktop: isDesktopProp }: HoverCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isDesktopLocal, setIsDesktopLocal] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Only create resize listener if prop not provided (backward compat)
  useEffect(() => {
    if (isDesktopProp !== undefined) return
    const check = () => setIsDesktopLocal(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [isDesktopProp])

  const isDesktop = isDesktopProp !== undefined ? isDesktopProp : isDesktopLocal

  // Auto-trigger animation when card enters viewport on desktop
  useEffect(() => {
    if (!isDesktop || hasAnimated || !cardRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [isDesktop, hasAnimated])

  return (
    <div
      ref={cardRef}
      className="absolute top-25 right-15 w-[200px] min-h-[200px] md:w-[300px] md:min-h-[438px] lg:w-[250px] lg:min-h-[300px] lg:top-10 xl:w-[400px] xl:min-h-[438px] xl:top-25 flex-shrink-0 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl flex flex-col justify-center"
      style={FONT_STYLE}
    >
      <div
        className="space-y-2 xl:space-y-5 transition-all duration-700 ease-out"
        style={useMemo(() => ({
          opacity: !isDesktop || hasAnimated ? 1 : 0,
          transform: !isDesktop || hasAnimated ? 'translateY(0)' : 'translateY(20px)',
        }), [isDesktop, hasAnimated])}
      >
        <h1 className="text-[14px] md:text-[15px] lg:text-[13px] xl:text-lg font-bold text-white text-center">
          {title}
        </h1>
        <p className="text-center text-[12px] md:text-[14px] lg:text-[12px] xl:text-lg text-white">
          {description}
        </p>
      </div>
    </div>
  )
})
