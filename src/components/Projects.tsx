import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather Forecasting Dashboard",
      description: "Real-time weather application with comprehensive forecasting using OpenWeather API. Features include current conditions, 5-day forecast, and location-based weather data.",
      image: "/api/placeholder/400/250",
      tech: ["HTML", "CSS", "JavaScript", "OpenWeather API", "Chart.js"],
      category: "Web Development",
      features: [
        "Real-time weather data",
        "5-day forecast",
        "Location-based search",
        "Responsive design"
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Power BI Sales Dashboard",
      description: "Comprehensive sales analytics dashboard providing insights into market trends, KPIs, and performance metrics. Interactive visualizations for data-driven decision making.",
      image: "/lovable-uploads/0223f1b3-30f9-4af3-a021-991d8d380a95.png",
      tech: ["Power BI", "DAX", "Excel", "Data Modeling"],
      category: "Data Analytics",
      features: [
        "Sales trend analysis",
        "KPI monitoring",
        "Interactive filters",
        "Automated reporting"
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Restaurant Web Application",
      description: "Modern restaurant website with online menu, reservation system, and responsive design. Built with Flask backend and modern frontend technologies.",
      image: "/api/placeholder/400/250",
      tech: ["Flask", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
      category: "Full Stack",
      features: [
        "Online menu system",
        "Reservation booking",
        "Admin dashboard",
        "Mobile responsive"
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Voyance AI Product",
      description: "AI-powered product leveraging machine learning algorithms for predictive analytics. Includes data processing pipeline and intelligent insights generation.",
      image: "/api/placeholder/400/250",
      tech: ["Python", "Machine Learning", "TensorFlow", "Pandas", "Scikit-learn"],
      category: "AI/ML",
      features: [
        "Predictive analytics",
        "ML model training",
        "Data pipeline",
        "Real-time insights"
      ],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  const categories = ["All", "Web Development", "Data Analytics", "Full Stack", "AI/ML"];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work spanning web development, data analytics, and AI applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" 
                ? "bg-neon text-neon-foreground hover:bg-neon/90" 
                : "border-neon/30 text-neon hover:bg-neon hover:text-neon-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:border-neon/30 transition-all duration-500 hover:shadow-xl hover:shadow-neon/10 group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-neon/10 to-neon-glow/10 h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-neon/10 text-neon border-neon/30">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-neon transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-neon rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 border-neon/30 text-neon hover:bg-neon hover:text-neon-foreground">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-neon/30 text-neon hover:bg-neon hover:text-neon-foreground">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-neon text-neon hover:bg-neon hover:text-neon-foreground"
          >
            <Github className="w-5 h-5 mr-2" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;