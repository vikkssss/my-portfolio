import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Calendar, Send, MapPin, Linkedin } from 'lucide-react';
import { personalInfo } from '../mock/mockData';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🎉",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#FBF5E5] mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-[#8A5A94] mx-auto mb-6"></div>
          <p className="text-xl text-[#FBF5E5]/70 max-w-3xl mx-auto">
            Have a project idea? Want to collaborate? Let's build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border border-[#8A5A94]/20 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2a2a2a]">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-[#FBF5E5]">
                <Send className="mr-3 text-[#A885C4]" size={24} />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-[#FBF5E5] font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 border-[#8A5A94]/30 focus:border-[#A885C4] bg-[#3a3a3a] text-[#FBF5E5]"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#FBF5E5] font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 border-[#8A5A94]/30 focus:border-[#A885C4] bg-[#3a3a3a] text-[#FBF5E5]"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-[#FBF5E5] font-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 border-[#8A5A94]/30 focus:border-[#A885C4] bg-[#3a3a3a] text-[#FBF5E5]"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-[#FBF5E5] font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 border-[#8A5A94]/30 focus:border-[#A885C4] min-h-32 bg-[#3a3a3a] text-[#FBF5E5]"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8A5A94] hover:bg-[#A885C4] text-white py-3 text-lg font-medium border border-[#8A5A94] hover:border-[#A885C4]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Calendar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="border border-[#8A5A94]/20 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2a2a2a]">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-[#FBF5E5]">
                  <Mail className="mr-3 text-[#A885C4]" size={24} />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center p-4 bg-[#3a3a3a] rounded-lg hover:bg-[#4a4a4a] transition-colors border border-[#8A5A94]/20">
                  <Mail className="text-[#A885C4] mr-4" size={20} />
                  <div>
                    <p className="font-medium text-[#FBF5E5]">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#A885C4] hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-[#3a3a3a] rounded-lg hover:bg-[#4a4a4a] transition-colors border border-[#8A5A94]/20">
                  <Linkedin className="text-[#A885C4] mr-4" size={20} />
                  <div>
                    <p className="font-medium text-[#FBF5E5]">LinkedIn</p>
                    <a 
                      href={`https://${personalInfo.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A885C4] hover:underline"
                    >
                      {personalInfo.linkedin}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-[#3a3a3a] rounded-lg border border-[#8A5A94]/20">
                  <MapPin className="text-[#A885C4] mr-4" size={20} />
                  <div>
                    <p className="font-medium text-[#FBF5E5]">Location</p>
                    <p className="text-[#FBF5E5]/70">Tamil Nadu, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calendar Placeholder */}
            <Card className="border border-[#8A5A94]/20 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#2a2a2a]">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-[#FBF5E5]">
                  <Calendar className="mr-3 text-[#A885C4]" size={24} />
                  Schedule a Call
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8 bg-gradient-to-br from-[#3a3a3a] to-[#4a4a4a] rounded-lg border border-[#8A5A94]/20">
                  <Calendar className="mx-auto text-[#A885C4] mb-4" size={48} />
                  <h3 className="text-lg font-bold text-[#FBF5E5] mb-2">Coming Soon!</h3>
                  <p className="text-[#FBF5E5]/70 mb-4">
                    Calendar integration will be available soon for easy scheduling.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-[#A885C4] text-[#A885C4] hover:bg-[#A885C4] hover:text-[#0f0f11] bg-transparent"
                    onClick={() => window.open(`mailto:${personalInfo.email}?subject=Let's Schedule a Call`, '_blank')}
                  >
                    Email to Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;