import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Database } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-background/50">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Main gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-neon/20 via-neon-glow/15 to-transparent rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-neon-glow/20 via-neon/10 to-transparent rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-neon/5 via-transparent to-neon-glow/5 rounded-full blur-2xl animate-[spin_20s_linear_infinite] opacity-30"></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-neon/5 to-transparent opacity-40"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="flex items-center gap-2 w-fit">
              <div className="relative">
                <div className="w-3 h-3 bg-neon rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-neon rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-neon font-medium tracking-wide text-sm bg-neon/10 px-3 py-1 rounded-full border border-neon/20 backdrop-blur-sm">
                Available for Freelance
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="block text-foreground">Hi,</span>
                  <span className="block bg-gradient-to-r from-neon via-neon-glow to-neon bg-clip-text text-transparent">
                    I'm Likith
                  </span>
                </h1>
                <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-muted-foreground">
                  <Sparkles className="w-6 h-6 text-neon animate-pulse" />
                  <span>AI & Data Science</span>
                  <span className="text-neon font-bold">Enthusiast</span>
                </div>
              </div>

              {/* Tech Icons */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-card/50 border border-border/50 rounded-lg backdrop-blur-sm">
                  <Code className="w-4 h-4 text-neon" />
                  <span className="text-sm font-medium">Python</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-card/50 border border-border/50 rounded-lg backdrop-blur-sm">
                  <Database className="w-4 h-4 text-neon" />
                  <span className="text-sm font-medium">ML</span>
                </div>
                <div className="w-2 h-2 bg-neon/30 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
                Turning data into meaningful impact through intelligent solutions.
              </p>
              <p className="text-lg text-muted-foreground/80 max-w-lg leading-relaxed">
                Building the future with Python, Machine Learning, and modern web technologies.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="group relative bg-neon text-neon-foreground hover:bg-neon/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-glow to-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group relative border-2 border-neon/30 text-neon hover:bg-neon/10 hover:border-neon backdrop-blur-sm bg-background/10 transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-4">
                {[
                  { href: "https://github.com/LikithsaiKovi", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/likithsaikovi", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:sailikith511@gmail.com", icon: Mail, label: "Email" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                    rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                    className="group relative p-3 bg-card/30 border border-border/30 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-neon/10 hover:border-neon/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,0,0.2)]"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-neon transition-colors duration-300" />
                  </a>
                ))}
              </div>
              <div className="h-6 w-px bg-border/50"></div>
              <span className="text-sm text-muted-foreground/60 font-light">Let's connect</span>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-background via-card to-background border border-border/30 backdrop-blur-sm overflow-hidden">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon via-neon-glow to-neon p-[2px] animate-[spin_3s_linear_infinite]">
                  <div className="w-full h-full rounded-full bg-background"></div>
                </div>
                
                {/* Content */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-card/80 to-background/60 backdrop-blur-xl border border-border/20 overflow-hidden">
                  <div className="relative w-full h-full">
                    {/* Profile Image */}
                    <img 
                      src="/lovable-uploads/c0fe98f9-143d-4a0f-a6d1-d5b53c9444c1.png"
                      alt="Kovi Venkata Likith Sai - AI & Data Science Enthusiast"
                      className="w-full h-full object-cover object-center rounded-full"
                    />
                    
                    {/* Overlay gradient for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-full"></div>
                    
                    {/* Tech stack indicators */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon/20 rounded-full border border-neon/30 flex items-center justify-center backdrop-blur-sm">
                      <Code className="w-4 h-4 text-neon" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-neon-glow/20 rounded-full border border-neon/30 flex items-center justify-center backdrop-blur-sm">
                      <Database className="w-4 h-4 text-neon" />
                    </div>
                  </div>
                </div>

                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-neon/5 to-transparent blur-xl"></div>
              </div>

              {/* Floating Tech Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-neon/20 to-neon-glow/20 rounded-xl border border-neon/20 backdrop-blur-sm flex items-center justify-center animate-float">
                <Sparkles className="w-6 h-6 text-neon" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-neon-glow/20 to-neon/20 rounded-lg border border-neon/20 backdrop-blur-sm flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-3 h-3 bg-neon rounded-full animate-pulse"></div>
              </div>

              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-neon/10 rounded-full animate-float border border-neon/30" style={{ animationDelay: '0.5s' }}></div>
              
              <div className="absolute bottom-1/3 -right-4 w-4 h-4 bg-neon-glow/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>

              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-full bg-neon/5 blur-3xl group-hover:bg-neon/10 transition-colors duration-500"></div>
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