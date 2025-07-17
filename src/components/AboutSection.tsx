
import React from 'react';
import { Camera, Award, Users, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Organizations Served' },
    { number: '5+', label: 'Years Experience' },
    { number: '10K+', label: 'Stories Told' }
  ];

  const values = [
    {
      icon: Camera,
      title: 'Authentic Storytelling',
      description: 'We believe every moment has a story worth telling with honesty and creativity.'
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Our work amplifies voices and causes that make a positive difference in communities.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work closely with our clients to understand their vision and exceed expectations.'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'We maintain the highest standards in every project, from concept to delivery.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            About Didack Media
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a passionate team of visual storytellers based in Nairobi, Kenya, dedicated to capturing 
            authentic moments that matter. Our expertise spans corporate events, humanitarian documentation, 
            environmental storytelling, and professional photography services.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="glass rounded-lg p-8 lg:p-12 text-center animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-white mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            To create compelling visual narratives that not only document moments but inspire action, 
            foster understanding, and contribute to positive social change. We are committed to using 
            our craft to amplify important stories and support organizations making a difference in Kenya and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
