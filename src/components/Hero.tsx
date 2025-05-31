import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-teal-50 to-purple-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforming Healthcare Access Through Innovation
          </h1>
          <p className="fade-in text-lg md:text-xl text-gray-700 mb-8">
            We're bridging the gap in healthcare access for underserved communities
            through technological innovation, community partnerships, and sustainable solutions.
          </p>
          <div className="fade-in flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn btn-primary">
              Join Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#innovation" className="btn btn-outline">
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mt-16 md:mt-24">
        <div className="fade-in grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <p className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">500+</p>
            <p className="text-gray-600">Communities Served</p>
          </div>
          <div className="p-4">
            <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">20+</p>
            <p className="text-gray-600">Innovation Projects</p>
          </div>
          <div className="p-4">
            <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">100K+</p>
            <p className="text-gray-600">Lives Impacted</p>
          </div>
          <div className="p-4">
            <p className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">35+</p>
            <p className="text-gray-600">Global Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;