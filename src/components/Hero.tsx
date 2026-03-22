import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, Database, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["AI & Data Science Enthusiast", "Full Stack Developer", "ML Engineer", "Data Analyst"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const techBadges = [
    { icon: Code, label: "Python" },
    { icon: Database, label: "ML" },
    { icon: BarChart3, label: "Data Analysis" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] animate-morph" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-neon-glow/5 rounded-full blur-[100px] animate-morph" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon" />
              </span>
              <span className="text-sm font-medium text-neon bg-neon/10 px-4 py-1.5 rounded-full border border-neon/20 backdrop-blur-sm font-mono">
                Available for Freelance
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block text-gradient">Likith</span>
              </h1>
              <div className="h-10 flex items-center">
                <span className="text-xl md:text-2xl text-muted-foreground font-light">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 bg-neon ml-1 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Tech Badges */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {techBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl text-sm font-medium hover-lift cursor-default"
                >
                  <badge.icon className="w-4 h-4 text-neon" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Turning data into meaningful impact through intelligent solutions.
              Building the future with Python, Machine Learning, and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="group bg-neon text-neon-foreground hover:bg-neon/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--neon)/0.4)] rounded-xl font-medium"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowDown className="w-4 h-4 ml-2 -rotate-90 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-neon/30 text-neon hover:bg-neon/10 hover:border-neon backdrop-blur-sm rounded-xl font-medium transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
                <Mail className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {[
                { href: "https://github.com/LikithsaiKovi", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/likithsaikovi", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:sailikith511@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="p-3 glass-card rounded-xl transition-all duration-300 hover:bg-neon/10 hover:border-neon/40 hover:shadow-[0_0_20px_hsl(var(--neon)/0.15)]"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-neon transition-colors" />
                </motion.a>
              ))}
              <div className="h-6 w-px bg-border/50 mx-2" />
              <span className="text-sm text-muted-foreground/60 font-mono">Let's connect</span>
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group">
              {/* Profile ring */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon via-neon-glow to-neon p-[2px] animate-[spin_6s_linear_infinite]">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>
                <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-background">
                  <img
                    src="/lovable-uploads/c0fe98f9-143d-4a0f-a6d1-d5b53c9444c1.png"
                    alt="Kovi Venkata Likith Sai - AI & Data Science Enthusiast"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 glass-card rounded-2xl flex items-center justify-center"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-5 h-5 text-neon" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 glass-card rounded-xl flex items-center justify-center"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Database className="w-4 h-4 text-neon" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 w-3 h-3 bg-neon/40 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-full bg-neon/5 blur-[60px] group-hover:bg-neon/10 transition-all duration-700" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon/60 hover:text-neon transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
