
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 fade-in-up">
          {/* Professional Photo */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-32 h-32 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
              <AvatarImage 
                src="/lovable-uploads/2cce3b83-391b-439e-bebf-8347da1c4036.png" 
                alt="Abdul Haseeb"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                AH
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium text-lg tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Abdul <span className="text-primary">Haseeb</span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-muted-foreground">
                Accountant - AI Developer - Data Science - GenAI & Prompt Engineer
              </h2>
              <p className="text-lg sm:text-xl text-accent font-medium">
                Building the future of financial automation
              </p>
            </div>
          </div>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            I bridge traditional finance with cutting-edge AI technology, creating intelligent solutions 
            that transform accounting workflows and enhance business decision-making.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group min-w-[200px] h-12 text-base"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px] h-12 text-base border-2"
              asChild
            >
              <a href="https://drive.google.com/file/d/18Z0UdZUvNh6BCNQZ11FfSlh8CyPbPShe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8">
            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-primary/10 hover:text-primary" asChild>
              <a href="mailto:abdulhaseebmirza69@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-primary/10 hover:text-primary" asChild>
              <a href="https://www.linkedin.com/in/abdul-haseeb-980075323/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-primary/10 hover:text-primary" asChild>
              <a href="http://github.com/abdul-haseeb-0/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
