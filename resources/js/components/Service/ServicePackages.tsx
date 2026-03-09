const NOISE_OVERLAY_05: React.CSSProperties = {
  opacity: 0.5,
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat',
  mixBlendMode: 'overlay' as const,
};

const NOISE_OVERLAY_03: React.CSSProperties = {
  ...NOISE_OVERLAY_05,
  opacity: 0.3,
};

const BLACK_OVERLAY: React.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
};

const CARD1_STYLE: React.CSSProperties = { zIndex: 4, left: 'calc(50% - 500px)', backgroundColor: '#4C4E4D' };
const CARD2_STYLE: React.CSSProperties = { zIndex: 3, left: 'calc(50% - 260px)', backgroundColor: '#7F95AC', boxShadow: 'inset 0 0 11.1px rgba(0, 0, 0, 0.3), 0 20px 60px rgba(0, 0, 0, 0.4)' };
const CARD3_STYLE: React.CSSProperties = { zIndex: 2, left: 'calc(50% - 20px)', backgroundColor: '#A0C4BF' };
const CARD4_STYLE: React.CSSProperties = { zIndex: 1, left: 'calc(50% + 220px)', backgroundColor: '#CD2026' };

export function ServicePackages() {
  return (
    <div className="w-full font-['Roboto_Flex',sans-serif] bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout - Overlapping Cards */}
        <div className="hidden lg:flex justify-center items-start relative h-[600px]">
          {/* Specialized Services - Dark Gray */}
          <div
            className="absolute shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 pl-12 text-white w-[280px] transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            style={CARD1_STYLE}
          >
            <div className="absolute inset-0 pointer-events-none z-0" style={NOISE_OVERLAY_05} />
            <div className="absolute inset-0 pointer-events-none z-0" style={BLACK_OVERLAY} />
            <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-3 relative z-10">Specialized Services</h2>
            <ul className="space-y-2.5 text-sm relative z-10">
              <li className="flex items-start"><span className="mr-2">•</span><span>Engine Oil & Filter Change</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Engine Flush</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Brake Fluid Change</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>ATF Change</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Manual Gear Oil Change</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Leather Care</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Corrosion Protection</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Fuel System Clearing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Injector Filter Change</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Decarbonizing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Engine Scanning</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Radiator Coolant Flush And Replacement</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Wheel Alingment</span></li>
            </ul>
          </div>

          {/* Lubrication Packages - Blue Gray */}
          <div
            className="absolute shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 pl-12 text-white w-[280px] transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            style={CARD2_STYLE}
          >
            <div className="absolute inset-0 pointer-events-none z-0" style={NOISE_OVERLAY_03} />
            <div className="absolute inset-0 pointer-events-none z-0" style={BLACK_OVERLAY} />
            <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-3 relative z-10">Lubrication Packages</h2>
            <ul className="space-y-2.5 text-sm relative z-10">
              <li className="flex items-start"><span className="mr-2">•</span><span>Lubrication</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Under Carriage Degreasing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Detail Wash</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Vaccum Floor / Seats & Truck</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Windscreen & Glass Cleaning</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Tyre & Dashboard Dressing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Exterior Waxing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Visual Safety Check</span></li>
            </ul>
          </div>

          {/* Car Wash Packages - Teal */}
          <div
            className="absolute shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 pl-12 text-white w-[280px] transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            style={CARD3_STYLE}
          >
            <div className="absolute inset-0 pointer-events-none z-0" style={NOISE_OVERLAY_05} />
            <div className="absolute inset-0 pointer-events-none z-0" style={BLACK_OVERLAY} />
            <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-3 relative z-10">Car Wash Packages</h2>
            <ul className="space-y-2.5 text-sm relative z-10">
              <li className="flex items-start"><span className="mr-2">•</span><span>Quick Wash</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Detail Wash</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Wash & Wax</span></li>
            </ul>
          </div>

          {/* Auto Detailing Packages - Red */}
          <div
            className="absolute shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 pl-12 text-white w-[280px] transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            style={CARD4_STYLE}
          >
            <div className="absolute inset-0 pointer-events-none z-0" style={NOISE_OVERLAY_05} />
            <div className="absolute inset-0 pointer-events-none z-0" style={BLACK_OVERLAY} />
            <h2 className="text-2xl font-bold mb-6 border-b border-white/20 pb-3 relative z-10">Auto Detailing Packages</h2>
            <ul className="space-y-2.5 text-sm relative z-10">
              <li className="flex items-start"><span className="mr-2">•</span><span>Interior & Exterior Detailing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Total Amount</span></li>
            </ul>
          </div>
        </div>

        {/* Mobile & Tablet Layout - Stacked Cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Specialized Services */}
          <div
            className="shadow-2xl p-6 pl-10 text-white relative overflow-hidden"
            style={{ backgroundColor: '#4C4E4D' }}
          >
            <div className="absolute inset-0 pointer-events-none z-0" style={NOISE_OVERLAY_05} />
            <div className="absolute inset-0 pointer-events-none z-0" style={BLACK_OVERLAY} />
            <h2 className="text-xl md:text-2xl font-bold mb-4 border-b border-white/20 pb-3 relative z-10">Specialized Services</h2>
            <ul className="space-y-2 text-sm relative z-10">
              <li className="flex items-start"><span className="mr-2">•</span><span>Engine Oil & Filter Change</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Engine Flush</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Brake Fluid Change</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>ATF Change</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Manual Gear Oil Change</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Leather Care</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Corrosion Protection</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Fuel System Clearing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Injector Filter Change</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Decarbonizing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Engine Scanning</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Radiator Coolant Flush And Replacement</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Wheel Alingment</span></li>
            </ul>
          </div>

          {/* Lubrication Packages */}
          <div
            className="shadow-2xl p-6 pl-10 text-white relative overflow-hidden"
            style={{ backgroundColor: '#7F95AC', boxShadow: 'inset 0 0 11.1px rgba(0, 0, 0, 0.3)' }}
          >
            <div className="absolute inset-0 pointer-events-none z-0" style={NOISE_OVERLAY_03} />
            <div className="absolute inset-0 pointer-events-none z-0" style={BLACK_OVERLAY} />
            <h2 className="text-xl md:text-2xl font-bold mb-4 border-b border-white/20 pb-3 relative z-10">Lubrication Packages</h2>
            <ul className="space-y-2 text-sm relative z-10">
              <li className="flex items-start"><span className="mr-2">•</span><span>Lubrication</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Under Carriage Degreasing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Detail Wash</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Vaccum Floor / Seats & Truck</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Windscreen & Glass Cleaning</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Tyre & Dashboard Dressing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Exterior Waxing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Visual Safety Check</span></li>
            </ul>
          </div>

          {/* Car Wash Packages */}
          <div
            className="shadow-2xl p-6 pl-10 text-white relative overflow-hidden"
            style={{ backgroundColor: '#A0C4BF' }}
          >
            <div className="absolute inset-0 pointer-events-none z-0" style={NOISE_OVERLAY_05} />
            <div className="absolute inset-0 pointer-events-none z-0" style={BLACK_OVERLAY} />
            <h2 className="text-xl md:text-2xl font-bold mb-4 border-b border-white/20 pb-3 relative z-10">Car Wash Packages</h2>
            <ul className="space-y-2 text-sm relative z-10">
              <li className="flex items-start"><span className="mr-2">•</span><span>Quick Wash</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Detail Wash</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Wash & Wax</span></li>
            </ul>
          </div>

          {/* Auto Detailing Packages */}
          <div
            className="shadow-2xl p-6 pl-10 text-white relative overflow-hidden"
            style={{ backgroundColor: '#CD2026' }}
          >
            <div className="absolute inset-0 pointer-events-none z-0" style={NOISE_OVERLAY_05} />
            <div className="absolute inset-0 pointer-events-none z-0" style={BLACK_OVERLAY} />
            <h2 className="text-xl md:text-2xl font-bold mb-4 border-b border-white/20 pb-3 relative z-10">Auto Detailing Packages</h2>
            <ul className="space-y-2 text-sm relative z-10">
              <li className="flex items-start"><span className="mr-2">•</span><span>Interior & Exterior Detailing</span></li>
              <li className="flex items-start"><span className="mr-2">•</span><span>Total Amount</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
