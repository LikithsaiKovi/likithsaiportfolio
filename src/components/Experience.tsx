import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Users, FileText, Lightbulb } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Data Science Intern",
    company: "Suvidha Foundation",
    period: "2023 - 2024",
    location: "Remote",
    type: "Internship",
    description: "Gained hands-on experience in data science methodologies, working on real-world projects involving data collection, exploration, cleaning, and analysis. Contributed to research in dialogue summarization and natural language processing.",
    responsibilities: [
      "Data Collection & Exploration: Gathered and analyzed diverse datasets to identify patterns and insights",
      "Data Cleaning & Preprocessing: Implemented robust data cleaning pipelines to ensure data quality and reliability",
      "Statistical Analysis: Performed comprehensive statistical analysis to extract meaningful insights from complex datasets",
      "Research Paper Writing: Co-authored research paper on dialogue summarization using advanced NLP techniques",
      "Tool Utilization: Extensively used Google Colab, Python, and various NLP libraries for project development",
      "Team Collaboration: Worked effectively in cross-functional teams, contributing to project planning and execution"
    ],
    technologies: ["Python", "Google Colab", "Pandas", "NumPy", "NLTK", "Scikit-learn", "Matplotlib", "Seaborn"],
    achievements: [
      "Successfully completed dialogue summarization research project",
      "Developed efficient data processing workflows",
      "Contributed to technical documentation and research papers",
      "Improved data analysis skills through real-world application"
    ],
    skills: ["Teamwork", "Research", "Communication", "Problem Solving", "Data Analysis", "Technical Writing"]
  };

  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world experience in data science, research, and collaborative project development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 hover:border-neon/30 transition-all duration-500 hover:shadow-xl hover:shadow-neon/10 animate-fade-in">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{experience.title}</h3>
                  <div className="flex items-center text-neon font-semibold">
                    <Building className="w-5 h-5 mr-2" />
                    {experience.company}
                  </div>
                </div>
                <div className="space-y-2 md:text-right mt-4 md:mt-0">
                  <Badge className="bg-neon/10 text-neon border-neon/30">
                    {experience.type}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.period}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {experience.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-neon" />
                  Key Responsibilities
                </h4>
                <div className="grid gap-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-neon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neon/10 text-neon border border-neon/30 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-neon" />
                  Key Achievements
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-neon rounded-full mr-3"></div>
                      <p className="text-muted-foreground text-sm">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Developed */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-neon" />
                  Skills Developed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Note */}
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-gradient-to-r from-neon/5 to-neon-glow/5 border border-neon/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Looking for New Opportunities</h3>
              <p className="text-muted-foreground">
                I'm actively seeking internships and entry-level positions in Data Science, AI, and Web Development. 
                Let's connect to discuss how I can contribute to your team!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;