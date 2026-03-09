import { useState, useRef } from 'react'

const campaigns2025 = [
  { id: 1, date: "AUG-15 2025" },
  { id: 2, date: "AUG-08 2025" },
  { id: 3, date: "AUG-01 2025" },
  { id: 4, date: "JUL-25 2025" },
  { id: 5, date: "JUN-18 2025" },
  { id: 6, date: "MAY-11 2025" },
  { id: 7, date: "APR-04 2025" },
  { id: 8, date: "MAR-27 2025" }
]

const campaigns2024 = [
  { id: 1, date: "JUL-18 2024" },
  { id: 2, date: "JUL-11 2024" },
  { id: 3, date: "JUL-04 2024" },
  { id: 4, date: "JUN-27 2024" },
  { id: 5, date: "JUN-20 2024" },
  { id: 6, date: "MAY-13 2024" },
  { id: 7, date: "APR-05 2024" },
  { id: 8, date: "MAR-28 2024" }
]

const campaigns2023 = [
  { id: 1, date: "DEC-15 2023" },
  { id: 2, date: "NOV-08 2023" },
  { id: 3, date: "OCT-21 2023" },
  { id: 4, date: "SEP-14 2023" }
]

const campaigns2022 = [
  { id: 1, date: "DEC-22 2022" },
  { id: 2, date: "NOV-15 2022" },
  { id: 3, date: "OCT-08 2022" },
  { id: 4, date: "SEP-01 2022" }
]

const campaigns2021 = [
  { id: 1, date: "DEC-10 2021" },
  { id: 2, date: "NOV-03 2021" },
  { id: 3, date: "OCT-27 2021" },
  { id: 4, date: "SEP-20 2021" }
]

const campaigns2020 = [
  { id: 1, date: "DEC-18 2020" },
  { id: 2, date: "NOV-11 2020" },
  { id: 3, date: "OCT-04 2020" },
  { id: 4, date: "SEP-27 2020" }
]

export function WeeklyCampaigns() {
  const [showMoreCampaigns, setShowMoreCampaigns] = useState(false)

  // Refs for drag scrolling
  const scroll2025Ref = useRef<HTMLDivElement>(null)
  const scroll2024Ref = useRef<HTMLDivElement>(null)
  const scroll2023Ref = useRef<HTMLDivElement>(null)
  const scroll2022Ref = useRef<HTMLDivElement>(null)
  const scroll2021Ref = useRef<HTMLDivElement>(null)
  const scroll2020Ref = useRef<HTMLDivElement>(null)

  // Drag scrolling handler
  const handleMouseDown = (ref: React.RefObject<HTMLDivElement | null>) => (e: React.MouseEvent) => {
    if (!ref.current) return
    const slider = ref.current
    let isDown = true
    let startX = e.pageX - slider.offsetLeft
    let scrollLeft = slider.scrollLeft

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 2 // Scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
      isDown = false
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      slider.style.cursor = 'grab'
    }

    slider.style.cursor = 'grabbing'
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* Main Title */}
      <div className="px-4 max-w-7xl mx-auto mb-8">
        <h2 className="text-4xl font-bold text-gray-800">RamaDBK Weekly Campaigns</h2>
      </div>

      {/* Full Width Campaign Rows */}
      <div className="w-full">
        {/* Year 2025 - Auto Swipe Right (stops when See More is clicked) */}
        <div className="mb-12">
          <div className="px-4 max-w-7xl mx-auto mb-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-600 pb-2 inline-block">Year 2025</h3>
          </div>
          {!showMoreCampaigns ? (
            <div className="w-full overflow-hidden">
              <div className="flex animate-scroll-right space-x-4" style={{ width: 'calc(300%)' }}>
                {/* Original campaigns */}
                {campaigns2025.map((campaign, index) => (
                  <div key={`2025-orig-${campaign.id}`} className={`bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64 ${index === 0 ? 'ml-4' : ''}`}>
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {campaigns2025.map((campaign) => (
                  <div key={`2025-dup1-${campaign.id}`} className="bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64">
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                  </div>
                ))}

                {/* Third set for perfect loop */}
                {campaigns2025.slice(0, 5).map((campaign, index) => (
                  <div key={`2025-dup2-${campaign.id}`} className={`bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64 ${index === campaigns2025.slice(0, 5).length - 1 ? 'mr-4' : ''}`}>
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              ref={scroll2025Ref}
              onMouseDown={handleMouseDown(scroll2025Ref)}
              className="w-full overflow-x-auto scrollbar-hide px-4 cursor-grab active:cursor-grabbing"
            >
              <div className="flex justify-center space-x-4 pb-4">
                {campaigns2025.map((campaign) => (
                  <div key={`2025-${campaign.id}`} className="bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64">
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Year 2024 - Auto Swipe Left (stops when See More is clicked) */}
        <div className="mb-12">
          <div className="px-4 max-w-7xl mx-auto mb-6">
            <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-600 pb-2 inline-block">Year 2024</h3>
          </div>
          {!showMoreCampaigns ? (
            <div className="w-full overflow-hidden">
              <div className="flex animate-scroll-left space-x-4" style={{ width: 'calc(300%)' }}>
                {/* Original campaigns */}
                {campaigns2024.map((campaign, index) => (
                  <div key={`2024-orig-${campaign.id}`} className={`bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64 ${index === 0 ? 'ml-4' : ''}`}>
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {campaigns2024.map((campaign) => (
                  <div key={`2024-dup1-${campaign.id}`} className="bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64">
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                  </div>
                ))}

                {/* Third set for perfect loop */}
                {campaigns2024.slice(0, 5).map((campaign, index) => (
                  <div key={`2024-dup2-${campaign.id}`} className={`bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64 ${index === campaigns2024.slice(0, 5).length - 1 ? 'mr-4' : ''}`}>
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              ref={scroll2024Ref}
              onMouseDown={handleMouseDown(scroll2024Ref)}
              className="w-full overflow-x-auto scrollbar-hide px-4 cursor-grab active:cursor-grabbing"
            >
              <div className="flex justify-center space-x-4 pb-4">
                {campaigns2024.map((campaign) => (
                  <div key={`2024-${campaign.id}`} className="bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64">
                    <div className="absolute top-2 right-2">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Expandable Years Section - Manual Scroll */}
        {showMoreCampaigns && (
          <div className="space-y-12">
            {/* Year 2023 - Manual Scroll */}
            <div className="mb-12">
              <div className="px-4 max-w-7xl mx-auto mb-6">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-600 pb-2 inline-block">Year 2023</h3>
              </div>
              <div
                ref={scroll2023Ref}
                onMouseDown={handleMouseDown(scroll2023Ref)}
                className="w-full overflow-x-auto scrollbar-hide px-4 cursor-grab active:cursor-grabbing"
              >
                <div className="flex justify-center space-x-4 pb-4">
                  {campaigns2023.map((campaign) => (
                    <div key={`2023-${campaign.id}`} className="bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64">
                      <div className="absolute top-2 right-2">
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      </div>
                      <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Year 2022 - Manual Scroll */}
            <div className="mb-12">
              <div className="px-4 max-w-7xl mx-auto mb-6">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-600 pb-2 inline-block">Year 2022</h3>
              </div>
              <div
                ref={scroll2022Ref}
                onMouseDown={handleMouseDown(scroll2022Ref)}
                className="w-full overflow-x-auto scrollbar-hide px-4 cursor-grab active:cursor-grabbing"
              >
                <div className="flex justify-center space-x-4 pb-4">
                  {campaigns2022.map((campaign) => (
                    <div key={`2022-${campaign.id}`} className="bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64">
                      <div className="absolute top-2 right-2">
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      </div>
                      <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Year 2021 - Manual Scroll */}
            <div className="mb-12">
              <div className="px-4 max-w-7xl mx-auto mb-6">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-600 pb-2 inline-block">Year 2021</h3>
              </div>
              <div
                ref={scroll2021Ref}
                onMouseDown={handleMouseDown(scroll2021Ref)}
                className="w-full overflow-x-auto scrollbar-hide px-4 cursor-grab active:cursor-grabbing"
              >
                <div className="flex justify-center space-x-4 pb-4">
                  {campaigns2021.map((campaign) => (
                    <div key={`2021-${campaign.id}`} className="bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64">
                      <div className="absolute top-2 right-2">
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      </div>
                      <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Year 2020 - Manual Scroll */}
            <div className="mb-12">
              <div className="px-4 max-w-7xl mx-auto mb-6">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-600 pb-2 inline-block">Year 2020</h3>
              </div>
              <div
                ref={scroll2020Ref}
                onMouseDown={handleMouseDown(scroll2020Ref)}
                className="w-full overflow-x-auto scrollbar-hide px-4 cursor-grab active:cursor-grabbing"
              >
                <div className="flex justify-center space-x-4 pb-4">
                  {campaigns2020.map((campaign) => (
                    <div key={`2020-${campaign.id}`} className="bg-gray-800 rounded-lg p-4 text-white relative overflow-hidden flex-shrink-0 w-64">
                      <div className="absolute top-2 right-2">
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      </div>
                      <h4 className="font-semibold text-sm mb-2">Vehicle Campaign {campaign.date}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* See More Button */}
        <div className="text-center mt-8 px-4">
          <button
            onClick={() => setShowMoreCampaigns(!showMoreCampaigns)}
            className="text-gray-700 font-medium hover:text-red-600 transition-colors duration-300"
          >
            {showMoreCampaigns ? '--See less--' : '--See more--'}
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        /* Hide scrollbar for manual scroll sections */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
