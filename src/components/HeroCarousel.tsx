import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const images = [
    {
      src: '/lovable-uploads/e6572f21-26fa-4d29-8d42-52e2d86ef142.png',
      alt: 'Community portraits - three women in colorful hijabs'
    },
    {
      src: '/lovable-uploads/05e08b26-912b-4383-a546-53655e50aaa2.png',
      alt: 'Group of women in blue hijabs - community gathering'
    },
    {
      src: '/lovable-uploads/afdf04b6-6fc3-4acb-b82b-2d6204760806.png',
      alt: 'Photographer documenting environmental challenges'
    },
    {
      src: '/lovable-uploads/1c8466ad-311f-4482-9f40-65694c3b9721.png',
      alt: 'Silhouettes at sunset - community life'
    },
    {
      src: '/lovable-uploads/7a63dcc6-5e15-4c8f-84b6-a2a834ef37be.png',
      alt: 'Children with school bags - education documentation'
    },
    {
      src: '/lovable-uploads/4a5797b3-1b13-4d0d-8075-f4cae633902f.png',
      alt: 'Photographer with traditional community - cultural documentation'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Left side carousel */}
      <div className="absolute top-1/4 left-8 lg:left-16 w-32 lg:w-48 h-40 lg:h-60 opacity-20 hover:opacity-30 transition-opacity duration-500">
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                index === currentIndex 
                  ? 'opacity-100 scale-100' 
                  : index === (currentIndex - 1 + images.length) % images.length
                  ? 'opacity-0 scale-110'
                  : 'opacity-0 scale-95'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right side carousel (offset timing) */}
      <div className="absolute top-1/3 right-8 lg:right-16 w-28 lg:w-40 h-36 lg:h-52 opacity-15 hover:opacity-25 transition-opacity duration-500">
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                index === (currentIndex + 2) % images.length 
                  ? 'opacity-100 scale-100' 
                  : index === (currentIndex + 1) % images.length
                  ? 'opacity-0 scale-110'
                  : 'opacity-0 scale-95'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom center carousel */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-24 lg:w-36 h-32 lg:h-44 opacity-10 hover:opacity-20 transition-opacity duration-500">
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                index === (currentIndex + 4) % images.length 
                  ? 'opacity-100 scale-100' 
                  : index === (currentIndex + 3) % images.length
                  ? 'opacity-0 scale-110'
                  : 'opacity-0 scale-95'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;