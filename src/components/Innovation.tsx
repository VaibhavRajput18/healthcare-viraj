import React, { useEffect } from 'react';
import { Smartphone, Globe, Database, Users } from 'lucide-react';

const innovations = [
  {
    icon: <Smartphone className="h-12 w-12 text-teal-600" />,
    title: "Mobile Health Solutions",
    description: "Telemedicine platforms connecting remote patients with healthcare providers, reducing geographical barriers to quality care."
  },
  {
    icon: <Database className="h-12 w-12 text-purple-600" />,
    title: "AI Diagnostic Tools",
    description: "Machine learning algorithms that help identify health conditions in resource-limited settings with minimal equipment."
  },
  {
    icon: <Users className="h-12 w-12 text-orange-500" />,
    title: "Community Health Workers",
    description: "Digital platforms empowering local health workers with training, resources, and remote clinical support."
  },
  {
    icon: <Globe className="h-12 w-12 text-teal-600" />,
    title: "Supply Chain Solutions",
    description: "Technology tracking essential medications and supplies to prevent stockouts in hard-to-reach communities."
  }
];

const Innovation = () => {
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
    <section id="innovation" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in text-3xl md:text-4xl font-bold mb-4">Our Innovative Solutions</h2>
          <p className="fade-in text-lg text-gray-700">
            Leveraging cutting-edge technology to create sustainable healthcare solutions 
            specifically designed for underserved regions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((item, index) => (
            <div 
              key={index} 
              className="fade-in card p-6 flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="fade-in mt-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Innovation Pipeline</h3>
              <p className="text-teal-50 mb-4">
                We're constantly developing new solutions to address the evolving needs of underserved communities.
                Our innovation pipeline is guided by direct community input and evidence-based approaches.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">Telehealth 2.0</span>
                <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">Portable Diagnostics</span>
                <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">Solar-powered Equipment</span>
                <span className="bg-teal-700 px-3 py-1 rounded-full text-sm">Offline Medical Data</span>
              </div>
            </div>
            <div className="md:w-1/3">
              <a href="#contact" className="btn bg-white text-teal-600 hover:bg-teal-50 w-full justify-center">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;