import React, { useState, useCallback } from 'react';
import { router, usePage } from '@inertiajs/react';
import Navbar from '@/components/Navigation/NavBar';

interface SparePart {
  id: number;
  stockNo: number;
  image: string | null;
  name: string;
  partNumber: string;
  description: string;
  category: string;
  subCategory: string;
  keywords: string;
  price: number;
}

interface Category {
  id: number;
  name: string;
  count: number;
}

interface SubCategory {
  id: number;
  name: string;
  count: number;
}

interface Pagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

interface Filters {
  search: string;
  main_category_id: string;
  sub_category_id: string;
}

interface PageProps {
  spareParts?: SparePart[];
  categories?: Category[];
  subCategories?: SubCategory[];
  pagination?: Pagination;
  filters?: Filters;
  [key: string]: any;
}

function PartImage({ src, alt }: { src: string | null; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

function Parts() {
  const { props } = usePage<PageProps>();

  const spareParts = props.spareParts || [];
  const categories = props.categories || [];
  const subCategories = props.subCategories || [];
  const pagination = props.pagination || { current_page: 1, last_page: 1, per_page: 24, total: 0 };
  const filters = props.filters || { search: '', main_category_id: '', sub_category_id: '' };

  const [searchInput, setSearchInput] = useState(filters.search);

  const navigate = useCallback((params: Record<string, string>) => {
    const clean = Object.fromEntries(Object.entries(params).filter(([, v]) => v !== '' && v !== undefined));
    router.get('/spare-parts', clean, { preserveState: true, preserveScroll: true });
  }, []);

  const handleSearch = useCallback(() => {
    navigate({ ...filters, search: searchInput, page: '' });
  }, [filters, searchInput, navigate]);

  const handleCategoryFilter = (categoryId: number) => {
    const newId = String(categoryId) === filters.main_category_id ? '' : String(categoryId);
    navigate({ search: filters.search, main_category_id: newId, sub_category_id: '' });
  };

  const handleSubCategoryFilter = (subCatId: number) => {
    const newId = String(subCatId) === filters.sub_category_id ? '' : String(subCatId);
    navigate({ ...filters, sub_category_id: newId, page: '' });
  };

  const clearFilters = () => {
    setSearchInput('');
    router.get('/spare-parts', {}, { preserveState: true });
  };

  const goToPage = (page: number) => {
    navigate({ ...filters, page: String(page) });
  };

  const hasActiveFilters = filters.search || filters.main_category_id || filters.sub_category_id;
  const activeCategoryName = categories.find(c => String(c.id) === filters.main_category_id)?.name;

  return (
    <div className="overflow-hidden relative text-white bg-[linear-gradient(45deg,_oklab(1%_0.013_0.01),_oklab(20.5%_0.11_0.066),_oklab(0%_0_0),_oklab(14.9%_0.032_0.013),_oklab(0%_0_0))] w-full min-h-screen pb-24 flex flex-col items-center justify-start">
      <Navbar />

      <div className='w-full max-w-7xl px-4 pt-24'>
        {/* Header with search */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-6 gap-4'>
          <div className="px-2">
            <h1 className='text-2xl lg:text-3xl font-bold'>Spare Parts</h1>
            <p className='text-sm text-gray-400 mt-1'>{pagination.total.toLocaleString()} parts found</p>
          </div>
          <div className='flex items-center gap-2'>
            <div className='relative'>
              <input
                type="text"
                placeholder='Search parts...'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className='w-[250px] lg:w-[350px] border border-white/20 rounded-lg placeholder-gray-400 p-2.5 pr-10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm'
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:text-white text-gray-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-3 py-2.5 text-sm bg-red-600/20 text-red-400 border border-red-600/30 rounded-lg hover:bg-red-600/30 transition-colors whitespace-nowrap"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="w-full mb-4 px-2">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => navigate({ search: filters.search })}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !filters.main_category_id
                  ? 'bg-red-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  String(cat.id) === filters.main_category_id
                    ? 'bg-red-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {cat.name} <span className="text-xs opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sub-category chips (when a main category is selected) */}
        {subCategories.length > 0 && (
          <div className="w-full mb-6 px-2">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => navigate({ ...filters, sub_category_id: '' })}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  !filters.sub_category_id
                    ? 'bg-white/25 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                All {activeCategoryName}
              </button>
              {subCategories.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => handleSubCategoryFilter(sc.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    String(sc.id) === filters.sub_category_id
                      ? 'bg-white/25 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {sc.name} ({sc.count})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Parts Grid */}
        <div className='w-full px-2'>
          {spareParts.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              {spareParts.map((part) => (
                <div
                  key={part.id}
                  onClick={() => router.visit(`/sparepart/${part.id}`)}
                  className='flex flex-col rounded-xl overflow-hidden cursor-pointer border border-white/15 hover:border-white/30 transition-all duration-200 hover:shadow-lg hover:shadow-black/20'
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Image */}
                  <div className='h-44 w-full overflow-hidden'>
                    <PartImage src={part.image} alt={part.name} />
                  </div>

                  {/* Content */}
                  <div className='flex flex-col flex-1 p-4'>
                    {/* Name */}
                    <h3 className='text-sm font-semibold text-white mb-1 line-clamp-2 leading-tight'>
                      {part.name}
                    </h3>

                    {/* Part number */}
                    {part.partNumber && (
                      <p className='text-xs text-gray-400 mb-2 font-mono'>#{part.partNumber}</p>
                    )}

                    {/* Description */}
                    {part.description && (
                      <p className='text-xs text-gray-400 mb-3 line-clamp-2 leading-relaxed'>
                        {part.description}
                      </p>
                    )}

                    {/* Category tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {part.category && (
                        <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-gray-300 border border-white/10">
                          {part.category}
                        </span>
                      )}
                      {part.subCategory && (
                        <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-gray-300 border border-white/10">
                          {part.subCategory}
                        </span>
                      )}
                    </div>

                    {/* Price + Action */}
                    <div className="mt-auto flex items-center justify-between">
                      {part.price > 0 ? (
                        <span className="text-lg font-bold text-white">
                          ¥{part.price.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-400">Contact for price</span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.visit(`/sparepart/${part.id}`);
                        }}
                        className="px-3 py-1.5 text-xs bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors font-medium"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-lg">No parts found</p>
              <p className="text-sm mt-1">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {pagination.last_page > 1 && (
          <div className="flex items-center justify-center gap-2 py-10">
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
  );
}

export default Parts;
