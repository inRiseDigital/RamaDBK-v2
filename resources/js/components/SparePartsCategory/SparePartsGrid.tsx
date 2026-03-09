import { router } from '@inertiajs/react';

interface SparePart {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
}

export default function SparePartsGrid({ parts }: { parts: SparePart[] }) {
  const handleCardClick = (partId: number) => {
    router.visit(`/sparepart/${partId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {parts.map((part) => (
        <div
          key={part.id}
          onClick={() => handleCardClick(part.id)}
          className="rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer border border-white/20"
        >
          {/* Image Section */}
          <div className="relative bg-gray-800/50 p-4 h-56">
            <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-inner">
              <img
                src={part.image}
                alt={part.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder-engine.jpg';
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-base font-bold text-white mb-1">{part.name}</h3>
            <p className="text-sm text-gray-300 mb-1">{part.title}</p>
            <p className="text-xs text-gray-400 mb-4 line-clamp-2 flex-grow">{part.description}</p>

            {/* Buttons Section */}
            <div className="flex gap-2 mt-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Add checkout logic here
                }}
                className="flex-1 rounded-lg bg-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors border border-white/30"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
