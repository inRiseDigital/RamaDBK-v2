import { useState } from 'react';

interface VehicleDetailsProps {
  vehicle: {
    name: string;
    mileage: string;
    transmission: string;
    driveSide: string;
    grade: string;
    engine: string;
    regYear: string;
    stockNo?: string;
    fuel?: string;
    seats?: string;
    drive?: string;
    doors?: string;
  };
}

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const [showExplore, setShowExplore] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 sm:p-8 shadow-lg border border-white/20">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">{vehicle.name}</h1>

      <div className="space-y-4">
        <DetailRow label="Mileage" value={vehicle.mileage} />
        <DetailRow label="Transmission" value={vehicle.transmission} />
        <DetailRow label="Drive Side" value={vehicle.driveSide} />
        <DetailRow label="Grade" value={vehicle.grade} />
        <DetailRow label="Engine" value={vehicle.engine} />
        <DetailRow label="Reg. Year" value={vehicle.regYear} />
      </div>

      {/* Explore Button */}
      <div className="mt-6">
        <button
          onClick={() => setShowExplore(!showExplore)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
        >
          <span className="text-white font-medium">Explore</span>
          <svg className={`w-5 h-5 text-white transform transition-transform ${showExplore ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Explore Section - Collapsible */}
        {showExplore && (
          <div className="mt-4 space-y-3 p-4 bg-white/5 rounded-lg border border-white/10">
            {vehicle.stockNo && <DetailRow label="Stock No" value={vehicle.stockNo} />}
            {vehicle.fuel && <DetailRow label="Fuel" value={vehicle.fuel} />}
            {vehicle.seats && <DetailRow label="Seats" value={vehicle.seats} />}
            {vehicle.drive && <DetailRow label="Drive" value={vehicle.drive} />}
            {vehicle.doors && <DetailRow label="Doors" value={vehicle.doors} />}
          </div>
        )}
      </div>

      {/* Shipping Section */}
      <div className="mt-3">
        <button
          onClick={() => setShowShipping(!showShipping)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition-colors"
        >
          <span className="text-white font-medium">Shipping</span>
          <svg className={`w-5 h-5 text-white transform transition-transform ${showShipping ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Shipping Form - Collapsible */}
        {showShipping && (
          <div className="mt-4 space-y-4 p-4 bg-white/5 rounded-lg border border-white/10">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Country</label>
              <select className="w-full rounded-md border border-white/30 p-2 text-sm bg-white/10 text-white">
                <option>Select Country</option>
                <option>USA</option>
                <option>Japan</option>
                <option>UK</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Port</label>
              <select className="w-full rounded-md border border-white/30 p-2 text-sm bg-white/10 text-white">
                <option>Select Port</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">FOB Price</label>
              <input type="text" value="9,737,000" readOnly className="w-full rounded-md border border-white/30 p-2 text-sm bg-white/5 text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Freight Amount</label>
              <input type="text" value="0 JPY" readOnly className="w-full rounded-md border border-white/30 p-2 text-sm bg-white/5 text-white" />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="insurance" className="w-4 h-4" />
              <label htmlFor="insurance" className="text-sm text-white">Need Insurance</label>
              <span className="text-sm text-white/50 ml-auto">---</span>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="inspection" className="w-4 h-4" />
              <label htmlFor="inspection" className="text-sm text-white">Need Inspection</label>
              <span className="text-sm text-white/50 ml-auto">---</span>
            </div>
          </div>
        )}
      </div>

      {/* Final Explore Button */}
      <div className="mt-6">
        <button className="w-full px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">
          Explore →
        </button>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/20">
      <span className="text-white/80 font-medium">{label}</span>
      <span className="text-white font-semibold">{value}</span>
    </div>
  );
}
