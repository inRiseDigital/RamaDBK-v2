import { useState, useEffect, useCallback } from "react";
import { usePage, router } from '@inertiajs/react';
import StockFilter from "../../components/StockList/StockFilter";
import StockGrid from "../../components/StockList/StockGrid";
import Navbar from '@/components/Navigation/NavBar';

interface Vehicle {
  id: number;
  name: string;
  image: string | null;
  price: number;
  originalPrice: number;
  specialPrice?: number;
  mileage: string;
  fuel: string;
  transmission: string;
  make: string;
  model: string;
  type: string;
  year: number | null;
  engineCc: string | null;
  color: string | null;
  steering: string | null;
  stockNo: string | null;
}

interface Pagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

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

interface StockListProps {
  vehicles?: Vehicle[];
  pagination?: Pagination;
  filterOptions?: FilterOptions;
  filters?: Filters;
  inventoryType?: string;
  routeName?: string;
  [key: string]: any;
}

export default function StockList() {
  const { props } = usePage<StockListProps>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(props.filters?.search || '');

  const vehicles = props.vehicles || [];
  const pagination = props.pagination || { current_page: 1, last_page: 1, per_page: 30, total: 0 };
  const filterOptions = props.filterOptions || { makes: [], types: [], fuels: [], transmissions: [], steerings: [] };
  const filters = props.filters || { type: '', make: '', fuel: '', transmission: '', steering: '', search: '' };
  const inventoryType = props.inventoryType || 'all';

  const routePathMap: Record<string, string> = {
    all: '/stock-list',
    discounted: '/stock-list/discounted',
    aucnet: '/stock-list/aucnet',
  };
  const basePath = routePathMap[inventoryType] || '/stock-list';

  useEffect(() => {
    const handleMenuToggle = (e: CustomEvent) => {
      setIsMenuOpen(e.detail.isOpen);
    };
    window.addEventListener('menuToggle' as any, handleMenuToggle);
    return () => window.removeEventListener('menuToggle' as any, handleMenuToggle);
  }, []);

  const handleSearch = useCallback(() => {
    const params = Object.fromEntries(
      Object.entries({ ...filters, search: searchInput, page: '' }).filter(([, v]) => v !== '' && v !== undefined)
    );
    router.get(basePath, params, { preserveState: true, preserveScroll: true });
  }, [filters, searchInput, basePath]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  const goToPage = (page: number) => {
    const params = Object.fromEntries(
      Object.entries({ ...filters, page: String(page) }).filter(([, v]) => v !== '' && v !== undefined)
    );
    router.get(basePath, params, { preserveState: true, preserveScroll: false });
  };

  return (
    <div className="stocklist-gradient-bg min-h-screen pb-24">
      <Navbar />

      <div className="flex flex-col md:flex-row">
        <div className={`${isMenuOpen ? 'hidden md:block' : ''}`}>
          <StockFilter filterOptions={filterOptions} filters={filters} basePath={basePath} />
        </div>

        <div className="flex-1">
          {/* Header */}
          <div className="bg-transparent border-b border-gray-700 p-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white">
                  {inventoryType === 'discounted' ? 'Discounted Vehicles' : inventoryType === 'aucnet' ? 'Aucnet Vehicles' : 'Vehicles'}
                </h1>
                <p className="text-sm text-gray-400 mt-1">{pagination.total.toLocaleString()} vehicles found</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search vehicle"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="rounded-lg border border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
                />
                <button
                  onClick={handleSearch}
                  className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="p-4 sm:p-6">
            <StockGrid vehicles={vehicles} />
          </div>

          {/* Pagination */}
          {pagination.last_page > 1 && (
            <div className="flex items-center justify-center gap-2 p-6">
              <button
                onClick={() => goToPage(pagination.current_page - 1)}
                disabled={pagination.current_page === 1}
                className="px-3 py-2 text-sm rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {Array.from({ length: Math.min(pagination.last_page, 7) }, (_, i) => {
                let page: number;
                if (pagination.last_page <= 7) {
                  page = i + 1;
                } else if (pagination.current_page <= 4) {
                  page = i + 1;
                } else if (pagination.current_page >= pagination.last_page - 3) {
                  page = pagination.last_page - 6 + i;
                } else {
                  page = pagination.current_page - 3 + i;
                }

                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 text-sm rounded-lg border ${
                      page === pagination.current_page
                        ? 'bg-red-600 border-red-600 text-white'
                        : 'border-gray-600 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => goToPage(pagination.current_page + 1)}
                disabled={pagination.current_page === pagination.last_page}
                className="px-3 py-2 text-sm rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
