
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Camera, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Allan Didack',
      role: 'Founder & Documentary Photographer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: "I'm Allan Didack, a documentary and corporate photographer based in Nairobi, Kenya, and the founder of Didack Media. With over 10 years of experience in documentary photography, I bring a seasoned eye and deep passion for visual storytelling that informs, inspires, and drives meaningful change. At Didack Media, I lead with purpose—documenting the resilience of communities, championing environmental causes, and helping organizations visually communicate their impact. Every project I undertake is guided by a commitment to authenticity, creativity, and a deep respect for the stories I tell."
    },
    {
      name: 'Cole Charles',
      role: 'Cinematographer & Visual Storyteller',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: "Cole Charles is a seasoned cinematographer with a passion for visual storytelling that drives social impact. With over 5 years of experience in the film and media industry, he specializes in helping brands craft authentic narratives that highlight humanitarian efforts and socially conscious initiatives. Through a cinematic lens, Cole Charles brings to life stories that resonate deeply with audiences—whether it's showcasing grassroots community projects, environmental sustainability campaigns, or corporate social responsibility programs. Blending technical expertise with a keen eye for emotion and nuance, he has partnered with NGOs, global brands, and nonprofits to produce compelling visual content that informs, inspires, and ignites change."
    },
    {
      name: 'Sharon Nyoike',
      role: 'Content Strategist & Digital Media Consultant',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: "Sharon Nyoike is a content strategist and digital media consultant specializing in purpose-driven storytelling. With a background in journalism and experience in media, voice-over, and digital influence, she helps brands and creators build impactful visibility through strategic content and authentic personal branding."
    }
  ];

  const stats = [
    { icon: Camera, number: '10+', label: 'Years Experience' },
    { icon: Award, number: '500+', label: 'Projects Completed' },
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: Globe, number: '15+', label: 'Countries Covered' }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Capturing authentic moments with incredible lighting and unmatched quality. 
              Your story deserves to be told with precision and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
              📸 Why Choose Didack Media?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Expertise in Corporate Event Coverage</h3>
                  <p className="text-gray-300">We have a keen eye for capturing the highlights and nuances of corporate events, ensuring that each moment is documented with precision and professionalism.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Climate Change and Agroecology Media Production</h3>
                  <p className="text-gray-300">In an era where environmental issues are at the forefront, our work in climate change and agroecology media production stands out. We convey the gravity of these topics through our lens like no other.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Professional Studio Photoshoots</h3>
                  <p className="text-gray-300">Whether it's a corporate portrait or a product shoot, our studio photoshoots are tailored to meet the highest standards, reflecting your brand's identity with clarity and creativity.</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg">
                With a wealth of experience working with local and international organizations, we are dedicated to helping corporate and nonprofit entities amplify their missions and create lasting impact through powerful imagery.
              </p>
              
              <p className="text-white text-xl font-semibold">
                Let's create something extraordinary together!
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-black/50 rounded-lg">
                  <stat.icon className="h-8 w-8 text-white mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
              Meet Our Team
            </h2>
          </div>
          
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-400 mb-6">{member.role}</p>
                  <p className="text-gray-300 text-lg leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
