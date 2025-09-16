import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: "Convoy of Hope",
      logo: "/lovable-uploads/a2be3d53-ed0e-499f-af57-3601469a04c5.webp",
    },
    {
      name: "SHOFCO",
      logo: "/lovable-uploads/ae99bc7a-4db4-4080-b21e-9fd13d0287bb.webp",
    },
    {
      name: "Wangari Maathai Foundation",
      logo: "/lovable-uploads/5eb469d0-908d-422e-a8b4-0debea8aa532.webp",
    },
    {
      name: "Medic East Africa",
      logo: "/lovable-uploads/b623f9c9-a726-44fc-92b2-f11da3477bc2.webp",
    },
    {
      name: "Teach For All",
      logo: "/lovable-uploads/55bd63fd-83a1-494a-aff8-b975427859bc.webp",
    },
    {
      name: "ISFAA",
      logo: "/lovable-uploads/3ef96afa-f794-4821-a8bb-242257ff26f5.webp",
    },
    {
      name: "International Funders for Indigenous Peoples",
      logo: "/lovable-uploads/f2ab6830-1937-4845-8685-71506674a1ad.webp",
    },
  ];

  // Triple the clients array for seamless infinite scroll
  const extendedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-pulse">
            <span className="text-primary font-semibold text-sm tracking-wide">TRUSTED PARTNERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 animate-fade-in">
            Our Valued Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Collaborating with world-class organizations to create meaningful visual stories
          </p>
        </div>

        {/* 3D Marquee Container */}
        <div className="relative perspective-1000 h-32 lg:h-40 mb-16">
          {/* Top Marquee - Moving Right */}
          <div className="absolute top-0 left-0 right-0 h-20 lg:h-24 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="flex animate-marquee-right hover:pause-marquee whitespace-nowrap">
              {extendedClients.map((client, index) => (
                <div
                  key={`top-${client.name}-${index}`}
                  className="flex-shrink-0 mx-4 lg:mx-6 group transform-gpu"
                >
                  <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-4 lg:p-6 h-16 lg:h-20 w-32 lg:w-40 flex items-center justify-center transition-all duration-500 hover:border-primary/50 hover:bg-card hover:scale-110 hover:shadow-xl hover:shadow-primary/20 hover:rotate-y-12">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-12 lg:max-h-14 object-contain transition-all duration-500 filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Marquee - Moving Left */}
          <div className="absolute bottom-0 left-0 right-0 h-20 lg:h-24 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="flex animate-marquee-left hover:pause-marquee whitespace-nowrap">
              {[...extendedClients].reverse().map((client, index) => (
                <div
                  key={`bottom-${client.name}-${index}`}
                  className="flex-shrink-0 mx-4 lg:mx-6 group transform-gpu"
                >
                  <div className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-4 lg:p-6 h-16 lg:h-20 w-32 lg:w-40 flex items-center justify-center transition-all duration-500 hover:border-primary/50 hover:bg-card hover:scale-110 hover:shadow-xl hover:shadow-primary/20 hover:-rotate-y-12">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-12 lg:max-h-14 object-contain transition-all duration-500 filter brightness-100 contrast-110 group-hover:brightness-125 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-5xl lg:text-6xl font-bold text-gradient mb-3">50+</div>
            <div className="text-muted-foreground text-lg">Projects Completed</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="text-5xl lg:text-6xl font-bold text-gradient mb-3">7+</div>
            <div className="text-muted-foreground text-lg">Trusted Partners</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="text-5xl lg:text-6xl font-bold text-gradient mb-3">100%</div>
            <div className="text-muted-foreground text-lg">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;