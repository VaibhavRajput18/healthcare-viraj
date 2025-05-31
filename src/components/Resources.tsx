import React, { useEffect } from 'react';
import { Download, ExternalLink, BookOpen, FileText } from 'lucide-react';

const resources = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Telemedicine Implementation Guide",
    description: "Step-by-step guide for setting up telemedicine services in low-resource settings.",
    type: "Guide",
    link: "#"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Community Health Worker Training",
    description: "Training materials for equipping community health workers with digital tools.",
    type: "Training",
    link: "#"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Offline Medical Records System",
    description: "Technical documentation for implementing offline-capable medical records.",
    type: "Documentation",
    link: "#"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Healthcare Innovation Research",
    description: "Latest research on effective healthcare innovations in underserved communities.",
    type: "Research",
    link: "#"
  }
];

const Resources = () => {
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
    <section id="resources" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in text-3xl md:text-4xl font-bold mb-4">Resource Hub</h2>
          <p className="fade-in text-lg text-gray-700">
            Access guides, research, and tools to implement healthcare innovations
            in your community or organization.
          </p>
        </div>
        
        <div className="fade-in grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="card hover:border-teal-500 border-2 border-transparent transition-colors"
            >
              <div className="p-6">
                <div className="mb-4 text-gray-600">
                  {resource.icon}
                </div>
                <div className="mb-2">
                  <span className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-2 py-0.5 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.link} 
                  className="inline-flex items-center text-teal-600 hover:text-teal-700"
                >
                  <span>Access resource</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="fade-in mt-16 bg-purple-50 rounded-2xl p-8 md:p-12">
          <div className="md:flex justify-between items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Healthcare Innovation Toolkit</h3>
              <p className="text-gray-700 mb-4">
                Download our comprehensive toolkit with templates, frameworks, and best practices
                for implementing healthcare innovations in resource-constrained environments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="bg-purple-200 rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Needs assessment templates</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-200 rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Implementation checklists</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-200 rounded-full p-1 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Evaluation frameworks</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 md:pl-8">
              <a 
                href="#" 
                className="btn btn-primary w-full justify-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Toolkit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;