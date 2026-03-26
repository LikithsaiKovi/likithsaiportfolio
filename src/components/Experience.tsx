import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Users, FileText, Lightbulb } from "lucide-react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

const experiences = [
  {
    title: "Data Analytics Intern",
    company: "Infotact Solutions",
    period: "Dec 2025 – Mar 2026",
    duration: "3 Months",
    location: "Remote",
    type: "Internship",
    description: "Worked on real-world data analytics projects including retail customer segmentation, demand forecasting, and sales analysis. Delivered end-to-end analytics solutions using Python, PostgreSQL, and BI tools.",
    responsibilities: [
      "Retail Analytics: Built end-to-end RFM segmentation with a PostgreSQL Customer 360 data model and reusable SQL views",
      "Demand Forecasting: Developed a forecasting pipeline with time-series backtesting and KPI-driven evaluation (MAPE/RMSE)",
      "Walmart Sales Analysis: Performed exploratory data analysis on Walmart sales data to uncover trends and insights",
      "Query & Validation: Produced query guides to validate segments and business KPIs (top customers, revenue by segment)",
      "Business Optimization: Translated forecast accuracy improvements into inventory planning recommendations"
    ],
    technologies: ["Python", "PostgreSQL", "SQL", "Pandas", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn", "Power BI"],
    achievements: [
      "Delivered an end-to-end RFM segmentation project with Customer 360 data model",
      "Built a demand forecasting pipeline with time-series backtesting",
      "Translated forecast accuracy improvements into cost savings recommendations",
      "Created reusable SQL views for customer diagnostics and validation"
    ],
    skills: ["Data Analytics", "SQL", "Python", "Statistical Analysis", "Data Modeling", "Business Intelligence"]
  },
  {
    title: "Data Science Intern",
    company: "Suvidha Foundation",
    period: "Apr 2025 – May 2025",
    duration: "1 Month",
    location: "Remote",
    type: "Internship",
    description: "Gained hands-on experience in data science methodologies, working on real-world projects involving data collection, exploration, cleaning, and analysis. Contributed to research in dialogue summarization and natural language processing.",
    responsibilities: [
      "Data Collection & Exploration: Gathered and analyzed diverse datasets to identify patterns",
      "Data Cleaning & Preprocessing: Implemented robust data cleaning pipelines",
      "Statistical Analysis: Performed comprehensive statistical analysis",
      "Research Paper Writing: Co-authored research on dialogue summarization using NLP",
      "Tool Utilization: Used Google Colab, Python, and NLP libraries extensively",
      "Team Collaboration: Worked in cross-functional teams"
    ],
    technologies: ["Python", "Google Colab", "Pandas", "NumPy", "NLTK", "Scikit-learn", "Matplotlib", "Seaborn"],
    achievements: [
      "Completed dialogue summarization research project",
      "Developed efficient data processing workflows",
      "Contributed to technical documentation",
      "Improved data analysis skills through real-world application"
    ],
    skills: ["Teamwork", "Research", "Communication", "Problem Solving", "Data Analysis", "Technical Writing"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative noise-bg">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimateIn className="text-center mb-16">
          <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">Where I've worked</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </AnimateIn>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, idx) => (
            <AnimateIn key={idx} delay={idx * 0.15}>
              <Card className="glass-card hover:border-neon/30 transition-all duration-500 hover-lift rounded-xl overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-neon via-neon-glow to-neon" />
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{experience.title}</h3>
                      <div className="flex items-center text-neon font-semibold">
                        <Building className="w-5 h-5 mr-2" />
                        {experience.company}
                      </div>
                    </div>
                    <div className="space-y-2 md:text-right mt-4 md:mt-0">
                      <div className="flex items-center gap-2 md:justify-end">
                        <Badge className="bg-neon/10 text-neon border-neon/20 font-mono">{experience.type}</Badge>
                        <Badge variant="outline" className="border-neon/20 text-muted-foreground font-mono">{experience.duration}</Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm md:justify-end">
                        <Calendar className="w-4 h-4 mr-2" />{experience.period}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm md:justify-end">
                        <MapPin className="w-4 h-4 mr-2" />{experience.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8">{experience.description}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-neon" />Key Responsibilities
                      </h4>
                      <StaggerContainer className="space-y-3" stagger={0.05}>
                        {experience.responsibilities.map((r, i) => (
                          <StaggerItem key={i}>
                            <div className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-neon rounded-full mt-2 mr-3 shrink-0" />
                              <p className="text-muted-foreground text-sm leading-relaxed">{r}</p>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-neon" />Key Achievements
                      </h4>
                      <StaggerContainer className="space-y-3" stagger={0.05}>
                        {experience.achievements.map((a, i) => (
                          <StaggerItem key={i}>
                            <div className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3 shrink-0" />
                              <p className="text-muted-foreground text-sm">{a}</p>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-neon/8 text-neon border border-neon/20 rounded-xl text-sm font-mono">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-neon" />Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-xl text-sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateIn>
          ))}

          <AnimateIn className="text-center mt-12" delay={0.3}>
            <div className="glass-card rounded-2xl p-8 border border-neon/10">
              <h3 className="text-xl font-semibold mb-3">Looking for New Opportunities</h3>
              <p className="text-muted-foreground">
                I'm actively seeking internships and entry-level positions in Data Science, AI, and Web Development. 
                Let's connect to discuss how I can contribute to your team!
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};

export default Experience;
