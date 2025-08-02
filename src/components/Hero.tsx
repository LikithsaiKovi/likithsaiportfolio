import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-neon font-medium tracking-wide uppercase">
                Currently Available For Freelance
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi,👋 I'm{" "}
                <span className="text-gradient">
                  Likith Sai
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
                AI & Data Science{" "}
                <span className="text-neon">Enthusiast</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Turning data into meaningful impact | Building intelligent web solutions 
              with expertise in Python, Machine Learning, and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-neon text-neon-foreground hover:bg-neon/90 neon-glow animate-glow-pulse"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-neon text-neon hover:bg-neon hover:text-neon-foreground"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-8">
              <a 
                href="https://github.com/LikithsaiKovi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/likithsaikovi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:sailikith511@gmail.com"
                className="text-muted-foreground hover:text-neon transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-neon/20 to-neon-glow/20 rounded-full border-2 border-neon/30 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-neon/10 rounded-full mx-auto border border-neon/30"></div>
                  <p className="text-sm text-muted-foreground">
                    Profile photo
                    <br />
                    to be added
                  </p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-glow/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-neon hover:text-neon-glow transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;