
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            Let's Create Together
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">
            Ready to tell your story? Get in touch with us to discuss your next project
          </p>
          <Link to="/contact">
            <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 mt-4">
              Get in Touch
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="glass rounded-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Enter your first name"
                      className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Enter your last name"
                      className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <Input 
                    placeholder="Corporate Event, Studio Shoot, Documentary, etc."
                    className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-black/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in space-y-8">
            <div className="glass rounded-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                Get in touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@didackmedia.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+254716760709</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-white mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-8">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">
                Our Clients
              </h3>
              <p className="text-gray-300 mb-4">
                We've had the privilege of working with:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• SHOFCO</li>
                <li>• Local NGOs</li>
                <li>• International Organizations</li>
                <li>• Corporate Entities</li>
                <li>• Environmental Groups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
