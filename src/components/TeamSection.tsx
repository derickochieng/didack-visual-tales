
import React from 'react';
import { Linkedin, Instagram, Camera } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Allan Didack",
      role: "Founder & Documentary Photographer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "I'm Allan Didack, a documentary and corporate photographer based in Nairobi, Kenya, and the founder of Didack Media. With over 10 years of experience in documentary photography, I bring a seasoned eye and deep passion for visual storytelling that informs, inspires, and drives meaningful change.",
      social: { linkedin: "#", instagram: "#" }
    },
    {
      name: "Cole Charles",
      role: "Cinematographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Cole Charles is a seasoned cinematographer with a passion for visual storytelling that drives social impact. With over 5 years of experience in the film and media industry, he specializes in helping brands craft authentic narratives that highlight humanitarian efforts and socially conscious initiatives.",
      social: { linkedin: "#", instagram: "#" }
    },
    {
      name: "Sharon Nyoike",
      role: "Content Strategist & Digital Media Consultant",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: "Sharon Nyoike is a content strategist and digital media consultant specializing in purpose-driven storytelling. With a background in journalism and experience in media, voice-over, and digital influence, she helps brands and creators build impactful visibility through strategic content and authentic personal branding.",
      social: { linkedin: "#", instagram: "#" }
    }
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Passionate storytellers dedicated to capturing authentic moments and driving social impact through powerful visual narratives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="glass rounded-lg overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  <a 
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.instagram}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="glass rounded-lg p-8 max-w-4xl mx-auto">
            <Camera className="h-12 w-12 text-white mx-auto mb-6" />
            <h3 className="text-2xl font-playfair font-bold text-white mb-4">
              About Didack Media
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              At Didack Media, we lead with purpose—documenting the resilience of communities, championing environmental causes, and helping organizations visually communicate their impact. Every project we undertake is guided by a commitment to authenticity, creativity, and a deep respect for the stories we tell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
