import { SparePart } from '../../types/spareParts';


interface PartMainCardProps {
  cards: SparePart[];
  onPartClick: (id: number) => void;
}
// This component displays a list of main category cards (horizontal layout)
function PartMainCard({ cards, onPartClick }: PartMainCardProps) {
  return (
    // Use a responsive grid or flexbox to manage layout
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 w-full h-auto'>
      {cards && cards.map((card) => (
        <div
          key={card.id}
          className='flex flex-col md:flex-row items-center w-full rounded-xl shadow-2xl backdrop-blur-xl border border-white/30 p-2 sm:p-3 md:p-4 cursor-pointer'
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 100%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
          }}
          onClick={() => onPartClick(card.id)}
        >
          {/* Image Section on the Left (visible from md breakpoint) */}
          <div className='w-full md:w-1/3 h-32 md:h-full p-2 hidden sm:block'> {/* Added w-full for mobile, hidden on xs */}
            <img
              src={card.image}
              alt={card.section || "Category Image"}
              className='h-full w-full object-cover rounded-md'
            />
          </div>

          {/* Content Section on the Right */}
          <div className='w-full md:w-2/3 flex flex-col items-start justify-center p-2 md:pl-4 space-y-2'>
            <h3 className="text-base sm:text-lg xl:text-xl font-medium text-white">{card.section}</h3>
            <button
              className='bg-black p-2 text-white rounded-lg cursor-pointer text-sm hover:bg-gray-800 transition-colors'
              onClick={(e) => {
                e.stopPropagation();
                onPartClick(card.id);
              }}
            >
              Go to the category
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PartMainCard;
