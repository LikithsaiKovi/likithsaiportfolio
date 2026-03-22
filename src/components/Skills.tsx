import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, BarChart, Cloud, Terminal, Brain, Globe } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    { category: "Programming Languages", icon: Code, skills: [
      { name: "Python", level: 90 }, { name: "JavaScript", level: 75 }, { name: "HTML/CSS", level: 85 }, { name: "C", level: 70 }
    ]},
    { category: "Data Science & ML", icon: Brain, skills: [
      { name: "Pandas", level: 85 }, { name: "NumPy", level: 80 }, { name: "Scikit-learn", level: 75 }, { name: "Matplotlib/Seaborn", level: 90 }
    ]},
    { category: "Visualization Tools", icon: BarChart, skills: [
      { name: "Power BI", level: 95 }, { name: "Tableau", level: 80 }, { name: "Plotly", level: 75 }, { name: "Chart.js", level: 70 }
    ]},
    { category: "Web Technologies", icon: Globe, skills: [
      { name: "React", level: 75 }, { name: "Flask", level: 80 }, { name: "Django", level: 70 }, { name: "Bootstrap", level: 85 }
    ]},
    { category: "Cloud & DevOps", icon: Cloud, skills: [
      { name: "AWS S3", level: 75 }, { name: "CloudFront", level: 70 }, { name: "GitHub", level: 85 }, { name: "Docker", level: 60 }
    ]},
    { category: "Development Tools", icon: Terminal, skills: [
      { name: "VS Code", level: 90 }, { name: "Google Colab", level: 85 }, { name: "Jupyter", level: 80 }, { name: "Git", level: 75 }
    ]},
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimateIn className="text-center mb-16">
          <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </AnimateIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <StaggerItem key={index}>
                <Card className="glass-card hover:border-neon/30 transition-all duration-500 hover-lift group rounded-xl h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-neon/10 rounded-xl mr-4 group-hover:bg-neon/20 group-hover:shadow-[0_0_20px_hsl(var(--neon)/0.15)] transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-neon" />
                      </div>
                      <h3 className="text-lg font-semibold">{category.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted/50 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-neon to-neon-glow"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimateIn className="mt-16 text-center" delay={0.3}>
          <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              "OpenWeather API", "NLP", "RESTful APIs", "Responsive Design",
              "Data Cleaning", "Statistical Analysis", "ETL Processes", "Dashboard Design",
              "Technical Writing", "Research Papers", "Team Collaboration", "Agile Methodology"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass-card rounded-xl text-sm hover:border-neon/30 hover:bg-neon/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Skills;
