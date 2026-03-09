import React from 'react'

const SEA_BG: React.CSSProperties = {
  backgroundImage: "url('/asset/sea.webp')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

export function InsurancePolicy() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Mobile - sea.png background section */}
        <div className="lg:hidden w-full h-[40vh] min-h-[250px]" style={SEA_BG}></div>

        {/* Desktop - Left Side - sea.png background */}
        <div className="hidden lg:block lg:w-1/2 min-h-screen" style={SEA_BG}></div>

        {/* Right Side - Full width red background with content */}
        <div className="w-full lg:w-1/2">
          <div
            className="relative min-h-screen bg-gradient-to-br from-red-700 to-red-800 py-8 sm:py-10 md:py-12 lg:py-16"
          >
          <div className="relative z-10 w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              {/* Header */}
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
                  Vehicle Insurance Policy
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-lg">
                  Your Responsibilities In Case Of Loss Or Damage
                </p>
              </div>

              {/* Insurance Steps */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10 md:mb-12">
                {/* Immediate Action Required */}
                <div className="bg-red-600/90 backdrop-blur-sm p-4 sm:p-5 md:p-6">
                  <h3 className="text-white font-bold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Immediate Action Required</h3>
                  <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed">
                    Take reasonable protective or preventive measures to minimize losses and preserve all rights against carriers, bailees, or third parties.
                  </p>
                </div>

                {/* Claim Missing Packages */}
                <div className="bg-red-500/90 backdrop-blur-sm p-4 sm:p-5 md:p-6">
                  <h3 className="text-white font-bold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Claim Missing Packages</h3>
                  <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed">
                    File claims immediately with carriers, port authorities, or other bailees for any missing packages.
                  </p>
                </div>

                {/* Document Everything */}
                <div className="bg-red-400/90 backdrop-blur-sm p-4 sm:p-5 md:p-6">
                  <h3 className="text-white font-bold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Document Everything</h3>
                  <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed">
                    Never give clean receipts in doubtful condition without written protest.
                  </p>
                </div>
              </div>

              {/* Coverage Details */}
              <div>
                <h3 className="text-white font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">Coverage Details</h3>

                {/* Coverage Items */}
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  {/* Institute Cargo Clause (A) - All Risks */}
                  <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 md:p-6 border-l-4 border-white">
                    <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">Institute Cargo Clause (A) - All Risks</h4>
                    <div className="text-xs sm:text-sm md:text-base text-white/95 space-y-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Comprehensive coverage for all risks of loss or damage including theft, shortage, and non-delivery.</span>
                      </div>
                    </div>
                  </div>

                  {/* Institute Cargo Clause (B) - Named Perils */}
                  <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 md:p-6 border-l-4 border-white">
                    <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">Institute Cargo Clause (B) - Named Perils</h4>
                    <div className="text-xs sm:text-sm md:text-base text-white/95 space-y-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Fire or explosion</span>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Vessel stranding, grounding, sinking</span>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Overturning of land conveyance</span>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Collision or contact with external objects</span>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Jettison</span>
                      </div>
                    </div>
                  </div>

                  {/* Institute Cargo Clause (C) - Named Perils (Limited) */}
                  <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 md:p-6 border-l-4 border-white">
                    <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">Institute Cargo Clause (C) - Named Perils</h4>
                    <div className="text-xs sm:text-sm md:text-base text-white/95 space-y-2">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Fire or explosion</span>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Vessel stranding, grounding, capsizing</span>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Overturning of land conveyance</span>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Collision with external objects</span>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">General average</span>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <span className="text-green-300 flex-shrink-0 font-bold text-base sm:text-lg">✓</span>
                        <span className="leading-relaxed">Jettison</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
