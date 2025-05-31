import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Heart className="h-8 w-8 text-teal-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">HealthBridge</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#innovation" className="text-gray-700 hover:text-teal-600 transition-colors">Innovations</a>
          <a href="#impact" className="text-gray-700 hover:text-teal-600 transition-colors">Impact</a>
          <a href="#resources" className="text-gray-700 hover:text-teal-600 transition-colors">Resources</a>
          <a href="#team" className="text-gray-700 hover:text-teal-600 transition-colors">Team</a>
          <a href="#contact" className="btn btn-primary">Get Involved</a>
        </nav>
        
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 space-y-4">
            <a href="#innovation" className="block text-gray-700 hover:text-teal-600 transition-colors">Innovations</a>
            <a href="#impact" className="block text-gray-700 hover:text-teal-600 transition-colors">Impact</a>
            <a href="#resources" className="block text-gray-700 hover:text-teal-600 transition-colors">Resources</a>
            <a href="#team" className="block text-gray-700 hover:text-teal-600 transition-colors">Team</a>
            <a href="#contact" className="block text-center btn btn-primary">Get Involved</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;