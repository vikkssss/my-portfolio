import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Code2, FileCode2, Globe, Palette, Zap, Component, 
  Server, Database, GitBranch, Brain, Shield, Atom 
} from 'lucide-react';
import { skills } from '../mock/mockData';

const Skills = () => {
  const iconMap = {
    Code2, FileCode2, Globe, Palette, Zap, Component,
    Server, Database, GitBranch, Brain, Shield, Atom
  };

  const SkillCard = ({ title, skillList, bgColor }) => (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader className={`${bgColor} text-white`}>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-4">
          {skillList.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#FBF5E5] hover:bg-[#C890A7]/10 transition-colors">
                <div className="flex items-center">
                  <IconComponent className="text-[#A35C7A] mr-3" size={20} />
                  <span className="font-medium text-[#212121]">{skill.name}</span>
                </div>
                {skill.level && (
                  <Badge 
                    variant="outline" 
                    className="border-[#A35C7A] text-[#A35C7A] text-xs"
                  >
                    {skill.level}
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 px-6 bg-[#FBF5E5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#212121] mb-4">Skills & Interests</h2>
          <div className="w-20 h-1 bg-[#A35C7A] mx-auto mb-6"></div>
          <p className="text-xl text-[#212121]/70 max-w-3xl mx-auto">
            My technical toolkit and areas of exploration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard 
            title="Programming Languages" 
            skillList={skills.languages}
            bgColor="bg-[#A35C7A]"
          />
          
          <SkillCard 
            title="Web Technologies" 
            skillList={skills.webTech}
            bgColor="bg-[#C890A7]"
          />
          
          <SkillCard 
            title="Tools & Frameworks" 
            skillList={skills.tools}
            bgColor="bg-[#A35C7A]"
          />
          
          <SkillCard 
            title="Areas of Interest" 
            skillList={skills.interests}
            bgColor="bg-[#C890A7]"
          />
        </div>

        {/* Fun Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#A35C7A] mb-2">3+</div>
            <div className="text-[#212121]/70">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#A35C7A] mb-2">2</div>
            <div className="text-[#212121]/70">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#A35C7A] mb-2">∞</div>
            <div className="text-[#212121]/70">Curiosity Level</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#A35C7A] mb-2">5+</div>
            <div className="text-[#212121]/70">Learning Areas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;