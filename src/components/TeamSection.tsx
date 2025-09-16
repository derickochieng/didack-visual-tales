
import React from 'react';
import { Linkedin, Instagram, Camera } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Allan Didack",
      role: "Founder & Documentary Photographer",
      image: "/lovable-uploads/84e3fb66-db5d-4c61-9770-e0098267b348.webp",
      bio: "I'm Allan Didack, a documentary and corporate photographer based in Nairobi, Kenya, and the founder of Didack Media. With over 10 years of experience in documentary photography, I bring a seasoned eye and deep passion for visual storytelling that informs, inspires, and drives meaningful change. At Didack Media, I lead with purpose—documenting the resilience of communities, championing environmental causes, and helping organizations visually communicate their impact. Every project I undertake is guided by a commitment to authenticity, creativity, and a deep respect for the stories I tell."
    },
    {
      name: "Cole Charles",
      role: "Cinematographer",
      image: "/lovable-uploads/d0dc3dcf-43bc-447d-a795-e8796b7c4e80.webp",
      bio: "Cole Charles is a seasoned cinematographer with a passion for visual storytelling that drives social impact. With over 5 years of experience in the film and media industry, he specializes in helping brands craft authentic narratives that highlight humanitarian efforts and socially conscious initiatives. Through a cinematic lens, cole Charles brings to life stories that resonate deeply with audiences—whether it's showcasing grassroots community projects, environmental sustainability campaigns, or corporate social responsibility programs. Blending technical expertise with a keen eye for emotion and nuance, he has partnered with NGOs, global brands, and nonprofits to produce compelling visual content that informs, inspires, and ignites change."
    },
    {
      name: "Sharon Nyoike",
      role: "Content Strategist & Digital Media Consultant",
      image: "/lovable-uploads/7fd227ad-2a6f-4756-9851-7d058c7efcb8.webp",
      bio: "Sharon Nyoike is a content strategist and digital media consultant specializing in purpose-driven storytelling. With a background in journalism and experience in media, voice-over, and digital influence, she helps brands and creators build impactful visibility through strategic content and authentic personal branding."
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
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
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
