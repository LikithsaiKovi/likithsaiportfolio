import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, BarChart3, Database, FileText, ArrowRight, Sparkles } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const Services = () => {
  const services = [
    { icon: Monitor, title: "Web Design & Development", description: "Responsive websites using modern technologies like HTML, CSS, JavaScript, Flask, and Django.", features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"] },
    { icon: BarChart3, title: "Dashboard Development", description: "Interactive dashboards using Power BI, Tableau, Plotly, and Chart.js for actionable insights.", features: ["Power BI Expertise", "Tableau Dashboards", "Real-time Data", "Custom Analytics"] },
    { icon: Database, title: "Data Analysis & Visualization", description: "Comprehensive data analysis using Python with Pandas, Seaborn, and Matplotlib.", features: ["Python Analytics", "Statistical Analysis", "Data Storytelling", "Predictive Modeling"] },
    { icon: FileText, title: "Research & Reports", description: "Technical documentation, research papers, and AI-focused reports for your projects.", features: ["Technical Writing", "Research Papers", "Documentation", "AI Research"] },
  ];

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-24 relative noise-bg">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimateIn className="text-center mb-16">
          <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">What I offer</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Services</span>
          </h2>
        </AnimateIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16" stagger={0.1}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem key={index}>
                <Card className="glass-card hover:border-neon/30 transition-all duration-500 hover-lift group overflow-hidden rounded-xl h-full">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-neon/3 rounded-full blur-3xl group-hover:bg-neon/8 transition-all duration-700" />
                    <div className="relative z-10">
                      <div className="p-4 bg-neon/10 rounded-2xl w-fit mb-6 group-hover:bg-neon/20 group-hover:shadow-[0_0_30px_hsl(var(--neon)/0.15)] transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-neon" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-neon transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <Sparkles className="w-3.5 h-3.5 text-neon mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" className="text-neon hover:text-neon-foreground hover:bg-neon group/btn p-0 h-auto" onClick={scrollToContact}>
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimateIn className="text-center">
          <div className="glass-card rounded-2xl p-10 max-w-4xl mx-auto border border-neon/10">
            <h3 className="text-3xl font-bold mb-4">Ready to bring your ideas to life?</h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Let's collaborate to create something amazing. From data insights to web solutions, I'm here to help.
            </p>
            <Button size="lg" className="bg-neon text-neon-foreground hover:bg-neon/90 neon-glow animate-glow-pulse rounded-xl font-medium" onClick={scrollToContact}>
              Start a Project
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Services;
