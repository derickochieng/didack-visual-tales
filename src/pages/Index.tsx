
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import GalleryPreview from '../components/GalleryPreview';
import TeamSection from '../components/TeamSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import GallerySection from '../components/GallerySection';
import AboutSection from '../components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
