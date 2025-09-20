import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Target, Wrench, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../mock/mockData';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const nextImage = (projectId, maxImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxImages
    }));
  };

  const prevImage = (projectId, maxImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + maxImages) % maxImages
    }));
  };

  return (
    <section id="projects" className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FBF5E5] mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#8A5A94] mx-auto mb-6"></div>
          <p className="text-xl text-[#FBF5E5]/70 max-w-3xl mx-auto">
            Building solutions that make a difference, one line of code at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => {
            const hasMultipleImages = project.demoImages && project.demoImages.length > 1;
            const currentIndex = currentImageIndex[project.id] || 0;
            const currentImage = hasMultipleImages ? project.demoImages[currentIndex] : project.image;
            
            return (
              <Card key={project.id} className="border border-[#8A5A94]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-[#2a2a2a]">
                {/* Project Image Carousel */}
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={currentImage}
                    alt={`${project.title} - Demo ${currentIndex + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#0f0f11]/30 hover:bg-[#0f0f11]/10 transition-colors"></div>
                  
                  {/* Image Navigation */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={() => prevImage(project.id, project.demoImages.length)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#8A5A94]/80 hover:bg-[#8A5A94] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => nextImage(project.id, project.demoImages.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8A5A94]/80 hover:bg-[#8A5A94] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight size={20} />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.demoImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }))}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentIndex ? 'bg-[#A885C4]' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
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
                      className="bg-[#3a3a3a] text-[#A885C4] border border-[#8A5A94]/30"
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
                  <div className="p-3 bg-[#3a3a3a] rounded-lg border border-[#8A5A94]/20">
                    <div className="flex items-center text-[#A885C4] mb-1">
                      <Wrench size={14} className="mr-2" />
                      <span className="font-semibold text-sm">Current Status</span>
                    </div>
                    <p className="text-[#FBF5E5] text-sm">{project.status}</p>
                  </div>
                  
                  <div className="p-3 bg-[#4a4a4a] rounded-lg border border-[#A885C4]/20">
                    <div className="flex items-center text-[#A885C4] mb-1">
                      <Target size={14} className="mr-2" />
                      <span className="font-semibold text-sm">Next Steps</span>
                    </div>
                    <p className="text-[#FBF5E5] text-sm">{project.nextSteps}</p>
                  </div>
                </div>

                {/* Outcome Goal */}
                <div className="p-4 bg-gradient-to-r from-[#8A5A94]/20 to-[#A885C4]/20 rounded-lg border-l-4 border-[#8A5A94]">
                  <h4 className="font-semibold text-[#FBF5E5] mb-2">Impact Goal</h4>
                  <p className="text-[#FBF5E5]/80 text-sm">{project.outcomeGoal}</p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 space-y-3">
                  <Button 
                    variant="outline"
                    className="w-full border-[#A885C4] text-[#A885C4] hover:bg-[#A885C4] hover:text-[#0f0f11] bg-transparent"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Live Demo
                  </Button>
                  
                  {project.githubLink && (
                    <Button 
                      variant="outline"
                      className="w-full border-[#8A5A94] text-[#8A5A94] hover:bg-[#8A5A94] hover:text-white bg-transparent"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      View Source Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
          })}
        </div>

        {/* Testimonials Placeholder */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[#FBF5E5] mb-8">What Others Say</h3>
          <Card className="max-w-2xl mx-auto border border-[#8A5A94]/20 shadow-lg bg-[#2a2a2a]">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#A885C4]/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-[#8A5A94]/30">
                <span className="text-2xl">💬</span>
              </div>
              <p className="text-[#FBF5E5]/60 italic">
                "Testimonials from collaborators and mentors will appear here soon!"
              </p>
              <p className="text-[#A885C4] font-medium mt-4">Coming Soon</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;