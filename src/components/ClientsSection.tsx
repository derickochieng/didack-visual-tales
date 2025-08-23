import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: "Convoy of Hope",
      logo: "/lovable-uploads/a2be3d53-ed0e-499f-af57-3601469a04c5.png",
    },
    {
      name: "SHOFCO",
      logo: "/lovable-uploads/ae99bc7a-4db4-4080-b21e-9fd13d0287bb.png",
    },
    {
      name: "Wangari Maathai Foundation",
      logo: "/lovable-uploads/5eb469d0-908d-422e-a8b4-0debea8aa532.png",
    },
    {
      name: "Medic East Africa",
      logo: "/lovable-uploads/b623f9c9-a726-44fc-92b2-f11da3477bc2.png",
    },
    {
      name: "Teach For All",
      logo: "/lovable-uploads/55bd63fd-83a1-494a-aff8-b975427859bc.png",
    },
    {
      name: "ISFAA",
      logo: "/lovable-uploads/3ef96afa-f794-4821-a8bb-242257ff26f5.png",
    },
    {
      name: "International Funders for Indigenous Peoples",
      logo: "/lovable-uploads/f2ab6830-1937-4845-8685-71506674a1ad.png",
    },
  ];

  return (
    <section id="clients" className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-pulse">
            <span className="text-primary font-medium text-sm">Trusted Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 animate-fade-in">
            Our Valued Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Collaborating with world-class organizations to create meaningful visual stories
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 lg:gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 h-32 lg:h-36 flex flex-col items-center justify-center transition-all duration-500 hover:border-primary/30 hover:bg-card/90 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10">
                {/* Logo */}
                <div className="relative mb-3 overflow-hidden rounded-lg">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-16 lg:max-h-20 object-contain transition-all duration-500 filter brightness-90 contrast-110 group-hover:brightness-110 group-hover:scale-110"
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                {/* Client name */}
                <span className="text-foreground/80 group-hover:text-primary font-medium text-center text-xs lg:text-sm leading-tight transition-colors duration-300">
                  {client.name}
                </span>

                {/* Floating dots */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">7</div>
            <div className="text-muted-foreground">Trusted Partners</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;