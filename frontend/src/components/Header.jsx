import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FBF5E5]/95 backdrop-blur-md shadow-sm' : 'bg-[#FBF5E5]'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-xl font-bold text-[#212121] cursor-pointer hover:text-[#A35C7A] transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Veeksha Aluvala
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-[#212121] hover:text-[#A35C7A] transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A35C7A] transition-all group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-[#A35C7A] hover:bg-[#C890A7] text-white px-6 py-2"
            >
              Contact Me
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#212121] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#C890A7]/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#212121] hover:text-[#A35C7A] transition-colors font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-[#A35C7A] hover:bg-[#C890A7] text-white w-full mt-2"
              >
                Contact Me
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;