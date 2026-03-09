import React, { memo } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Elsa Weimann',
    position: 'Central Accounts Strategist',
    image: '/Image.webp',
    text: 'Soluta quia est tempora officiis mollitia iusto eligendi est. Quis quia explicabo est qui tempora ipsum. Modi ut aperiam adipisci facere. Magnam et culpa beatae praesentium consequatur ipsum. Iste porro laudantium.',
    tags: ['JACK KUTCH', 'FREDERICK CRONA']
  },
  {
    id: 2,
    name: 'Elsa Weimann',
    position: 'Central Accounts Strategist',
    image: '/Image.webp',
    text: 'Soluta quia est tempora officiis mollitia iusto eligendi est. Quis quia explicabo est qui tempora ipsum. Modi ut aperiam adipisci facere. Magnam et culpa beatae praesentium consequatur ipsum. Iste porro laudantium.',
    tags: ['JACK KUTCH', 'FREDERICK CRONA'],
    featured: true
  },
  {
    id: 3,
    name: 'Elsa Weimann',
    position: 'Central Accounts Strategist',
    image: '/Image.webp',
    text: 'Soluta quia est tempora officiis mollitia iusto eligendi est. Quis quia explicabo est qui tempora ipsum. Modi ut aperiam adipisci facere. Magnam et culpa beatae praesentium consequatur ipsum. Iste porro laudantium.',
    tags: ['JACK KUTCH', 'FREDERICK CRONA']
  }
]

// Extracted outside component — avoids style object recreation on every render
const GRADIENT_STYLE: React.CSSProperties = {
  width: '1253px',
  height: '1259px',
  borderRadius: '1259px',
  opacity: 0.2,
  background: 'linear-gradient(180deg, rgba(199, 135, 169, 0.50) 0%, rgba(255, 0, 4, 0.50) 100%)',
  filter: 'blur(247.0703125px)',
  flexShrink: 0,
}

const TestimonialCard = memo(function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      className={`relative w-full ${
        testimonial.featured ? 'lg:scale-110 z-10' : 'lg:scale-95 opacity-90'
      } transition-all duration-300`}>
      <div className="relative bg-[var(--color-bg-light-gray)] rounded-2xl p-4 sm:p-6 lg:p-8 max-w-[520px] lg:max-w-[280px] xl:max-w-[520px] mx-auto shadow-2xl flex flex-col sm:flex-row min-h-[400px] sm:min-h-[320px] lg:h-[320px]">
        {/* Left side - Image with circular frame */}
        <div className="relative flex justify-center sm:justify-start">
          <div className="relative mt-2 sm:mt-5 w-[150px] h-[150px] lg:w-[100px] lg:h-[100px] xl:w-[200px] xl:h-[200px]">
            <div className="absolute inset-0 rounded-full border-[3px] border-white"></div>
            <div className="absolute inset-[15px] rounded-full overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 ml-0 lg:ml-6 xl:ml-12 mt-4 lg:mt-0 flex flex-col justify-center rounded-r-2xl">
          <div className="flex flex-col text-white text-center sm:text-left">
            <h3 className="text-lg lg:text-[12px] xl:text-2xl font-bold mb-2">{testimonial.name}</h3>
            <p className="text-[11px] lg:text-[12px] xl:text-[16px] text-gray-300 mb-4 sm:mb-6">
              {testimonial.position}
            </p>
            <p className="text-[9px] lg:text-[8px] xl:text-[14px] text-gray-300 leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default memo(function Userfeedback() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-dark)] text-white py-20 overflow-hidden" style={{ fontFamily: 'var(--font-primary)' }}>
      {/* Gradient Background Effect */}
      <div className="absolute -top-[30%] -right-[10%] pointer-events-none" style={GRADIENT_STYLE} />

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex justify-start flex-col ml-0 sm:ml-4 lg:ml-15 mt-6 sm:mt-8 lg:mt-10 mb-10 sm:mb-12 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 text-left">
            What Our Client Says About You
          </h1>
          <div className="w-32 sm:w-48 lg:w-64 h-1 bg-white"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 relative">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
})
