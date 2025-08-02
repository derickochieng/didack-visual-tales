
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
      title: 'Community Photography Workshop',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/7bc4e4f1-44ea-41d7-afd6-e1072a93dae7.png',
      description: 'Capturing moments of connection and learning in rural communities'
    },
    {
      id: 11,
      title: 'Clean Water Initiative',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/4b16b84a-def0-48e2-b308-6e01cf52d1c1.png',
      description: 'Documenting access to clean water and its impact on children\'s lives'
    },
    {
      id: 12,
      title: 'Sunset Silhouettes',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/fef03ae6-6d91-4e6b-8bc1-f1c972359935.png',
      description: 'Capturing the resilience and hope of communities at day\'s end'
    },
    {
      id: 13,
      title: 'Local Market Stories',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/1f554a95-b452-4568-be8c-4f03acfc7694.png',
      description: 'Documenting the entrepreneurial spirit in local fish markets'
    },
    {
      id: 14,
      title: 'Cultural Heritage',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/dad23e9c-014b-4068-b611-4f605503bbd4.png',
      description: 'Preserving the stories and traditions of community elders'
    },
    {
      id: 15,
      title: 'Youth Empowerment',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/61790633-c2ab-4891-8b32-b94d0afb9faf.png',
      description: 'Celebrating the joy and potential of young community members'
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
      title: 'Corn Harvest Joy',
      category: 'farming',
      type: 'photo',
      image: '/lovable-uploads/825742bf-d959-40e4-9b19-1ddab19409d1.png',
      description: 'Capturing the happiness and pride of successful corn harvesting'
    },
    {
      id: 16,
      title: 'Women in Agriculture',
      category: 'farming',
      type: 'photo',
      image: '/lovable-uploads/175ba722-4fa8-4175-a777-ebc8accdbc87.png',
      description: 'Celebrating women farmers and their vital role in food security'
    },
    {
      id: 17,
      title: 'Harvest Pride',
      category: 'farming',
      type: 'photo',
      image: '/lovable-uploads/150bcf87-976e-4ee1-93a2-f9736c05a5af.png',
      description: 'Capturing the joy and pride of successful vegetable harvests'
    },
    {
      id: 18,
      title: 'Collaborative Farming',
      category: 'farming',
      type: 'photo',
      image: '/lovable-uploads/69501bc8-70be-43a4-a9d0-b2dab7743ebe.png',
      description: 'Documenting teamwork and cooperation in sustainable agriculture'
    },
    {
      id: 19,
      title: 'Fruit Cultivation',
      category: 'farming',
      type: 'photo',
      image: '/lovable-uploads/90fcd3d2-2dfd-4b44-b0e7-e9d35c2a2b8e.png',
      description: 'Expert papaya cultivation and sustainable fruit farming practices'
    },
    {
      id: 20,
      title: 'Banana Plantation Success',
      category: 'farming',
      type: 'photo',
      image: '/lovable-uploads/052a0b55-9526-4ac9-9c07-bb3c1d67cce4.png',
      description: 'Showcasing thriving banana cultivation and farmer dedication'
    },
    {
      id: 21,
      title: 'Greenhouse Innovation',
      category: 'farming',
      type: 'photo',
      image: '/lovable-uploads/377aadcd-e720-4ff2-a317-1a16633d85f4.png',
      description: 'Modern greenhouse farming techniques and sustainable practices'
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
