import { useState } from "react";

export default function SidebarFilter({ onFilterChange }: { onFilterChange: (filters: any) => void }) {
  const [filters, setFilters] = useState({
    maker: "",
    model: "",
    engineCapacity: "",
    year: "",
    condition: "new",
  });

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <aside className="w-full md:w-64 border-r border-gray-700/50 bg-transparent p-4 space-y-4 overflow-y-auto">
      {/* Header with Apply Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg text-white">Filters</h2>
        <button
          type="button"
          onClick={() => onFilterChange(filters)}
          className="bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
        >
          Apply
        </button>
      </div>

      {/* Brand/Maker */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Brand/Maker</label>
        <input
          type="text"
          placeholder="Enter brand"
          value={filters.maker}
          onChange={(e) => handleChange("maker", e.target.value)}
          className="w-full rounded-md border border-gray-600 p-2 text-sm text-white bg-gray-800/50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
        />
      </div>

      {/* Model */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Model</label>
        <input
          type="text"
          placeholder="Enter model"
          value={filters.model}
          onChange={(e) => handleChange("model", e.target.value)}
          className="w-full rounded-md border border-gray-600 p-2 text-sm text-white bg-gray-800/50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
        />
      </div>

      {/* Engine Capacity */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Engine Capacity</label>
        <input
          type="text"
          placeholder="e.g., 2000cc"
          value={filters.engineCapacity}
          onChange={(e) => handleChange("engineCapacity", e.target.value)}
          className="w-full rounded-md border border-gray-600 p-2 text-sm text-white bg-gray-800/50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
        />
      </div>

      {/* Year */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Year</label>
        <input
          type="text"
          placeholder="YYYY"
          onChange={(e) => handleChange("year", e.target.value)}
          className="w-full rounded-md border border-gray-600 p-2 text-sm text-white bg-gray-800/50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
        />
      </div>

      {/* Condition */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Condition</label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-white cursor-pointer">
            <input
              type="radio"
              name="condition"
              checked={filters.condition === "new"}
              onChange={() => handleChange("condition", "new")}
              className="w-4 h-4 accent-red-600"
            />
            <span>New</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-white cursor-pointer">
            <input
              type="radio"
              name="condition"
              checked={filters.condition === "old"}
              onChange={() => handleChange("condition", "old")}
              className="w-4 h-4 accent-red-600"
            />
            <span>Used</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
