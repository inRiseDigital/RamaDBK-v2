import React, { useRef, useEffect, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { allCountryDetails } from './countryData';

interface Dimensions {
  width: number;
  height: number;
}

interface CountryMarker {
  id: number;
  lat: number;
  lng: number;
  name: string;
  code: string;
  size: number;
  color: string;
  countryCode?: string;
  timeDifference?: string;
  currency?: string;
  port?: string;
  shippingLine?: string;
  documents?: string;
  shippingPorts?: string;
  yearRestrictions?: string;
  mostPopularVehicles?: string;
  leftHandDrive?: string;
  rightHandDrive?: string;
  dutyAndTaxes?: string;
  documentsRequired?: string[];
  importSteps?: string[];
  eligibility?: string[];
  importRestrictions?: string[] | string;
  additionalInfo?: string;
}

const Globe3D: React.FC = (): React.ReactElement => {
  const globeEl = useRef<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [clickedMarkerId, setClickedMarkerId] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryMarker | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = (): void => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Convert country data to array for markers
  const markers = useMemo((): CountryMarker[] => {
    return Object.values(allCountryDetails).map((country: any, idx: number) => ({
      id: idx + 1,
      lat: country.lat,
      lng: country.lng,
      name: country.name,
      code: country.code,
      ...country,
      size: 0.8,
      color: 'var(--color-primary-light)'
    }));
  }, []);

  // Sort markers alphabetically
  const sortedMarkers = useMemo((): CountryMarker[] => {
    return [...markers].sort((a, b) => a.name.localeCompare(b.name));
  }, [markers]);

  // Filter markers based on search
  const filteredMarkers = useMemo((): CountryMarker[] => {
    if (!searchQuery) return sortedMarkers;
    return sortedMarkers.filter(marker =>
      marker.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [sortedMarkers, searchQuery]);

  // Initialize globe settings
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.1;
      globeEl.current.controls().enableZoom = true;
      globeEl.current.pointOfView({ altitude: 2.5 });
    }
  }, []);

  // Handle country click from search
  const handleCountryClick = (marker: CountryMarker): void => {
    setClickedMarkerId(marker.id);
    setSelectedCountry(marker);
    setSearchQuery('');
    setIsSearchOpen(false);

    if (globeEl.current) {
      globeEl.current.pointOfView(
        {
          lat: marker.lat,
          lng: marker.lng,
          altitude: 1.5
        },
        1500
      );
      // Stop auto-rotation when viewing a country
      globeEl.current.controls().autoRotate = false;
    }
  };

  // Handle marker click on globe
  const handleMarkerClick = (marker: CountryMarker): void => {
    setClickedMarkerId(marker.id);
    setSelectedCountry(marker);
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = false;
    }
  };

  // Close modal
  const closeModal = (): void => {
    setSelectedCountry(null);
    setClickedMarkerId(null);
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const searchContainer = document.getElementById('search-container-3d');
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <div className="max-w-full mx-auto h-full flex flex-col relative z-10">
        {/* Import Regulations Heading */}
        <div className="bg-white py-16">
          <div className="px-4 max-w-7xl mx-auto mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Import Regulations</h2>
          </div>
        </div>

        {/* Globe Container Box */}
        <div className="flex-1 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden relative flex items-center justify-center">
          {/* Background Text Behind Earth in Universe/Stars */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="text-center opacity-15">
              <h1 className="text-[12rem] font-black leading-none tracking-wider">
                <span className="text-white">IMPORT REGULATIONS</span>
              </h1>
            </div>
          </div>

          {/* Search Bar - Top Left Corner */}
          <div id="search-container-3d" className="absolute top-6 left-6 z-[1000] max-w-xs">
            <input
              type="text"
              placeholder="🔍 Search countries..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full px-4 py-2.5 text-sm text-black font-normal border border-gray-300 rounded-lg bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-150 placeholder-gray-400"
            />

            {/* Dropdown Countries List */}
            {isSearchOpen && (
              <div
                className="absolute top-full left-0 right-0 mt-2 rounded-lg shadow-2xl max-h-64 overflow-hidden border border-gray-300 z-[2000]"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div className="overflow-y-auto max-h-64" style={{ backgroundColor: '#ffffff' }}>
                  {filteredMarkers.length > 0 ? (
                    <ul className="divide-y divide-gray-100" style={{ backgroundColor: '#ffffff' }}>
                      {filteredMarkers.map((marker) => (
                        <li
                          key={marker.id}
                          onClick={() => handleCountryClick(marker)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-100 flex items-center gap-2"
                          style={{ backgroundColor: '#ffffff' }}
                        >
                          <img
                            src={`https://flagcdn.com/w40/${marker.code}.png`}
                            alt={marker.name}
                            className="w-6 h-4 flex-shrink-0 rounded-sm shadow-sm"
                          />
                          <span className="text-sm font-normal text-gray-700 hover:text-black">
                            {marker.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 text-center py-6" style={{ backgroundColor: '#ffffff' }}>
                      No countries found
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 3D Globe */}
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

            htmlElementsData={markers}
            htmlLat="lat"
            htmlLng="lng"
            htmlAltitude={0.005}
            htmlElement={(d: any) => {
              const el = document.createElement('div');
              const isClicked = clickedMarkerId === d.id;

              el.innerHTML = `
                <div class="flag-container" style="position: relative;">
                  <div class="flag-marker" style="
                    cursor: pointer;
                    transition: all 0.3s ease;
                    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.4));
                    ${isClicked ? 'transform: scale(1.3);' : ''}
                  "
                  onmouseover="this.style.transform='scale(1.3)'"
                  onmouseout="this.style.transform='${isClicked ? 'scale(1.3)' : 'scale(1)'}'">
                    <img
                      src="https://flagcdn.com/w40/${d.code}.png"
                      style="
                        width: 40px;
                        height: 30px;
                        border-radius: 6px;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
                        object-fit: cover;
                        display: block;
                      "
                      alt="${d.name}"
                    />
                  </div>
                </div>
              `;

              el.style.pointerEvents = 'auto';
              el.style.cursor = 'pointer';
              el.onclick = () => handleMarkerClick(d);

              return el;
            }}

            atmosphereColor="#ffffff"
            atmosphereAltitude={0.25}

            width={dimensions.width}
            height={dimensions.height - 70}
          />
        </div>
      </div>

      {/* Modal Popup for Country Details */}
      {selectedCountry && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-[10000] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden border-2 border-gray-300"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header - Sticky */}
            <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b-2 border-gray-300">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl md:text-2xl font-bold text-black">Import Regulations</h2>
                <button
                  onClick={closeModal}
                  className="bg-black text-white hover:bg-gray-800 text-xl font-bold w-10 h-10 flex items-center justify-center rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                >
                  ×
                </button>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={`https://flagcdn.com/48x36/${selectedCountry.code}.png`}
                  alt={selectedCountry.name}
                  className="rounded shadow-md"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{selectedCountry.name}</h3>
                  <p className="text-sm text-gray-600">{selectedCountry.countryCode || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(85vh - 200px)' }}>
              <div className="space-y-4 text-sm">
                {selectedCountry.timeDifference && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Time Difference</p>
                    <p className="text-gray-600">{selectedCountry.timeDifference}</p>
                  </div>
                )}

                {selectedCountry.currency && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Currency</p>
                    <p className="text-gray-600">{selectedCountry.currency}</p>
                  </div>
                )}

                {selectedCountry.port && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Port</p>
                    <p className="text-gray-600">{selectedCountry.port}</p>
                  </div>
                )}

                {selectedCountry.shippingLine && selectedCountry.shippingLine !== '---' && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Shipping Line</p>
                    <p className="text-gray-600">{selectedCountry.shippingLine}</p>
                  </div>
                )}

                {selectedCountry.documents && selectedCountry.documents !== '---' && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Documents</p>
                    <p className="text-gray-600">{selectedCountry.documents}</p>
                  </div>
                )}

                {selectedCountry.shippingPorts && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Shipping Ports</p>
                    <p className="text-gray-600">{selectedCountry.shippingPorts}</p>
                  </div>
                )}

                {selectedCountry.yearRestrictions && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Year Restrictions</p>
                    <p className="text-gray-600">{selectedCountry.yearRestrictions}</p>
                  </div>
                )}

                {selectedCountry.mostPopularVehicles && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Most Popular Vehicles</p>
                    <p className="text-gray-600">{selectedCountry.mostPopularVehicles}</p>
                  </div>
                )}

                {selectedCountry.leftHandDrive && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Left-Hand Drive</p>
                    <p className="text-gray-600">{selectedCountry.leftHandDrive}</p>
                  </div>
                )}

                {selectedCountry.rightHandDrive && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Right-Hand Drive</p>
                    <p className="text-gray-600">{selectedCountry.rightHandDrive}</p>
                  </div>
                )}

                {selectedCountry.dutyAndTaxes && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Duty and Taxes</p>
                    <p className="text-gray-600">{selectedCountry.dutyAndTaxes}</p>
                  </div>
                )}

                {selectedCountry.documentsRequired && Array.isArray(selectedCountry.documentsRequired) && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Documents Required</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {selectedCountry.documentsRequired.map((doc: string, idx: number) => (
                        <li key={idx} className="text-xs">{doc}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCountry.importSteps && Array.isArray(selectedCountry.importSteps) && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Import Steps</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {selectedCountry.importSteps.map((step: string, idx: number) => (
                        <li key={idx} className="text-xs">{step}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCountry.eligibility && Array.isArray(selectedCountry.eligibility) && (
                  <div>
                    <p className="font-semibold text-blue-600 mb-1">Eligibility for Importing</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {selectedCountry.eligibility.map((item: string, idx: number) => (
                        <li key={idx} className="text-xs">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCountry.importRestrictions && (
                  <div>
                    <p className="font-semibold text-red-600 mb-1">Import Restrictions</p>
                    {Array.isArray(selectedCountry.importRestrictions) ? (
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {selectedCountry.importRestrictions.map((restriction: string, idx: number) => (
                          <li key={idx} className="text-xs">{restriction}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">{selectedCountry.importRestrictions}</p>
                    )}
                  </div>
                )}

                {selectedCountry.additionalInfo && (
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Additional Information</p>
                    <p className="text-gray-600">{selectedCountry.additionalInfo}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer - Sticky */}
            <div className="sticky bottom-0 bg-white px-6 py-4 border-t-2 border-gray-300">
              <button
                onClick={closeModal}
                className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Globe3D;
