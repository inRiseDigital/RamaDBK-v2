import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import { SparePartDetail } from '../../types/spareParts';
import Navbar from '@/components/Navigation/NavBar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SparePartPageProps {
  partData?: SparePartDetail;
  [key: string]: any;
}

function GalleryImage({ src }: { src: string | null }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500">
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt="Spare part"
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

function ThumbnailImage({ src, active, onClick }: { src: string | null; active: boolean; onClick: () => void }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${active ? 'border-red-500' : 'border-white/20 hover:border-white/40'}`}
    >
      <img src={src} alt="" className="w-full h-full object-cover" onError={() => setFailed(true)} />
    </button>
  );
}

export default function SparePartsView() {
  const { props } = usePage<SparePartPageProps>();
  const part = props?.partData || null;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!part) return <p className="mt-10 text-center text-gray-400">Part not found.</p>;

  const images = part.images?.length ? part.images : (part.image ? [part.image] : []);
  const handleNext = () => { if (images.length > 1) setCurrentIndex((prev) => (prev + 1) % images.length); };
  const handlePrev = () => { if (images.length > 1) setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); };

  // Collect spec rows that have data
  const specs: { label: string; value: string }[] = [];
  if (part.stockNo) specs.push({ label: 'Stock No', value: String(part.stockNo) });
  if (part.partNumber) specs.push({ label: 'Part Number', value: part.partNumber });
  if (part.make) specs.push({ label: 'Make', value: part.make });
  if (part.model) specs.push({ label: 'Model', value: part.model });
  if (part.year) specs.push({ label: 'Year', value: String(part.year) });
  if (part.engineCc) specs.push({ label: 'Engine', value: part.engineCc });
  if (part.fuel) specs.push({ label: 'Fuel', value: part.fuel });
  if (part.transmission) specs.push({ label: 'Transmission', value: part.transmission });
  if (part.color) specs.push({ label: 'Color', value: part.color });
  if (part.mileage) specs.push({ label: 'Mileage', value: part.mileage });

  return (
    <div className="min-h-screen bg-[linear-gradient(45deg,_oklab(1%_0.013_0.01),_oklab(20.5%_0.11_0.066),_oklab(0%_0_0),_oklab(14.9%_0.032_0.013),_oklab(0%_0_0))] text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Spare Parts
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* LEFT: Image Gallery */}
          <div>
            {/* Main image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800">
              <GalleryImage src={images[currentIndex] ?? null} />
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-xs">
                    {currentIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin' }}>
                {images.map((img, i) => (
                  <ThumbnailImage key={i} src={img} active={i === currentIndex} onClick={() => setCurrentIndex(i)} />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Details */}
          <div className="flex flex-col">
            {/* Category badges */}
            {(part.category || part.subCategory) && (
              <div className="flex flex-wrap gap-2 mb-3">
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

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
              {part.name || part.description || 'Spare Part'}
            </h1>

            {/* Price */}
            <div className="mb-6">
              {part.price > 0 ? (
                <span className="text-3xl font-bold text-white">¥{part.price.toLocaleString()}</span>
              ) : (
                <span className="text-xl text-gray-400">Contact for price</span>
              )}
            </div>

            {/* Specs table */}
            {specs.length > 0 && (
              <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden mb-6">
                <div className="px-4 py-3 border-b border-white/10">
                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Specifications</h3>
                </div>
                <div className="divide-y divide-white/5">
                  {specs.map((s, i) => (
                    <div key={i} className="flex justify-between px-4 py-2.5 text-sm">
                      <span className="text-gray-400">{s.label}</span>
                      <span className="font-medium text-white text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {part.description && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Description</h3>
                <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                  {part.description}
                </p>
              </div>
            )}

            {/* Keywords */}
            {part.keywords && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {part.keywords.split(',').map((kw, i) => kw.trim() && (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/10">
                      {kw.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Inquiry button */}
            <div className="mt-auto pt-4">
              <button
                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`I'm interested in spare part: ${part.name || part.description} (Stock #${part.stockNo})`)}`, '_blank')}
                className="w-full bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                Inquire About This Part
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
