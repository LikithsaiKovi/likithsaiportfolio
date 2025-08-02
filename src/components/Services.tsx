import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  BarChart3, 
  Database, 
  FileText,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Design & Development",
      description: "Responsive websites using modern technologies like HTML, CSS, JavaScript, Flask, and Django. Clean, user-friendly interfaces optimized for all devices.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Dashboard Development",
      description: "Interactive dashboards using Power BI, Tableau, Plotly, and Chart.js. Transform your data into actionable insights with beautiful visualizations.",
      features: ["Power BI Expertise", "Tableau Dashboards", "Real-time Data", "Custom Analytics"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Data Analysis & Visualization",
      description: "Comprehensive data analysis using Python with Pandas, Seaborn, and Matplotlib. Create compelling data stories that drive business decisions.",
      features: ["Python Analytics", "Statistical Analysis", "Data Storytelling", "Predictive Modeling"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Research & Reports",
      description: "Technical documentation, research papers, and AI-focused reports. Clear, comprehensive documentation for your technical projects and research initiatives.",
      features: ["Technical Writing", "Research Papers", "Documentation", "AI Research"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions combining AI, data science, and web development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="border-border/50 hover:border-neon/30 transition-all duration-500 hover:shadow-xl hover:shadow-neon/10 group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="p-4 bg-neon/10 rounded-xl w-fit mb-6 group-hover:bg-neon/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-neon" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-neon transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <Sparkles className="w-4 h-4 text-neon mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="ghost" 
                      className="text-neon hover:text-neon-foreground hover:bg-neon group/btn p-0"
                      onClick={scrollToContact}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-neon/10 to-neon-glow/10 border border-neon/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's collaborate to create something amazing. From data insights to web solutions, 
              I'm here to help turn your vision into reality.
            </p>
            <Button 
              size="lg" 
              className="bg-neon text-neon-foreground hover:bg-neon/90 neon-glow animate-glow-pulse"
              onClick={scrollToContact}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;