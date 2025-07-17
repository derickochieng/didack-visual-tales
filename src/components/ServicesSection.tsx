
import React from 'react';
import { Camera, Users, Leaf, Building } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Corporate Event Coverage",
      description: "We have a keen eye for capturing the highlights and nuances of corporate events, ensuring that each moment is documented with precision and professionalism."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Climate Change & Agroecology Media",
      description: "In an era where environmental issues are at the forefront, our work in climate change and agroecology media production stands out. We convey the gravity of these topics through our lens like no other."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Professional Studio Photoshoots",
      description: "Whether it's a corporate portrait or a product shoot, our studio photoshoots are tailored to meet the highest standards, reflecting your brand's identity with clarity and creativity."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Impact Storytelling",
      description: "With a wealth of experience working with local and international organizations, we are dedicated to helping corporate and nonprofit entities amplify their missions and create lasting impact through powerful imagery."
    }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            📸 Why Choose Didack Media?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Expertise that transforms moments into lasting memories and impactful stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass rounded-lg p-8 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <p className="text-xl text-white font-playfair italic">
            Let's create something extraordinary together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
