import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: (string | null)[];
  currentIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
}

function GalleryImage({ src }: { src: string | null }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="h-[300px] sm:h-[420px] w-full flex items-center justify-center bg-gray-800 rounded-xl text-gray-500">
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
      className="h-[300px] sm:h-[420px] w-full object-cover transition-transform duration-500 rounded-xl block"
      onError={() => setFailed(true)}
    />
  );
}

export default function ImageGallery({ images, currentIndex, handleNext, handlePrev }: ImageGalleryProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black/5">
      <GalleryImage src={images[currentIndex]} />
      {images.length > 1 && (
        <div className="mt-2 flex items-center justify-end gap-4 pr-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="flex items-center justify-center p-1 text-gray-300 hover:text-gray-500 focus:outline-none"
          >
            <ChevronLeft size={20} strokeWidth={1.6} className="text-current" />
          </button>

          <div className="text-sm text-gray-200 px-2">{currentIndex + 1}/{images.length}</div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="flex items-center justify-center p-1 text-gray-300 hover:text-gray-500 focus:outline-none"
          >
            <ChevronRight size={20} strokeWidth={1.6} className="text-current" />
          </button>
        </div>
      )}
    </div>
  );
}
