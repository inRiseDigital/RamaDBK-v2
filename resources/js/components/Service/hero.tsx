import React, { useMemo } from 'react'

interface HeroProps {
  title?: string
  backgroundImage?: string
}

export function Hero({ title = "contact", backgroundImage = "/asset/contact-header.webp" }: HeroProps) {
  const bgStyle = useMemo<React.CSSProperties>(() => ({
    backgroundImage: `url('${backgroundImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }), [backgroundImage])

  return (
    <div
      className="relative w-full h-64 md:h-80 lg:h-96 flex items-start justify-start"
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 pt-12 pl-8 md:pl-16 lg:pl-24">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {title}
        </h1>
      </div>
    </div>
  )
}
