
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
      title: 'Community Engagement',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/7bc4e4f1-44ea-41d7-afd6-e1072a93dae7.webp',
      description: 'Capturing moments of connection and learning in rural communities'
    },
    {
      id: 11,
      title: 'Hunger and Starvation',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/4b16b84a-def0-48e2-b308-6e01cf52d1c1.webp',
      description: 'Documenting access to clean water and its impact on children\'s lives'
    },
    {
      id: 12,
      title: 'Sunset Silhouettes',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/fef03ae6-6d91-4e6b-8bc1-f1c972359935.webp',
      description: 'Capturing the resilience and hope of communities at day\'s end'
    },
    {
      id: 13,
      title: 'Local Market Stories',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/1f554a95-b452-4568-be8c-4f03acfc7694.webp',
      description: 'Documenting the entrepreneurial spirit in local fish markets'
    },
    {
      id: 14,
      title: 'Cultural Heritage',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/dad23e9c-014b-4068-b611-4f605503bbd4.webp',
      description: 'Preserving the stories and traditions of community elders'
    },
    {
      id: 15,
      title: 'Youth Empowerment',
      category: 'humanitarian',
      type: 'photo',
      image: '/lovable-uploads/61790633-c2ab-4891-8b32-b94d0afb9faf.webp',
      description: 'Celebrating the joy and potential of young community members'
    },
    {
      id: 69,
      title: 'Pastoral Communities and Climate Adaptation',
      category: 'environment',
      type: 'photo',
      image: '/lovable-uploads/66f1aa76-0d6a-4211-b470-04ddd4f595d2.png',
      description: 'Documenting how pastoral communities adapt to changing climate conditions'
    },
    {
      id: 70,
      title: 'Water Access and Climate Resilience',
      category: 'environment',
      type: 'photo',
      image: '/lovable-uploads/5720470a-5ed3-44be-926c-ed4e960eac71.png',
      description: 'Community efforts to secure water access in climate-vulnerable areas'
    },
    {
      id: 71,
      title: 'Wetland Communities and Environmental Change',
      category: 'environment',
      type: 'photo',
      image: '/lovable-uploads/1fd589a9-d0ae-4559-88ac-8a5f8953f3c3.png',
      description: 'Documenting traditional practices in changing wetland ecosystems'
    },
    {
      id: 72,
      title: 'Community Resilience and Adaptation',
      category: 'environment',
      type: 'photo',
      image: '/lovable-uploads/357f3252-d4a8-4c10-a9e0-71384e9ebd27.png',
      description: 'Communities working together to adapt to environmental challenges'
    },
    {
      id: 73,
      title: 'Climate Impact on Fishing Communities',
      category: 'environment',
      type: 'photo',
      image: '/lovable-uploads/3403f9d9-92b4-471f-a602-ca75958fab7c.png',
      description: 'Fisherman displaying fresh catch from coastal waters'
    },
    {
      id: 74,
      title: 'Flood Response and Community Solidarity',
      category: 'environment',
      type: 'photo',
      image: '/lovable-uploads/e591c308-e62c-408e-a837-93d8e47c9625.png',
      description: 'Communities responding to flooding and climate-related disasters'
    },
    {
      id: 75,
      title: 'Climate Vulnerability in Urban Settlements',
      category: 'environment',
      type: 'photo',
      image: '/lovable-uploads/4abbd12e-f02f-49a5-8569-42fbc59dddc4.png',
      description: 'Documenting climate vulnerability in informal urban settlements'
    },
    {
      id: 76,
      title: 'Pastoral Water Access in Arid Regions',
      category: 'environment',
      type: 'photo',
      image: '/lovable-uploads/a361c702-60cf-479c-9438-bf4a34a7e958.png',
      description: 'Pastoral communities accessing water resources in drought-affected areas'
    },
    {
      id: 32,
      title: 'Executive Conference Presentation',
      category: 'conferences',
      type: 'photo',
      image: '/lovable-uploads/2454ff68-33c6-4138-92ff-af2eb65f811e.png',
      description: 'Professional documentation of executive presentations and large audience engagement'
    },
    {
      id: 33,
      title: 'Conference Recognition Event',
      category: 'conferences',
      type: 'photo',
      image: '/lovable-uploads/58127718-7f00-4363-86ee-c0c32e088b71.png',
      description: 'Capturing moments of recognition and celebration at conferences'
    },
    {
      id: 34,
      title: 'Large Conference Hall Coverage',
      category: 'conferences',
      type: 'photo',
      image: '/lovable-uploads/006d81e5-3ce0-44ca-a567-ea80cdfd3d06.png',
      description: 'Professional documentation of large-scale conference venues'
    },
    {
      id: 35,
      title: 'Conference Keynote Speaker',
      category: 'conferences',
      type: 'photo',
      image: '/lovable-uploads/1bee549d-3e45-4516-8f7d-8a0a1c766faf.png',
      description: 'Dynamic keynote presentations and speaker engagement moments'
    },
    {
      id: 36,
      title: 'Conference Leadership Address',
      category: 'conferences',
      type: 'photo',
      image: '/lovable-uploads/b276c57d-edb2-4a04-ab59-e1059897722f.png',
      description: 'Professional coverage of leadership speeches at conferences'
    },
    {
      id: 37,
      title: 'Industry Conference Panel',
      category: 'conferences',
      type: 'photo',
      image: '/lovable-uploads/c8b2f585-4cdf-4cb1-a542-88a7b141b032.png',
      description: 'Industry panel discussions and expert sessions'
    },
    {
      id: 38,
      title: 'Conference Networking Moments',
      category: 'conferences',
      type: 'photo',
      image: '/lovable-uploads/5ea854c8-3bb3-452d-9a79-03daa65d9648.png',
      description: 'Professional networking and attendee interactions'
    },
    {
      id: 39,
      title: 'Engaged Conference Participant',
      category: 'conferences',
      type: 'photo',
      image: '/lovable-uploads/e00066a4-d3e1-496e-810f-ed0d631192b9.png',
      description: 'Capturing engaged participants during conference sessions'
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
      id: 22,
      title: 'Fresh Leafy Greens',
      category: 'farming',
      type: 'photo',
      image: '/lovable-uploads/d8d3e21b-6e33-4be5-af46-d825a2707879.png',
      description: 'Farmer proudly displaying fresh leafy greens from the field'
    },
    {
      id: 23,
      title: 'Traditional Farming Methods',
      category: 'farming',
      type: 'photo',
      image: '/lovable-uploads/de3b998c-beec-4215-bcc4-3b0a01bfb6d1.png',
      description: 'Woman farmer tending to crops using traditional agricultural practices'
    },
    {
      id: 24,
      title: 'Green Vegetable Garden',
      category: 'farming',
      type: 'photo',
      image: '/lovable-uploads/4c6cfdc2-5e59-42d5-a1d5-e88813635782.png',
      description: 'Lush green vegetable garden showing healthy crop growth'
    },
    {
      id: 77,
      title: 'Luxury Villa with Pool',
      category: 'real-estate',
      type: 'photo',
      image: '/lovable-uploads/2680901a-c6f7-4398-bb2c-506967722ab0.png',
      description: 'Stunning white villa with swimming pool and tropical landscaping'
    },
    {
      id: 78,
      title: 'Modern Luxury Bathroom',
      category: 'real-estate',
      type: 'photo',
      image: '/lovable-uploads/443a8832-bbfb-44a1-9bf5-8a6888627586.png',
      description: 'Contemporary bathroom design with premium fixtures and finishes'
    },
    {
      id: 79,
      title: 'Contemporary Home with Pool',
      category: 'real-estate',
      type: 'photo',
      image: '/lovable-uploads/960f7b3d-7555-4c98-8092-cda4b50393f1.png',
      description: 'Modern family home featuring pool and beautifully landscaped gardens'
    },
    {
      id: 80,
      title: 'Luxury Interior Design',
      category: 'real-estate',
      type: 'photo',
      image: '/lovable-uploads/661a09ac-dcea-4187-abb9-b2939aad7536.png',
      description: 'Sophisticated interior space with geometric design elements'
    },
    {
      id: 81,
      title: 'Premium Commercial Space',
      category: 'real-estate',
      type: 'photo',
      image: '/lovable-uploads/0ea73351-5705-48d4-89ea-3ee7938182db.png',
      description: 'High-end commercial interior with wood paneling and modern aesthetics'
    },
    {
      id: 6,
      title: 'Corporate Conference Address',
      category: 'corporate-events',
      type: 'photo',
      image: '/lovable-uploads/2454ff68-33c6-4138-92ff-af2eb65f811e.png',
      description: 'Professional documentation of executive presentations and large audience engagement'
    },
    {
      id: 25,
      title: 'Executive Appreciation Event',
      category: 'corporate-events',
      type: 'photo',
      image: '/lovable-uploads/58127718-7f00-4363-86ee-c0c32e088b71.png',
      description: 'Capturing moments of recognition and celebration at corporate galas'
    },
    {
      id: 26,
      title: 'Corporate Conference Hall',
      category: 'corporate-events',
      type: 'photo',
      image: '/lovable-uploads/006d81e5-3ce0-44ca-a567-ea80cdfd3d06.png',
      description: 'Professional documentation of large-scale corporate conferences'
    },
    {
      id: 27,
      title: 'Keynote Speaker Presentation',
      category: 'corporate-events',
      type: 'photo',
      image: '/lovable-uploads/1bee549d-3e45-4516-8f7d-8a0a1c766faf.png',
      description: 'Dynamic speaker presentations and audience engagement moments'
    },
    {
      id: 28,
      title: 'Executive Leadership Address',
      category: 'corporate-events',
      type: 'photo',
      image: '/lovable-uploads/b276c57d-edb2-4a04-ab59-e1059897722f.png',
      description: 'Professional coverage of executive speeches and corporate communications'
    },
    {
      id: 29,
      title: 'Healthcare Leadership Panel',
      category: 'corporate-events',
      type: 'photo',
      image: '/lovable-uploads/c8b2f585-4cdf-4cb1-a542-88a7b141b032.png',
      description: 'Industry panel discussions and thought leadership sessions'
    },
    {
      id: 30,
      title: 'Corporate Summit Networking',
      category: 'corporate-events',
      type: 'photo',
      image: '/lovable-uploads/5ea854c8-3bb3-452d-9a79-03daa65d9648.png',
      description: 'Professional networking moments and executive interactions'
    },
    {
      id: 31,
      title: 'Professional Conference Attendee',
      category: 'corporate-events',
      type: 'photo',
      image: '/lovable-uploads/e00066a4-d3e1-496e-810f-ed0d631192b9.png',
      description: 'Capturing engaged participants during corporate conferences and workshops'
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
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
