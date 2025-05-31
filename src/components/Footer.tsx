import React from 'react';
import { Heart, Instagram, Twitter, Linkedin, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-teal-500" />
              <span className="ml-2 text-xl font-bold">HealthBridge</span>
            </a>
            <p className="text-gray-400 mb-4">
              Transforming healthcare access in underserved communities through innovation, 
              technology, and partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#innovation" className="text-gray-400 hover:text-teal-500 transition-colors">Innovations</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-teal-500 transition-colors">Impact Stories</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-teal-500 transition-colors">Resources</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-teal-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">News & Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-400 hover:text-teal-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Partnerships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Donate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HealthBridge. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-teal-500 transition-colors"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;