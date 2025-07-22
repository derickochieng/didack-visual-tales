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

  // Duplicate the clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="section-padding bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Our Trusted Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with leading organizations making a positive impact worldwide
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays for seamless fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Marquee wrapper */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee hover:pause-marquee">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="glass rounded-xl p-6 lg:p-8 h-24 lg:h-32 w-32 lg:w-40 flex items-center justify-center transition-all duration-300 hover:border-primary/30 hover:scale-110">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:filter-none group-hover:brightness-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;