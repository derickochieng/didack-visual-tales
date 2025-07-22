import React from 'react';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section id="clients" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Our Trusted Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with leading organizations making a positive impact worldwide
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="glass rounded-xl p-6 lg:p-8 h-32 lg:h-40 flex items-center justify-center hover-lift transition-all duration-300 hover:border-primary/30">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:filter-none group-hover:brightness-100"
                />
                
                {/* Overlay with client name on hover */}
                <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
                  <span className="text-primary font-medium text-center text-sm">
                    {client.name}
                  </span>
                </div>
              </div>
              
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 -z-10 scale-110"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              delay: 5,
            }}
            className="absolute top-3/4 right-1/3 w-3 h-3 bg-accent/40 rounded-full blur-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;