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

        {/* Enhanced 3D Marquee Container */}
        <div className="relative perspective-1000 h-36 lg:h-44 mb-16">
          {/* Ambient glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5 rounded-3xl blur-2xl"></div>
          
          {/* Top Marquee - Moving Right */}
          <div className="absolute top-0 left-0 right-0 h-22 lg:h-26 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
            
            <div className="flex animate-marquee-right hover:pause-marquee whitespace-nowrap">
              {extendedClients.map((client, index) => (
                <div
                  key={`top-${client.name}-${index}`}
                  className="flex-shrink-0 mx-5 lg:mx-7 group transform-gpu"
                >
                  <div className="relative bg-gradient-to-br from-card/95 via-card/90 to-card/85 backdrop-blur-md border border-gradient-to-r from-border/60 via-primary/20 to-border/60 rounded-3xl p-5 lg:p-7 h-18 lg:h-22 w-36 lg:w-44 flex items-center justify-center transition-all duration-700 hover:border-primary/60 hover:bg-gradient-to-br hover:from-card hover:via-primary/5 hover:to-card hover:scale-[1.15] hover:shadow-2xl hover:shadow-primary/30 hover:rotate-y-15 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-primary/10 before:via-transparent before:to-secondary/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-10 lg:max-h-12 object-contain transition-all duration-700 filter brightness-105 contrast-110 saturate-110 group-hover:brightness-130 group-hover:scale-115 group-hover:saturate-125 relative z-10"
                    />
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Marquee - Moving Left */}
          <div className="absolute bottom-0 left-0 right-0 h-22 lg:h-26 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
            
            <div className="flex animate-marquee-left hover:pause-marquee whitespace-nowrap">
              {[...extendedClients].reverse().map((client, index) => (
                <div
                  key={`bottom-${client.name}-${index}`}
                  className="flex-shrink-0 mx-5 lg:mx-7 group transform-gpu"
                >
                  <div className="relative bg-gradient-to-tl from-card/90 via-card/85 to-card/80 backdrop-blur-md border border-gradient-to-l from-border/50 via-secondary/20 to-border/50 rounded-3xl p-5 lg:p-7 h-18 lg:h-22 w-36 lg:w-44 flex items-center justify-center transition-all duration-700 hover:border-secondary/60 hover:bg-gradient-to-tl hover:from-card hover:via-secondary/5 hover:to-card hover:scale-[1.15] hover:shadow-2xl hover:shadow-secondary/30 hover:-rotate-y-15 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-tl before:from-secondary/10 before:via-transparent before:to-primary/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-10 lg:max-h-12 object-contain transition-all duration-700 filter brightness-100 contrast-110 saturate-105 group-hover:brightness-130 group-hover:scale-115 group-hover:saturate-125 relative z-10"
                    />
                    {/* Reverse shine effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
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