import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, BookOpen, Users, Calendar } from 'lucide-react';
import { education } from '../mock/mockData';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-[#0f0f11]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FBF5E5] mb-4">Education</h2>
          <div className="w-20 h-1 bg-[#8A5A94] mx-auto mb-6"></div>
          <p className="text-xl text-[#FBF5E5]/70 max-w-3xl mx-auto">
            Academic journey and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* University Info */}
          <Card className="md:col-span-1 border border-[#8A5A94]/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-[#2a2a2a] group overflow-hidden">
            <CardHeader className="bg-[#8A5A94] text-white border-b border-[#8A5A94]/20 group-hover:bg-[#A885C4] transition-colors duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="flex items-center relative z-10">
                <GraduationCap className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
                <CardTitle className="text-lg">University</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="group-hover:scale-105 transition-transform duration-300">
                  <h3 className="font-bold text-[#FBF5E5] text-lg">{education.university}</h3>
                  <p className="text-[#FBF5E5]/70">{education.degree}</p>
                </div>
                <div className="flex items-center text-[#A885C4] group-hover:text-[#8A5A94] transition-colors duration-300">
                  <Calendar size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{education.year}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coursework */}
          <Card className="md:col-span-1 border border-[#8A5A94]/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-[#2a2a2a] group">
            <CardHeader className="bg-[#A885C4] text-white border-b border-[#8A5A94]/20 group-hover:bg-[#8A5A94] transition-colors duration-300">
              <div className="flex items-center">
                <BookOpen className="mr-3 group-hover:rotate-6 transition-transform duration-300" size={24} />
                <CardTitle className="text-lg">Relevant Coursework</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {education.relevantCoursework.map((course, index) => (
                  <div 
                    key={index} 
                    className="p-2 bg-[#3a3a3a] rounded-lg border-l-3 border-[#A885C4] hover:bg-[#4a4a4a] hover:border-l-4 hover:translate-x-2 transition-all duration-300 cursor-pointer"
                    style={{transitionDelay: `${index * 50}ms`}}
                  >
                    <span className="text-[#FBF5E5] text-sm font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activities & Involvement */}
          <Card className="md:col-span-1 border border-[#8A5A94]/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-[#2a2a2a] group">
            <CardHeader className="bg-[#8A5A94] text-white border-b border-[#8A5A94]/20 group-hover:bg-[#A885C4] transition-colors duration-300">
              <div className="flex items-center">
                <Users className="mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                <CardTitle className="text-lg">Activities & Involvement</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {education.activities.map((activity, index) => (
                  <div key={index} className="flex items-start group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                    <div className="w-3 h-3 bg-[#A885C4] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-[#FBF5E5] font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Stats */}
        <div className="mt-16">
          <Card className="border border-[#8A5A94]/20 shadow-lg bg-[#2a2a2a]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#FBF5E5] mb-8 text-center">Academic Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="p-6 bg-[#3a3a3a] rounded-lg border border-[#8A5A94]/20">
                  <div className="text-3xl font-bold text-[#A885C4] mb-2">2nd</div>
                  <div className="text-[#FBF5E5]/70">Year Student</div>
                </div>
                <div className="p-6 bg-[#3a3a3a] rounded-lg border border-[#8A5A94]/20">
                  <div className="text-3xl font-bold text-[#A885C4] mb-2">6+</div>
                  <div className="text-[#FBF5E5]/70">Core Subjects</div>
                </div>
                <div className="p-6 bg-[#3a3a3a] rounded-lg border border-[#8A5A94]/20">
                  <div className="text-3xl font-bold text-[#A885C4] mb-2">3</div>
                  <div className="text-[#FBF5E5]/70">Major Achievements</div>
                </div>
                <div className="p-6 bg-[#3a3a3a] rounded-lg border border-[#8A5A94]/20">
                  <div className="text-3xl font-bold text-[#A885C4] mb-2">4.0</div>
                  <div className="text-[#FBF5E5]/70">Learning Attitude</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;