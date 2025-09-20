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
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#212121] mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-[#A35C7A] mx-auto mb-6"></div>
          <p className="text-xl text-[#212121]/70 max-w-3xl mx-auto">
            Have a project idea? Want to collaborate? Let's build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold text-[#212121]">
                <Send className="mr-3 text-[#A35C7A]" size={24} />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-[#212121] font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 border-[#C890A7]/30 focus:border-[#A35C7A]"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#212121] font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 border-[#C890A7]/30 focus:border-[#A35C7A]"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-[#212121] font-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 border-[#C890A7]/30 focus:border-[#A35C7A]"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-[#212121] font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 border-[#C890A7]/30 focus:border-[#A35C7A] min-h-32"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A35C7A] hover:bg-[#C890A7] text-white py-3 text-lg font-medium"
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
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-[#212121]">
                  <Mail className="mr-3 text-[#A35C7A]" size={24} />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center p-4 bg-[#FBF5E5] rounded-lg hover:bg-[#C890A7]/10 transition-colors">
                  <Mail className="text-[#A35C7A] mr-4" size={20} />
                  <div>
                    <p className="font-medium text-[#212121]">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#A35C7A] hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-[#FBF5E5] rounded-lg hover:bg-[#C890A7]/10 transition-colors">
                  <Linkedin className="text-[#A35C7A] mr-4" size={20} />
                  <div>
                    <p className="font-medium text-[#212121]">LinkedIn</p>
                    <a 
                      href={`https://${personalInfo.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A35C7A] hover:underline"
                    >
                      {personalInfo.linkedin}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-[#FBF5E5] rounded-lg">
                  <MapPin className="text-[#A35C7A] mr-4" size={20} />
                  <div>
                    <p className="font-medium text-[#212121]">Location</p>
                    <p className="text-[#212121]/70">Tamil Nadu, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calendar Placeholder */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-[#212121]">
                  <Calendar className="mr-3 text-[#A35C7A]" size={24} />
                  Schedule a Call
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8 bg-gradient-to-br from-[#FBF5E5] to-[#C890A7]/10 rounded-lg">
                  <Calendar className="mx-auto text-[#A35C7A] mb-4" size={48} />
                  <h3 className="text-lg font-bold text-[#212121] mb-2">Coming Soon!</h3>
                  <p className="text-[#212121]/70 mb-4">
                    Calendar integration will be available soon for easy scheduling.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-[#A35C7A] text-[#A35C7A] hover:bg-[#A35C7A] hover:text-white"
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