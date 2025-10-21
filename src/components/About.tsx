import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, GraduationCap, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech in AI & Data Science",
      institution: "Guru Nanak Institutions Technical Campus",
      period: "2022 - Present",
      status: "Current"
    },
    {
      degree: "HSC",
      institution: "Sri Chaitanya College",
      period: "2022",
      status: "Completed"
    },
    {
      degree: "CBSE",
      institution: "H.A.L School",
      period: "2020",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for AI & Data Science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon">
                Kovi Venkata Likith Sai
              </h3>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Hi there! I'm Likith Sai, a dedicated student currently pursuing BTECH at 
                  Guru Nanak Institutions Technical Campus in the field of Artificial Intelligence 
                  and Data Science. My passion lies in Data Science, and I'm constantly exploring 
                  new ways to expand my knowledge and skills in this area.
                </p>
                <p>
                  I believe in the power of data to transform businesses and solve real-world problems. 
                  Through my academic journey and practical projects, I've developed a strong foundation 
                  in machine learning, data visualization, and web development.
                </p>
                <p>
                  When I'm not coding or analyzing data, I enjoy exploring the latest trends in AI, 
                  contributing to open-source projects, and building solutions that make a difference.
                </p>
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Core Interests</h4>
              <div className="flex flex-wrap gap-3">
                {["Data Science", "Machine Learning", "Web Development", "Cloud Computing", "Data Visualization", "AI Research"].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-neon/10 text-neon border border-neon/30 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <Button 
              size="lg" 
              className="bg-neon text-neon-foreground hover:bg-neon/90 neon-glow"
              asChild
            >
              <a href="https://drive.google.com/file/d/1mX5rZzRrQ24CRODQijr0U3u3MN5-b-iw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Education Timeline */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-neon" />
              Educational Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border/50 hover:border-neon/30 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-neon/10 text-neon border border-neon/30' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;