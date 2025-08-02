import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  BarChart, 
  Cloud, 
  Palette, 
  Terminal,
  Brain,
  Globe
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 85 },
        { name: "C", level: 70 }
      ]
    },
    {
      category: "Data Science & ML",
      icon: Brain,
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Scikit-learn", level: 75 },
        { name: "Matplotlib/Seaborn", level: 90 }
      ]
    },
    {
      category: "Visualization Tools",
      icon: BarChart,
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Tableau", level: 80 },
        { name: "Plotly", level: 75 },
        { name: "Chart.js", level: 70 }
      ]
    },
    {
      category: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "React", level: 75 },
        { name: "Flask", level: 80 },
        { name: "Django", level: 70 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS S3", level: 75 },
        { name: "CloudFront", level: 70 },
        { name: "GitHub", level: 85 },
        { name: "Docker", level: 60 }
      ]
    },
    {
      category: "Development Tools",
      icon: Terminal,
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Google Colab", level: 85 },
        { name: "Jupyter", level: 80 },
        { name: "Git", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="border-border/50 hover:border-neon/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-neon/10 rounded-lg mr-4 group-hover:bg-neon/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-neon" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-neon to-neon-glow h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(index * 0.1) + (skillIndex * 0.1)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "OpenWeather API", "NLP", "RESTful APIs", "Responsive Design", 
              "Data Cleaning", "Statistical Analysis", "ETL Processes", "Dashboard Design",
              "Technical Writing", "Research Papers", "Team Collaboration", "Agile Methodology"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-neon/30 hover:bg-neon/5 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;