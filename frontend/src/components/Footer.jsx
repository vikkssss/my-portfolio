import React from 'react';
import { Button } from './ui/button';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../mock/mockData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const iconMap = {
    Github,
    Linkedin, 
    Mail
  };

  return (
    <footer className="bg-[#212121] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
            <p className="text-gray-300">
              {personalInfo.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Computer Science student passionate about building solutions 
              that make a difference. Always learning, always curious.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#C890A7] transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#C890A7] transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#C890A7] transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#C890A7] transition-colors text-left"
              >
                Education
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#C890A7] transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = iconMap[social.icon] || Mail;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="border-[#C890A7] text-[#C890A7] hover:bg-[#C890A7] hover:text-white p-2"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <IconComponent size={18} />
                    </Button>
                  );
                })}
              </div>
            </div>

            <div>
              <Button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#A35C7A] hover:bg-[#C890A7] text-white w-full"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="text-[#A35C7A] fill-current" size={16} />
            <span>by {personalInfo.name}</span>
          </div>

          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <span>© 2024 All rights reserved</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-[#C890A7] hover:text-white transition-colors"
            >
              <ArrowUp size={16} />
              <span>Back to top</span>
            </button>
          </div>
        </div>

        {/* Fun Footer Message */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            "The best way to predict the future is to create it." - Currently creating mine, one commit at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;