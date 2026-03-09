import { useState, useEffect } from "react";
import { usePage } from '@inertiajs/react';
import SidebarFilter from "../../components/SparePartsCategory/SidebarFilter";
import SparePartsGrid from "../../components/SparePartsCategory/SparePartsGrid";
import Navbar from '@/components/Navigation/NavBar';

// Define the TypeScript interface for the props
interface CategoryPageProps {
  categoryData?: {
    id: string | number;
    categoryName: string;
    parts: Array<{
      id: number;
      name: string;
      image: string;
      title: string;
      description: string;
    }>;
  };
  [key: string]: any; // Index signature to satisfy PageProps constraint
}

export default function SparePartsPage() {
  // Pass the interface to usePage() to tell TypeScript what props to expect
  const { props } = usePage<CategoryPageProps>();

  // Now TypeScript knows categoryData exists and has a parts property
  const categoryData = props.categoryData || { parts: [], categoryName: 'Spare Parts', id: 0 };

  const [filters, setFilters] = useState({});
  const [parts, setParts] = useState<any[]>(categoryData.parts);

  // Example: simulate loading parts by category
  useEffect(() => {
    // You can update parts based on filters here
    if (categoryData.parts.length > 0) {
      setParts(categoryData.parts);
    }
  }, [filters, categoryData.parts]);

  return (
    <div className="stocklist-gradient-bg min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row">
        <SidebarFilter onFilterChange={setFilters} />
        <div className="flex-1 ">
        <div className="flex justify-between items-center p-6 bg-transparent border-b border-gray-700">
          <h1 className="text-2xl font-bold text-white">{categoryData.categoryName}</h1>
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg border border-gray-600 bg-gray-800/50 text-white placeholder-gray-400 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
            />
          </div>
        </div>
        <SparePartsGrid parts={parts} />
        </div>
      </div>
    </div>
  );
}
