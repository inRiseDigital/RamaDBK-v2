import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface Location {
  name: string
  lat: number
  lng: number
}

interface RegionData {
  name: string
  color: string
  center: { lat: number; lng: number }
  locations: Location[]
}

interface AuctionData {
  [key: string]: RegionData
}

const auctionData: AuctionData = {
  hokkaido: {
    name: 'Hokkaido Region',
    color: 'var(--color-blue)',
    center: { lat: 43.0642, lng: 141.3469 },
    locations: [
      { name: 'USS Sapporo', lat: 43.0642, lng: 141.3469 },
      { name: 'Hokkaido Auto Auction', lat: 43.0878, lng: 141.3545 },
      { name: 'CAA Sapporo', lat: 43.0458, lng: 141.3234 },
      { name: 'Asahikawa Auto Market', lat: 43.7706, lng: 142.3650 },
      { name: 'Hakodate Vehicle Center', lat: 41.7688, lng: 140.7288 }
    ]
  },
  tohoku: {
    name: 'Tohoku Region',
    color: 'var(--color-purple)',
    center: { lat: 38.2682, lng: 140.8694 },
    locations: [
      { name: 'USS Sendai', lat: 38.2682, lng: 140.8694 },
      { name: 'Tohoku Auto Auction', lat: 38.2543, lng: 140.8421 },
      { name: 'Aomori AA', lat: 40.8244, lng: 140.7400 },
      { name: 'Akita Car Auction', lat: 39.7186, lng: 140.1024 },
      { name: 'Yamagata Auto Market', lat: 38.2404, lng: 140.3633 },
      { name: 'Iwate Vehicle Center', lat: 39.7036, lng: 141.1527 }
    ]
  },
  kanto: {
    name: 'Kanto Region',
    color: 'var(--color-red-accent)',
    center: { lat: 35.6762, lng: 139.6503 },
    locations: [
      { name: 'USS Tokyo', lat: 35.7090, lng: 139.8107 },
      { name: 'TAA Tokyo', lat: 35.6812, lng: 139.7671 },
      { name: 'USS Yokohama', lat: 35.4437, lng: 139.6380 },
      { name: 'TAA Yokohama', lat: 35.4657, lng: 139.6220 },
      { name: 'Tokyo Auto Auction', lat: 35.6762, lng: 139.6503 },
      { name: 'JU Saitama', lat: 35.8617, lng: 139.6455 },
      { name: 'Bayauc', lat: 35.5354, lng: 139.7021 },
      { name: 'USS Gunma', lat: 36.3911, lng: 139.0608 },
      { name: 'Hanaten', lat: 35.7234, lng: 139.8765 },
      { name: 'CAA Tokyo', lat: 35.6543, lng: 139.7123 }
    ]
  },
  chubu: {
    name: 'Chubu Region',
    color: 'var(--color-green)',
    center: { lat: 35.1815, lng: 136.9066 },
    locations: [
      { name: 'USS Nagoya', lat: 35.1708, lng: 136.8815 },
      { name: 'CAA Chubu', lat: 35.1456, lng: 136.9234 },
      { name: 'TAA Chubu', lat: 35.2012, lng: 136.8956 },
      { name: 'Nagoya Auto Auction', lat: 35.1815, lng: 136.9066 },
      { name: 'USS Shizuoka', lat: 34.9769, lng: 138.3831 },
      { name: 'Hamamatsu AA', lat: 34.7108, lng: 137.7261 },
      { name: 'JU Gifu', lat: 35.4232, lng: 136.7605 }
    ]
  },
  kansai: {
    name: 'Kansai Region',
    color: 'var(--color-amber)',
    center: { lat: 34.6937, lng: 135.5023 },
    locations: [
      { name: 'USS Osaka', lat: 34.7333, lng: 135.4500 },
      { name: 'CAA Osaka', lat: 34.6543, lng: 135.5234 },
      { name: 'Osaka Auto Auction', lat: 34.6937, lng: 135.5023 },
      { name: 'USS Kobe', lat: 34.6901, lng: 135.1955 },
      { name: 'Kobe Auto Market', lat: 34.6789, lng: 135.1678 },
      { name: 'USS R Osaka', lat: 34.7123, lng: 135.4876 },
      { name: 'TAA Kansai', lat: 34.7654, lng: 135.5345 },
      { name: 'Kyoto Car Auction', lat: 35.0116, lng: 135.7681 },
      { name: 'Nara Auto Auction', lat: 34.6851, lng: 135.8050 }
    ]
  },
  kyushu: {
    name: 'Kyushu Region',
    color: 'var(--color-pink)',
    center: { lat: 33.5904, lng: 130.4017 },
    locations: [
      { name: 'USS Fukuoka', lat: 33.5904, lng: 130.4017 },
      { name: 'TAA Kyushu', lat: 33.6123, lng: 130.3845 },
      { name: 'Fukuoka Auto Auction', lat: 33.5678, lng: 130.4234 },
      { name: 'USS Kyushu', lat: 33.5456, lng: 130.4567 },
      { name: 'Kumamoto AA', lat: 32.8031, lng: 130.7079 },
      { name: 'Kagoshima Auto Market', lat: 31.5966, lng: 130.5571 },
      { name: 'Nagasaki Vehicle Center', lat: 32.7503, lng: 129.8779 },
      { name: 'Oita Car Auction', lat: 33.2382, lng: 131.6126 }
    ]
  }
}

// Component to update map view
function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

export function AuctionLocation() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [selectedMarker, setSelectedMarker] = useState<Location | null>(null)
  const [mapCenter, setMapCenter] = useState({ lat: 36.2048, lng: 138.2529 })
  const [mapZoom, setMapZoom] = useState(6)
  const [pinnedLocation, setPinnedLocation] = useState<string | null>(null)

  // Reset pinned location when marker changes
  useEffect(() => {
    if (selectedMarker) {
      setPinnedLocation(selectedMarker.name)
      // Auto-remove pin animation after 3 seconds
      const timer = setTimeout(() => {
        setPinnedLocation(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [selectedMarker])

  return (
    <section className="bg-white font-['Roboto_Flex',sans-serif]">
      {/* Header */}
      <div className="px-4 max-w-7xl mx-auto mb-8 pt-16">
        <h2 className="text-4xl font-bold text-gray-800">Auction Location Map</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Region Cards - Left Side */}
          <div className="lg:col-span-1 space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 px-2">Select Region</h3>
            <div className="space-y-3">
              {Object.entries(auctionData).map(([key, region]) => (
                <button
                  key={key}
                  onClick={() => {
                    if (selectedRegion === key) {
                      setSelectedRegion(null)
                      setSelectedMarker(null)
                      setMapCenter({ lat: 36.2048, lng: 138.2529 })
                      setMapZoom(6)
                    } else {
                      setSelectedRegion(key)
                      setSelectedMarker(null)
                      setMapCenter(region.center)
                      setMapZoom(8)
                    }
                  }}
                  className={`group relative w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-500 overflow-hidden ${
                    selectedRegion === key
                      ? 'shadow-2xl scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-xl hover:scale-[1.02]'
                  }`}
                  style={{
                    borderColor: selectedRegion === key ? region.color : undefined,
                    background: selectedRegion === key
                      ? `linear-gradient(135deg, ${region.color}10 0%, white 100%)`
                      : 'white'
                  }}
                >
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${region.color}08, transparent 70%)`
                    }}
                  ></div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        {/* Pulsing ring effect */}
                        {selectedRegion === key && (
                          <div
                            className="absolute -inset-1 rounded-full animate-ping opacity-75"
                            style={{ backgroundColor: region.color }}
                          ></div>
                        )}
                        <div
                          className="relative w-5 h-5 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                          style={{
                            backgroundColor: region.color,
                            boxShadow: `0 0 20px ${region.color}80`
                          }}
                        ></div>
                      </div>
                      <span className="font-bold text-gray-800 text-sm md:text-base">
                        {region.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm text-gray-500 font-medium">
                        {region.locations?.length || 0}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${selectedRegion === key ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: region.color }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable Location List */}
                  {selectedRegion === key && (
                    <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 animate-slideDown">
                      {region.locations.map((location, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start gap-3 text-xs md:text-sm p-3 rounded-lg transition-all duration-300 group/item cursor-pointer ${
                            pinnedLocation === location.name
                              ? 'bg-gray-100 scale-105 shadow-md'
                              : 'hover:bg-gray-50'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedMarker(location)
                            setMapCenter({ lat: location.lat, lng: location.lng })
                            setMapZoom(12)
                          }}
                        >
                          {/* Animated Pin Icon */}
                          <div className="relative flex-shrink-0 mt-0.5">
                            {pinnedLocation === location.name && (
                              <>
                                {/* Pulse rings */}
                                <div className="absolute -inset-1 rounded-full animate-ping opacity-75"
                                  style={{ backgroundColor: region.color }}
                                ></div>
                                <div className="absolute inset-0 rounded-full animate-pulse"
                                  style={{ backgroundColor: `${region.color}40` }}
                                ></div>
                              </>
                            )}
                            <div
                              className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                                pinnedLocation === location.name
                                  ? 'scale-125'
                                  : 'group-hover/item:scale-110'
                              }`}
                              style={{
                                borderColor: region.color,
                                backgroundColor: pinnedLocation === location.name ? region.color : 'white',
                                boxShadow: pinnedLocation === location.name ? `0 0 15px ${region.color}` : 'none'
                              }}
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                style={{ backgroundColor: pinnedLocation === location.name ? 'white' : region.color }}
                              ></div>
                            </div>
                          </div>
                          <span className={`leading-relaxed transition-colors ${
                            pinnedLocation === location.name ? 'text-gray-900 font-semibold' : 'text-gray-700 group-hover/item:text-gray-900'
                          }`}>
                            {location.name}
                          </span>
                          {pinnedLocation === location.name && (
                            <span className="ml-auto text-lg font-bold animate-bounce" style={{ color: region.color }}>
                              📍
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Map - Right Side */}
          <div className="lg:col-span-2">
            <div className="sticky top-4">
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <MapContainer
                  center={[36.2048, 138.2529]}
                  zoom={6}
                  style={{ width: '100%', height: '100%' }}
                  zoomControl={true}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/* Map updater to handle center/zoom changes */}
                  <MapUpdater center={[mapCenter.lat, mapCenter.lng]} zoom={mapZoom} />

                  {/* Render markers for all regions or just selected region */}
                  {Object.entries(auctionData).map(([key, region]) => {
                    // Show all markers if no region selected, or only selected region's markers
                    if (selectedRegion && selectedRegion !== key) return null

                    return region.locations.map((location, idx) => {
                      const isPinned = pinnedLocation === location.name

                      // Create custom colored marker with animation
                      const customIcon = L.divIcon({
                        className: 'custom-marker',
                        html: `
                          <div class="marker-container ${isPinned ? 'marker-pinned' : ''}">
                            ${isPinned ? `
                              <div class="marker-pulse-ring" style="
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                width: 40px;
                                height: 40px;
                                border: 2px solid ${region.color};
                                border-radius: 50%;
                                animation: pulse-ring 1.5s ease-out infinite;
                              "></div>
                              <div class="marker-pulse-ring-2" style="
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                width: 40px;
                                height: 40px;
                                background-color: ${region.color}40;
                                border-radius: 50%;
                                animation: pulse-ring 1.5s ease-out infinite 0.3s;
                              "></div>
                            ` : ''}
                            <div style="
                              position: relative;
                              width: ${isPinned ? '24px' : '18px'};
                              height: ${isPinned ? '24px' : '18px'};
                              background-color: ${region.color};
                              border: 3px solid white;
                              border-radius: 50%;
                              box-shadow: 0 4px 8px rgba(0,0,0,0.3), 0 0 ${isPinned ? '20px' : '0px'} ${region.color}80;
                              transition: all 0.3s ease;
                              transform: ${isPinned ? 'scale(1.3)' : 'scale(1)'};
                              animation: ${isPinned ? 'bounce-pin 0.6s ease' : 'none'};
                            ">
                              <div style="
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                width: 6px;
                                height: 6px;
                                background-color: white;
                                border-radius: 50%;
                              "></div>
                            </div>
                          </div>
                        `,
                        iconSize: [isPinned ? 40 : 24, isPinned ? 40 : 24],
                        iconAnchor: [isPinned ? 20 : 12, isPinned ? 20 : 12],
                      })

                      return (
                        <Marker
                          key={`${key}-${idx}`}
                          position={[location.lat, location.lng]}
                          icon={customIcon}
                          eventHandlers={{
                            click: () => {
                              setSelectedMarker(location)
                              setMapCenter({ lat: location.lat, lng: location.lng })
                              setMapZoom(12)
                            },
                          }}
                        >
                          <Popup>
                            <div className="p-3 min-w-[200px]">
                              <div className="flex items-start gap-3 mb-3">
                                <div
                                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                  style={{ backgroundColor: `${region.color}20` }}
                                >
                                  <svg className="w-5 h-5" style={{ color: region.color }} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-base mb-1 leading-tight" style={{ color: region.color }}>
                                    {location.name}
                                  </h4>
                                  <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium">{region.name}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                                <svg className="w-4 h-4 flex-shrink-0" style={{ color: region.color }} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span className="leading-snug">Active Auction House</span>
                              </div>
                            </div>
                          </Popup>
                        </Marker>
                      )
                    })
                  })}
                </MapContainer>

                {/* Floating Info Card */}
                {selectedRegion && (
                  <div
                    className="absolute top-4 right-4 bg-white rounded-xl shadow-2xl p-5 max-w-xs animate-slideIn pointer-events-none z-[1000] border border-gray-100"
                    style={{
                      borderLeft: `5px solid ${auctionData[selectedRegion].color}`,
                      background: `linear-gradient(135deg, white 0%, ${auctionData[selectedRegion].color}05 100%)`
                    }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${auctionData[selectedRegion].color}20` }}
                      >
                        <svg className="w-5 h-5" style={{ color: auctionData[selectedRegion].color }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1" style={{ color: auctionData[selectedRegion].color }}>
                          {auctionData[selectedRegion].name}
                        </h4>
                        <p className="text-sm text-gray-600 font-medium">
                          {auctionData[selectedRegion].locations.length} Active Locations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-snug">Click any location pin to view details</span>
                    </div>
                  </div>
                )}

                {/* Enhanced Legend */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 z-[1000] border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <h5 className="text-xs font-bold text-gray-900 tracking-wide">AUCTION REGIONS</h5>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(auctionData).map(([key, region]) => (
                      <div
                        key={key}
                        className={`flex items-center justify-between gap-3 text-xs px-2 py-1.5 rounded-lg transition-all ${
                          selectedRegion === key ? 'bg-gray-100' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full ring-2 ring-white shadow-sm"
                            style={{ backgroundColor: region.color }}
                          ></div>
                          <span className={`font-medium ${selectedRegion === key ? 'text-gray-900' : 'text-gray-600'}`}>
                            {region.name.replace(' Region', '')}
                          </span>
                        </div>
                        <span className="text-gray-400 text-[10px] font-semibold">
                          {region.locations.length}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {  
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes bounce-pin {
          0%, 100% {
            transform: scale(1.3) translateY(0);
          }
          50% {
            transform: scale(1.3) translateY(-8px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        /* Custom marker styles */
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }

        .marker-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Hover effect for markers */
        .custom-marker:hover .marker-container > div:last-child {
          transform: scale(1.2) !important;
        }
      `}</style>
    </section>
  )
}
