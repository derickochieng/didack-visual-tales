
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Play, ArrowRight } from 'lucide-react';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'humanitarian', name: 'Humanitarian Work' },
    { id: 'farming', name: 'Farming' },
    { id: 'corporate-events', name: 'Corporate Events' },
    { id: 'conferences', name: 'Conferences' },
    { id: 'environment', name: 'Environment & Climate' },
    { id: 'real-estate', name: 'Real Estate' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'SHOFCO Youth Talent Show',
      category: 'humanitarian',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Documenting community empowerment through creative expression in Kibera'
    },
    {
      id: 2,
      title: 'Climate Action Summit',
      category: 'environment',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Visual storytelling for environmental conservation initiatives'
    },
    {
      id: 3,
      title: 'Corporate Leadership Conference',
      category: 'conferences',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional conference documentation and keynote coverage'
    },
    {
      id: 4,
      title: 'Sustainable Farming Initiative',
      category: 'farming',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Documenting innovative agricultural practices and rural development'
    },
    {
      id: 5,
      title: 'Luxury Property Showcase',
      category: 'real-estate',
      type: 'photo',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'High-end real estate photography and virtual tours'
    },
    {
      id: 6,
      title: 'Annual Company Gala',
      category: 'corporate-events',
      type: 'video',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Corporate event coverage and brand storytelling'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our diverse portfolio showcasing impactful storytelling across various industries and communities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={activeCategory === category.id 
                ? "bg-white text-black hover:bg-gray-200" 
                : "border-white text-white hover:bg-white hover:text-black"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-gray-800 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    {item.type === 'video' ? (
                      <Play className="h-12 w-12 text-white mb-4 mx-auto" />
                    ) : (
                      <Camera className="h-12 w-12 text-white mb-4 mx-auto" />
                    )}
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                      View {item.type === 'video' ? 'Video' : 'Gallery'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {item.type.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
