
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Capturing Climate Change Stories Through Photography",
      excerpt: "How visual storytelling can drive environmental awareness and action in our communities.",
      image: "https://images.unsplash.com/photo-1569163139394-de44cb2feb65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2024",
      author: "Allan Didack",
      category: "Environmental"
    },
    {
      title: "The Art of Corporate Event Photography",
      excerpt: "Essential tips for documenting professional events while maintaining authenticity and engagement.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024",
      author: "Cole Charles",
      category: "Corporate"
    },
    {
      title: "Building Authentic Brand Stories",
      excerpt: "How strategic content creation can amplify your organization's mission and create lasting impact.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2024",
      author: "Sharon Nyoike",
      category: "Strategy"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Thoughts, stories, and insights from our team about photography, storytelling, and social impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="glass rounded-lg overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full mb-3">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-playfair font-bold text-white mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <Button variant="ghost" className="text-white hover:bg-white/10 p-0 h-auto font-medium">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-4">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
