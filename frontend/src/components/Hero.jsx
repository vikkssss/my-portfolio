import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Code, Sparkles } from 'lucide-react';
import { personalInfo } from '../mock/mockData';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-[#0f0f11] flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-[#A885C4]">
              <Code size={20} />
              <span className="text-sm font-medium tracking-wide">COMPUTER SCIENCE STUDENT</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#FBF5E5] leading-tight">
              {personalInfo.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#A885C4] font-medium">
              {personalInfo.tagline}
            </p>
            
            <p className="text-lg text-[#FBF5E5]/70 max-w-md mx-auto md:mx-0">
              Curious sophomore exploring the infinite possibilities of code, 
              one rabbit hole at a time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              onClick={scrollToContact}
              className="bg-[#8A5A94] hover:bg-[#A885C4] text-white px-8 py-3 text-lg font-medium group border border-[#8A5A94] hover:border-[#A885C4]"
            >
              Contact Me
              <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              onClick={scrollToAbout}
              className="border-[#A885C4] text-[#A885C4] hover:bg-[#A885C4] hover:text-[#0f0f11] px-8 py-3 text-lg font-medium bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center md:justify-start pt-8">
            <button 
              onClick={scrollToAbout}
              className="text-[#A885C4] hover:text-[#8A5A94] transition-colors animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={28} />
            </button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-[#A885C4]/20 to-[#8A5A94]/20 p-2 border-2 border-[#8A5A94]/30">
              <img
                src={personalInfo.profileImages[0]}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#8A5A94] rounded-full flex items-center justify-center text-white animate-pulse border-2 border-[#A885C4]/50">
              <Code size={20} />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#A885C4] rounded-full flex items-center justify-center text-white animate-bounce border-2 border-[#8A5A94]/50">
              <Sparkles size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;