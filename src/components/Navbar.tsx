import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, CrossIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Enable scrolling
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-cyan-400 font-bold text-2xl">
          <a href="#home" className="group">
            <span className="relative">
              &lt;dev<span className="text-white">/</span>&gt;
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <p><CrossIcon onClick={() => handleClose()} className='translate-x-4 translate-y-4 rotate-45' /></p>
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;