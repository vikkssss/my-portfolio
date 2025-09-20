import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Target, Wrench, CheckCircle } from 'lucide-react';
import { projects } from '../mock/mockData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FBF5E5] mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#A35C7A] mx-auto mb-6"></div>
          <p className="text-xl text-[#FBF5E5]/70 max-w-3xl mx-auto">
            Building solutions that make a difference, one line of code at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <Card key={project.id} className="border border-[#A35C7A]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-[#2a2a2a]">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0f0f11]/40 hover:bg-[#0f0f11]/20 transition-colors"></div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-[#FBF5E5] mb-2">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="bg-[#3a3a3a] text-[#C890A7] border border-[#A35C7A]/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Problem */}
                <div className="space-y-2">
                  <div className="flex items-center text-red-400">
                    <Target size={16} className="mr-2" />
                    <span className="font-semibold">Problem</span>
                  </div>
                  <p className="text-[#FBF5E5]/80 pl-6">{project.problem}</p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <div className="flex items-center text-green-400">
                    <CheckCircle size={16} className="mr-2" />
                    <span className="font-semibold">Solution</span>
                  </div>
                  <p className="text-[#FBF5E5]/80 pl-6">{project.solution}</p>
                </div>

                {/* Status & Next Steps */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-3 bg-[#3a3a3a] rounded-lg border border-[#A35C7A]/20">
                    <div className="flex items-center text-[#C890A7] mb-1">
                      <Wrench size={14} className="mr-2" />
                      <span className="font-semibold text-sm">Current Status</span>
                    </div>
                    <p className="text-[#FBF5E5] text-sm">{project.status}</p>
                  </div>
                  
                  <div className="p-3 bg-[#4a4a4a] rounded-lg border border-[#C890A7]/20">
                    <div className="flex items-center text-[#C890A7] mb-1">
                      <Target size={14} className="mr-2" />
                      <span className="font-semibold text-sm">Next Steps</span>
                    </div>
                    <p className="text-[#FBF5E5] text-sm">{project.nextSteps}</p>
                  </div>
                </div>

                {/* Outcome Goal */}
                <div className="p-4 bg-gradient-to-r from-[#A35C7A]/20 to-[#C890A7]/20 rounded-lg border-l-4 border-[#A35C7A]">
                  <h4 className="font-semibold text-[#FBF5E5] mb-2">Impact Goal</h4>
                  <p className="text-[#FBF5E5]/80 text-sm">{project.outcomeGoal}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline"
                    className="flex-1 border-[#C890A7] text-[#C890A7] hover:bg-[#C890A7] hover:text-[#0f0f11] bg-transparent"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Demo
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-[#A35C7A] text-[#A35C7A] hover:bg-[#A35C7A] hover:text-white bg-transparent"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Placeholder */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[#FBF5E5] mb-8">What Others Say</h3>
          <Card className="max-w-2xl mx-auto border border-[#A35C7A]/20 shadow-lg bg-[#2a2a2a]">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#C890A7]/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-[#A35C7A]/30">
                <span className="text-2xl">💬</span>
              </div>
              <p className="text-[#FBF5E5]/60 italic">
                "Testimonials from collaborators and mentors will appear here soon!"
              </p>
              <p className="text-[#C890A7] font-medium mt-4">Coming Soon</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;