import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Palette, Music, Film, Zap } from 'lucide-react';
import { aboutInfo } from '../mock/mockData';

const About = () => {
  const hobbyIcons = {
    "Drawing/Painting": Palette,
    "Listening to Music": Music,
    "Reading Mystery Novels": BookOpen,
    "Watching Animated Movies": Film
  };

  return (
    <section id="about" className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FBF5E5] mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#A35C7A] mx-auto mb-6"></div>
          <p className="text-xl text-[#FBF5E5]/70 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Main About Text */}
          <Card className="border border-[#A35C7A]/20 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2a2a2a]">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="text-[#C890A7] mr-3" size={24} />
                <h3 className="text-2xl font-bold text-[#FBF5E5]">My Story</h3>
              </div>
              <p className="text-[#FBF5E5]/80 leading-relaxed text-lg">
                {aboutInfo.description}
              </p>
            </CardContent>
          </Card>

          {/* Hobbies */}
          <Card className="border border-[#A35C7A]/20 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2a2a2a]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#FBF5E5] mb-6">When I'm Not Coding</h3>
              <div className="grid grid-cols-2 gap-4">
                {aboutInfo.hobbies.map((hobby, index) => {
                  const IconComponent = hobbyIcons[hobby] || BookOpen;
                  return (
                    <div key={index} className="flex items-center p-3 rounded-lg bg-[#3a3a3a] hover:bg-[#4a4a4a] transition-colors border border-[#A35C7A]/10">
                      <IconComponent className="text-[#C890A7] mr-3" size={20} />
                      <span className="text-[#FBF5E5] font-medium">{hobby}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Currently Learning */}
        <Card className="border border-[#A35C7A]/20 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2a2a2a]">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-[#FBF5E5] mb-6 text-center">What I'm Learning Now</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {aboutInfo.currentlyLearning.map((item, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="bg-[#A35C7A] text-white hover:bg-[#C890A7] px-4 py-2 text-sm font-medium border border-[#A35C7A]"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;