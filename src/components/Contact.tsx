import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: ''
    });
  };
  
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
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="fade-in text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
          <p className="fade-in text-lg text-gray-700">
            Join our mission to transform healthcare access. Whether you're a healthcare provider,
            technology partner, funder, or community organization, we want to hear from you.
          </p>
        </div>
        
        <div className="fade-in md:flex md:space-x-8 lg:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-teal-400/30 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:info@healthbridge.org" className="text-teal-100 hover:text-white">
                      info@healthbridge.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-400/30 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-teal-100 hover:text-white">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-400/30 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Office</h4>
                    <address className="text-teal-100 not-italic">
                      123 Innovation Way<br />
                      San Francisco, CA 94107
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-700/30 rounded-lg p-5 mb-6">
                <h4 className="font-semibold mb-2">Newsletter</h4>
                <p className="text-teal-100 text-sm mb-3">
                  Stay updated with our latest innovations and impact stories.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow px-4 py-2 text-gray-800 rounded-l-md focus:outline-none"
                  />
                  <button
                    type="button"
                    className="bg-teal-800 text-white px-4 py-2 rounded-r-md hover:bg-teal-900 transition-colors"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Looking to:</h4>
                <div className="space-y-2">
                  <a href="#" className="block bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-md transition-colors">
                    Volunteer with us
                  </a>
                  <a href="#" className="block bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-md transition-colors">
                    Partner on a project
                  </a>
                  <a href="#" className="block bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-md transition-colors">
                    Support our mission
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;