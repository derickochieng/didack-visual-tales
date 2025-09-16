import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const images = [
    {
      src: '/lovable-uploads/e6572f21-26fa-4d29-8d42-52e2d86ef142.webp',
      alt: 'Community portraits - three women in colorful hijabs'
    },
    {
      src: '/lovable-uploads/05e08b26-912b-4383-a546-53655e50aaa2.webp',
      alt: 'Group of women in blue hijabs - community gathering'
    },
    {
      src: '/lovable-uploads/afdf04b6-6fc3-4acb-b82b-2d6204760806.webp',
      alt: 'Photographer documenting environmental challenges'
    },
    {
      src: '/lovable-uploads/1c8466ad-311f-4482-9f40-65694c3b9721.webp',
      alt: 'Silhouettes at sunset - community life'
    },
    {
      src: '/lovable-uploads/7a63dcc6-5e15-4c8f-84b6-a2a834ef37be.webp',
      alt: 'Children with school bags - education documentation'
    },
    {
      src: '/lovable-uploads/4a5797b3-1b13-4d0d-8075-f4cae633902f.webp',
      alt: 'Photographer with traditional community - cultural documentation'
    },
    {
      src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Photographer with camera - original background'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {/* Background Image Carousel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image.src}')`
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;