import { useState, useCallback, memo } from "react";
import { router } from "@inertiajs/react";

interface FilterOptions {
  makes: string[];
  types: string[];
  fuels: string[];
  transmissions: string[];
  steerings: string[];
}

interface Filters {
  type: string;
  make: string;
  fuel: string;
  transmission: string;
  steering: string;
  search: string;
}

interface Props {
  filterOptions: FilterOptions;
  filters: Filters;
  basePath?: string;
}

const StockFilter = memo(function StockFilter({ filterOptions, filters, basePath = '/stock-list' }: Props) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const applyFilter = useCallback((key: string, value: string) => {
    const newFilters = { ...filters, [key]: value, page: '' };
    const params = Object.fromEntries(
      Object.entries(newFilters).filter(([, v]) => v !== '' && v !== undefined)
    );
    router.get(basePath, params, { preserveState: true, preserveScroll: true });
    setOpenDropdown(null);
  }, [filters, basePath]);

  const clearFilters = useCallback(() => {
    router.get(basePath, {}, { preserveState: true });
  }, [basePath]);

  const toggleDropdown = useCallback((dropdown: string) => {
    setOpenDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const hasActiveFilters = Object.entries(filters).some(([k, v]) => k !== 'search' && v);

  const FilterDropdown = ({
    label,
    options,
    value,
    filterKey,
  }: {
    label: string;
    options: string[];
    value: string;
    filterKey: string;
  }) => {
    const isOpen = openDropdown === filterKey;

    return (
      <div className="border-b border-gray-600 pb-2">
        <button
          type="button"
          onClick={() => toggleDropdown(filterKey)}
          className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-200 py-3 hover:text-white"
        >
          <span>{value || label}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-1 max-h-52 overflow-y-auto">
            <button
              type="button"
              onClick={() => applyFilter(filterKey, '')}
              className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-700 ${!value ? 'bg-red-600 text-white' : 'text-gray-200'}`}
            >
              All
            </button>
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => applyFilter(filterKey, option)}
                className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-700 ${value === option ? 'bg-red-600 text-white' : 'text-gray-200'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <aside className="w-full md:w-64 border-r border-gray-700 p-4 overflow-y-auto text-white">
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full mb-4 py-2 px-4 text-sm bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg hover:bg-red-600/30 transition-colors"
        >
          Clear All Filters
        </button>
      )}

      <FilterDropdown
        label="All Makes"
        filterKey="make"
        value={filters.make}
        options={filterOptions.makes}
      />

      <FilterDropdown
        label="All Types"
        filterKey="type"
        value={filters.type}
        options={filterOptions.types}
      />

      <FilterDropdown
        label="All Fuel"
        filterKey="fuel"
        value={filters.fuel}
        options={filterOptions.fuels}
      />

      <FilterDropdown
        label="Transmission"
        filterKey="transmission"
        value={filters.transmission}
        options={filterOptions.transmissions}
      />

      <FilterDropdown
        label="Steering"
        filterKey="steering"
        value={filters.steering}
        options={filterOptions.steerings}
      />
    </aside>
  );
});

export default StockFilter;
