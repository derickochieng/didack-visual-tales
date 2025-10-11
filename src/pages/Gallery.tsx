import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const galleryCategories = {
    humanitarian: [
      {
        url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Community Outreach Program',
        category: 'Humanitarian Works'
      },
      {
        url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Youth Empowerment Initiative',
        category: 'Humanitarian Works'
      },
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Educational Support Program',
        category: 'Humanitarian Works'
      },
      {
        url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Healthcare Access Campaign',
        category: 'Humanitarian Works'
      }
    ],
    corporateEvents: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Annual Corporate Gala',
        category: 'Corporate Events'
      },
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Product Launch Event',
        category: 'Corporate Events'
      },
      {
        url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Team Building Workshop',
        category: 'Corporate Events'
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Awards Ceremony',
        category: 'Corporate Events'
      }
    ],
    conferences: [
      {
        url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'International Business Summit',
        category: 'Conference Work'
      },
      {
        url: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Technology Innovation Forum',
        category: 'Conference Work'
      },
      {
        url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Leadership Development Conference',
        category: 'Conference Work'
      },
      {
        url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Industry Expert Panel',
        category: 'Conference Work'
      }
    ],
    environment: [
      {
        url: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Sustainable Farming Practices',
        category: 'Environment & Climate'
      },
      {
        url: 'https://images.unsplash.com/photo-1586810724446-c86f4cd85a78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Agroecology Documentary',
        category: 'Environment & Climate'
      },
      {
        url: 'https://images.unsplash.com/photo-1566136898652-3b4b4e6c9cdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Climate Change Awareness',
        category: 'Environment & Climate'
      },
      {
        url: 'https://images.unsplash.com/photo-1574263867128-8c8703b8d5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Renewable Energy Project',
        category: 'Environment & Climate'
      }
    ],
    farming: [
      {
        url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Organic Farming Initiative',
        category: 'Farming'
      },
      {
        url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Agricultural Innovation',
        category: 'Farming'
      },
      {
        url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Rural Farming Community',
        category: 'Farming'
      },
      {
        url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Harvest Documentation',
        category: 'Farming'
      }
    ],
    realEstate: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Luxury Residential Complex',
        category: 'Real Estate'
      },
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Modern Office Building',
        category: 'Real Estate'
      },
      {
        url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Commercial Property Showcase',
        category: 'Real Estate'
      },
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        title: 'Architectural Photography',
        category: 'Real Estate'
      }
    ]
  };

  const getAllImages = () => {
    return [
      ...galleryCategories.humanitarian,
      ...galleryCategories.corporateEvents,
      ...galleryCategories.conferences,
      ...galleryCategories.environment,
      ...galleryCategories.realEstate
    ];
  };

  const getFilteredImages = () => {
    if (activeCategory === 'all') return getAllImages();
    return galleryCategories[activeCategory] || [];
  };

  const handleCategoryChange = (categoryKey: string) => {
    setActiveCategory(categoryKey);
    if (categoryKey === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryKey });
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
  };

  const filteredImages = getFilteredImages();

  const categories = [
    { key: 'all', label: 'All Work' },
    { key: 'humanitarian', label: 'Humanitarian Works' },
    { key: 'farming', label: 'Farming' },
    { key: 'corporateEvents', label: 'Corporate Events' },
    { key: 'conferences', label: 'Conference Work' },
    { key: 'environment', label: 'Environment & Climate' },
    { key: 'realEstate', label: 'Real Estate' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
              Our Gallery
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our diverse portfolio showcasing authentic moments across humanitarian work, 
              farming, corporate events, environmental documentation, and real estate photography.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.key}
                onClick={() => handleCategoryChange(category.key)}
                variant={activeCategory === category.key ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  activeCategory === category.key 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'border-white/20 text-white hover:bg-white/10'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                onClick={() => handleImageClick(index)}
                className="group relative overflow-hidden rounded-lg hover-lift animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square">
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Dialog */}
      <Dialog open={isCarouselOpen} onOpenChange={setIsCarouselOpen}>
        <DialogContent className="max-w-7xl w-[95vw] h-[90vh] bg-black border-none p-0">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 text-white hover:bg-white/20 rounded-full"
            onClick={() => setIsCarouselOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <Carousel 
            className="w-full h-full relative"
            opts={{
              loop: true,
              align: "center",
              startIndex: selectedImageIndex || 0
            }}
          >
            <CarouselContent className="ml-0 h-full">
              {filteredImages.map((image, index) => (
                <CarouselItem key={index} className="pl-0 h-full flex items-center justify-center">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-6 bg-white hover:bg-white/90 border-none text-gray-900 h-12 w-12 rounded-full z-50" />
            <CarouselNext className="right-6 bg-white hover:bg-white/90 border-none text-gray-900 h-12 w-12 rounded-full z-50" />
          </Carousel>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
