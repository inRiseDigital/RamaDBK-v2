import { useState, memo, useCallback } from 'react';
import { SparePart } from '../../types/spareParts';

interface PartsCardProps {
  cards: SparePart[];
  onPartClick: (id: number) => void;
}
// This component displays a grid of individual part cards
const PartsCard = memo(function PartsCard({ cards, onPartClick }: PartsCardProps) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (cardId : number) => {
    setImageErrors(prev => ({ ...prev, [cardId]: true }));
  };

  const handleImageLoad = (cardId: number) => {
    setImageErrors(prev => ({ ...prev, [cardId]: false }));
  };

  return (
    // Responsive grid for all cards
    // Changed grid-cols to adapt to 4 columns on larger screens
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 xl:gap-12 w-full'>
      {cards && cards.map((card) => (
        <div
          key={card.id}
          className='flex flex-col items-center w-full h-auto rounded-xl shadow-2xl backdrop-blur-xl border border-white/30 p-4 cursor-pointer' // Removed fixed w/h, added padding
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 100%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
          }}
          onClick={() => onPartClick(card.id)}
        >
          <div className='flex flex-col items-center w-full mb-4'> {/* Added w-full, mb-4 */}
            {/* Image container */}
            <div className='relative bg-blue-gray-500 w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'> {/* Used aspect ratio for responsive image height */}
              {!imageErrors[card.id] && card.image ? (
                <img
                  src={card.image}
                  alt={card.name || "Parts image"}
                  loading="lazy"
                  className='rounded-lg w-full h-full object-cover'
                  onError={() => handleImageError(card.id)}
                  onLoad={() => handleImageLoad(card.id)}
                />
              ) : (
                <div className='rounded-lg w-full h-48 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center'>
                  <div className='text-center text-gray-500 p-4'>
                    <svg className='mx-auto h-12 w-12 mb-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                    </svg>
                    <p className='text-sm'>No image</p>
                  </div>
                </div>
              )}

              {/* Favourite Button at top-right */}
              <button className="absolute top-2 right-2 bg-gray-300 bg-opacity-20 rounded-full p-2 shadow-md hover:bg-opacity-100 transition ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a5.5 5.5 0 017.778 0L12 6.94l-.096.096a5.5 5.5 0 017.778 7.778L12 21.182l-7.682-7.682a5.5 5.5 0 010-7.778z"
                  />
                </svg>
              </button>

              {/* Dotted indicator at bottom-center - kept for structure */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
                <span className="w-2 h-2 bg-white rounded-full opacity-100"></span>
                <span className="w-2 h-2 bg-white rounded-full opacity-60"></span>
              </div>
            </div>

            <div className='w-full text-center px-2'> {/* Added w-full and padding */}
              {/* Name of the vehicle */}
              <h1 className='my-3 text-xl lg:text-lg xl:text-xl font-bold text-white'> {/* Adjusted font sizes */}
                {card.name}
              </h1>
              {/* Part and Section */}
              <h1 className='text-gray-300 text-base lg:text-sm xl:text-base mb-2'> {/* Adjusted font sizes */}
                {card.part} - <span className='text-gray-400'>{card.section}</span>
              </h1>
              {/* Title/Description */}
              <p className='text-white text-base lg:text-sm xl:text-base leading-tight line-clamp-2'> {/* Adjusted font sizes, added line-clamp */}
                {card.title}
              </p>
            </div>
          </div>

          <div className='flex flex-row gap-3 w-full px-2 mt-auto'> {/* Added w-full, px-2, and mt-auto for bottom alignment */}
            <button
              className='bg-black text-white flex items-center justify-center hover:bg-gray-800 flex-1 h-[40px] rounded-full cursor-pointer text-sm font-medium transition-colors'
              onClick={(e) => {
                e.stopPropagation();
                onPartClick(card.id);
              }}
            >
              Add to Cart
            </button>

            <button
              className='bg-black text-white flex items-center justify-center hover:bg-gray-800 flex-1 h-[40px] rounded-full cursor-pointer text-sm font-medium transition-colors'
              onClick={(e) => {
                e.stopPropagation();
                onPartClick(card.id);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ))}
    </div>
  );
});

export default PartsCard;
