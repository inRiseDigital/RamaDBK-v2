interface VehicleImageGalleryProps {
  images: string[];
  currentIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
  totalImages: number;
  description?: string;
  colors?: string[];
}

export default function VehicleImageGallery({
  images,
  currentIndex,
  handleNext,
  handlePrev,
  totalImages,
  description,
  colors = [],
}: VehicleImageGalleryProps) {
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Vehicle image ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Color Dots and Navigation */}
      <div className="flex items-center justify-between px-4">
        {/* Color Selection Dots */}
        {colors.length > 0 && (
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <button
                key={index}
                className="w-4 h-4 rounded-full border-2 border-white/40 hover:border-white transition-colors"
                style={{ backgroundColor: color }}
                aria-label={`Color option ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-sm text-white font-medium">
            {currentIndex + 1}/{totalImages}
          </span>

          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Description Text */}
      {description && (
        <div className="mt-4 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-sm border border-white/20">
          <p className="text-sm text-white leading-relaxed text-justify whitespace-pre-line">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
