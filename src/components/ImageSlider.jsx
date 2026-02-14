import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/gallery/gym-1.jpg', alt: 'Fire Fit - Zone musculation' },
    { src: '/gallery/gym-2.jpg', alt: 'Fire Fit - Espace cardio' },
    { src: '/gallery/gym-3.jpg', alt: 'Fire Fit - Fight training' },
    { src: '/gallery/gym-4.jpg', alt: 'Fire Fit - Vestiaires' },
    { src: '/gallery/gym-5.jpg', alt: 'Fire Fit - Installations' }
  ];

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change toutes les 4 secondes

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative group">
      {/* Slider Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-fire-blue to-blue-800 flex items-center justify-center">
                    <div class="text-center text-white p-8">
                      <div class="text-6xl font-black mb-4">FIRE FIT</div>
                      <div class="text-xl">Image ${index + 1}</div>
                    </div>
                  </div>
                `;
              }}
            />
          </div>
        ))}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Compteur */}
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-3 bg-fire-pink'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-fire-pink/20 rounded-3xl -z-10"></div>
    </div>
  );
};

export default ImageSlider;
