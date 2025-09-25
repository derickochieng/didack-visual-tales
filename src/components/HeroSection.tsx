
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Camera, Film, Image } from 'lucide-react';
import HeroCarousel from './HeroCarousel';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <HeroCarousel />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Camera className="h-12 w-12 text-white" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Film className="h-16 w-16 text-white" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Image className="h-10 w-10 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-6">
            Capturing Authentic Moments with{' '}
            <span className="text-gradient bg-gradient-shimmer bg-200% animate-text-shimmer">
              Incredible Lighting
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Your story deserves to be told with precision and creativity. At Didack Media, we specialize in crafting stunning visuals that showcase the essence of every moment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#gallery">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-4 text-lg font-semibold">
                View Our Gallery
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg font-semibold">
                Get In Touch
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-white mx-auto" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
