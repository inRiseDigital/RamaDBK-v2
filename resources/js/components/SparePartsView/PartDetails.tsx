import { useState } from 'react';
import { SparePartDetail } from '../../types/spareParts';

export default function PartDetails({ part }: { part: SparePartDetail }) {
  const [openExplore, setOpenExplore] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-white/10 p-4 sm:p-6 backdrop-blur-md shadow-2xl border border-white/20 text-white">
      {/* Title */}
      <h1 className="mb-1 text-2xl sm:text-3xl font-semibold text-white drop-shadow-lg">
        {part.name}
      </h1>

      {/* Part number & Stock */}
      <div className="flex flex-wrap gap-3 mb-4 mt-2">
        {part.partNumber && (
          <span className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-gray-300 font-mono">
            Part# {part.partNumber}
          </span>
        )}
        {part.stockNo && (
          <span className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-gray-300 font-mono">
            Stock# {part.stockNo}
          </span>
        )}
      </div>

      {/* Category */}
      {(part.category || part.subCategory) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {part.category && (
            <span className="px-3 py-1 text-xs rounded-full bg-red-600/20 text-red-300 border border-red-600/30">
              {part.category}
            </span>
          )}
          {part.subCategory && (
            <span className="px-3 py-1 text-xs rounded-full bg-blue-600/20 text-blue-300 border border-blue-600/30">
              {part.subCategory}
            </span>
          )}
        </div>
      )}

      {/* Part Specs from vehicle_details */}
      <div className="mb-4 space-y-2 text-sm text-white">
        {part.make && (
          <div className="flex justify-between">
            <span className="text-gray-400">Make:</span>
            <span className="font-medium">{part.make}</span>
          </div>
        )}
        {part.model && (
          <div className="flex justify-between">
            <span className="text-gray-400">Model:</span>
            <span className="font-medium">{part.model}</span>
          </div>
        )}
        {part.engineCc && (
          <div className="flex justify-between">
            <span className="text-gray-400">Engine:</span>
            <span className="font-medium">{part.engineCc}</span>
          </div>
        )}
        {part.year && (
          <div className="flex justify-between">
            <span className="text-gray-400">Year:</span>
            <span className="font-medium">{part.year}</span>
          </div>
        )}
        {part.fuel && (
          <div className="flex justify-between">
            <span className="text-gray-400">Fuel:</span>
            <span className="font-medium">{part.fuel}</span>
          </div>
        )}
        {part.transmission && (
          <div className="flex justify-between">
            <span className="text-gray-400">Transmission:</span>
            <span className="font-medium">{part.transmission}</span>
          </div>
        )}
        {part.color && (
          <div className="flex justify-between">
            <span className="text-gray-400">Color:</span>
            <span className="font-medium">{part.color}</span>
          </div>
        )}
        {part.mileage && (
          <div className="flex justify-between">
            <span className="text-gray-400">Mileage:</span>
            <span className="font-medium">{part.mileage}</span>
          </div>
        )}
      </div>

      {/* Keywords */}
      {part.keywords && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {part.keywords.split(',').map((kw, i) => kw.trim() && (
              <span key={i} className="px-2 py-0.5 text-[10px] rounded bg-white/5 text-gray-400 border border-white/10">
                {kw.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Explore Section */}
      <div className="border-t border-gray-500/50 py-3">
        <button
          onClick={() => setOpenExplore(!openExplore)}
          className="flex w-full items-center justify-between font-medium text-gray-100 hover:text-red-300 transition"
        >
          <span>Description</span>
          <span className={`transition-transform duration-300 ${openExplore ? 'rotate-90' : ''}`}>→</span>
        </button>
        {openExplore && part.description && (
          <div className="mt-3 pl-2 text-sm text-gray-300 whitespace-pre-line">
            {part.description}
          </div>
        )}
      </div>

      {/* Shipping Section */}
      <div className="border-t border-gray-500/50 py-3">
        <button
          onClick={() => setOpenShipping(!openShipping)}
          className="flex w-full items-center justify-between font-medium text-gray-100 hover:text-red-300 transition"
        >
          <span>Shipping</span>
          <span className={`transition-transform duration-300 ${openShipping ? 'rotate-90' : ''}`}>→</span>
        </button>

        {openShipping && (
          <div className="mt-4 space-y-3 text-sm text-gray-200">
            <div>
              <label className="text-gray-300">Country</label>
              <select className="mt-1 block w-full rounded-md bg-transparent border border-gray-400 p-2 text-sm text-white focus:outline-none">
                <option>Select Country</option>
              </select>
            </div>
            <div>
              <label className="text-gray-300">Port</label>
              <select className="mt-1 block w-full rounded-md bg-transparent border border-gray-400 p-2 text-sm text-white focus:outline-none">
                <option>Select Port</option>
              </select>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-600/50">
              <span>Part Price:</span>
              <strong>{part.price > 0 ? `¥${part.price.toLocaleString()}` : 'Contact for price'}</strong>
            </div>
            <div className="flex justify-between">
              <span>Freight:</span>
              <span className="text-gray-400">Based on destination</span>
            </div>
            <div className="flex justify-between">
              <span>Insurance:</span>
              <span className="text-gray-400">Based on destination</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
