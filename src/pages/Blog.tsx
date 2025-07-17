
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'SHOFCO Youth Talent Show: Celebrating Creativity and Community',
      excerpt: 'Documenting the incredible talent and spirit of young people in Kibera through our lens, showcasing how art and creativity can transform communities.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4d5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Allan Didack',
      date: '2024-01-15',
      category: 'Community',
      featured: true
    },
    {
      id: 2,
      title: 'The Art of Corporate Event Photography: Capturing Professional Moments',
      excerpt: 'Learn the techniques and approaches we use to document corporate events with authenticity and professionalism.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Cole Charles',
      date: '2024-01-10',
      category: 'Corporate'
    },
    {
      id: 3,
      title: 'Climate Change Photography: Visual Storytelling for Environmental Impact',
      excerpt: 'How we use photography to document environmental changes and tell compelling stories about climate action.',
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Allan Didack',
      date: '2024-01-05',
      category: 'Environment'
    },
    {
      id: 4,
      title: 'Building Your Brand Through Strategic Visual Content',
      excerpt: 'Sharon shares insights on how organizations can leverage photography and videography to strengthen their brand narrative.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Sharon Nyoike',
      date: '2023-12-28',
      category: 'Strategy'
    },
    {
      id: 5,
      title: 'Humanitarian Photography: Ethics and Impact',
      excerpt: 'Exploring the responsibilities and considerations when documenting humanitarian work and social impact initiatives.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Allan Didack',
      date: '2023-12-20',
      category: 'Humanitarian'
    },
    {
      id: 6,
      title: 'Behind the Scenes: Conference Photography Best Practices',
      excerpt: 'A look at how we approach conference photography to ensure comprehensive coverage and engaging visuals.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Cole Charles',
      date: '2023-12-15',
      category: 'Corporate'
    }
  ];

  const categories = ['All', 'Community', 'Corporate', 'Environment', 'Strategy', 'Humanitarian'];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Insights, stories, and behind-the-scenes looks at our photography and videography work, 
              plus tips on visual storytelling and social impact media.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map(post => (
        <section key={post.id} className="section-padding bg-gray-900">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm text-white mb-4">
                  Featured
                </div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>
                
                <div className="flex items-center text-gray-400 text-sm mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                
                <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-6">
              Latest Posts
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article 
                key={post.id}
                className="bg-gray-900 rounded-lg overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs text-white mb-3">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
