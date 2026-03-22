import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  features: string[];
  demoLink: string;
  codeLink: string;
}

const projects: Project[] = [
  {
    title: "Agri-Go (Smart Agricultural Platform)",
    description: "AI-powered smart farming platform with crop insights, weather prediction, recommendations, and a voice-enabled multilingual AI chatbot supporting 6 languages.",
    image: "/lovable-uploads/c4c01fd4-b5b1-48fb-9438-cff3c17b6341.png",
    tech: ["HTML/CSS/JS", "Node.js", "Express", "Python", "Flask", "TensorFlow", "MongoDB Atlas", "Groq API", "Docker", "Railway"],
    category: "AI/ML",
    features: [
      "Voice-enabled multilingual AI chatbot (6 languages)",
      "ML crop yield prediction (~85–95% confidence)",
      "Weather forecasting + crop recommendation",
      "IoT dashboard for temperature/humidity/soil moisture"
    ],
    demoLink: "https://agrigo.in",
    codeLink: "https://github.com/LikithsaiKovi/Agri-Go"
  },
  {
    title: "AgriGo-Analytics Dashboard",
    description: "Full-stack smart farming analytics dashboard with OTP-based JWT authentication, real-time WebSocket updates, weather data, crop/soil insights, and market trends.",
    image: "/lovable-uploads/4eca89fe-20e8-47b4-bc23-08c6f072c45c.png",
    tech: ["React 18", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "WebSocket"],
    category: "Full Stack",
    features: [
      "Real-time weather data + forecasts",
      "Crop analytics + soil health monitoring",
      "JWT + OTP authentication",
      "Real-time updates via WebSockets"
    ],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/AgriGo-Analytics"
  },
  {
    title: "ReachInbox OneBox (AI Email Manager)",
    description: "AI-powered email productivity tool that connects to Gmail via IMAP, auto-categorizes emails, suggests replies using Groq AI, with real-time updates and analytics.",
    image: "/lovable-uploads/cc93f87b-2fa1-4aff-aa10-9ebc30e71c03.png",
    tech: ["React", "Node.js", "Express", "WebSocket", "Groq AI", "Docker"],
    category: "AI/ML",
    features: [
      "IMAP integration (multi-account)",
      "AI categorization & reply suggestions",
      "Real-time WebSocket updates",
      "Analytics dashboard + CSV/JSON export"
    ],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/ReachInbox-OneBox"
  },
  {
    title: "Kasparro ETL Backend",
    description: "Production-style ETL backend with FastAPI, scheduled ETL runs, PostgreSQL, filtering/pagination APIs, and Docker + Railway deployment automation.",
    image: "/lovable-uploads/4eca89fe-20e8-47b4-bc23-08c6f072c45c.png",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "Railway", "Pydantic"],
    category: "Full Stack",
    features: [
      "FastAPI REST API with Swagger docs",
      "ETL pipeline: ingestion + transform + normalization",
      "Automated hourly scheduling",
      "Filtering + pagination APIs"
    ],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/kasparro-backend-VenkataLikithSai-Kovi"
  },
  {
    title: "Retail Analytics – RFM Segmentation",
    description: "End-to-end RFM customer segmentation project with a PostgreSQL Customer 360 data model, reusable SQL views, and a query guide for validation.",
    image: "/lovable-uploads/0223f1b3-30f9-4af3-a021-991d8d380a95.png",
    tech: ["Python", "PostgreSQL", "SQL", "Pandas", "Data Modeling"],
    category: "Data Analytics",
    features: [
      "RFM feature engineering (Recency/Frequency/Monetary)",
      "Customer segmentation (Champions/Loyal/At Risk)",
      "Star-schema data model (dim/fact tables)",
      "Customer 360 SQL views + query guide"
    ],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/Project-1-Data-Analysis-Retail-Analytics"
  },
  {
    title: "Demand Forecasting & Business Optimization",
    description: "Demand forecasting pipeline with time-series backtesting and KPI-driven evaluation, translating forecast accuracy into inventory planning recommendations.",
    image: "/lovable-uploads/0223f1b3-30f9-4af3-a021-991d8d380a95.png",
    tech: ["Python", "Pandas", "Scikit-learn", "Time Series", "XGBoost"],
    category: "Data Analytics",
    features: [
      "Time-series demand forecasting",
      "Backtesting with MAE/RMSE/MAPE",
      "Baseline vs improved model comparison",
      "Inventory planning recommendations"
    ],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/Project-3-Intelligent-Demand-Forecasting-Business-Optimization-System-"
  },
  {
    title: "Scientific Publications EDA Dashboard",
    description: "Interactive Streamlit dashboard analyzing scientific publications (2003–2025) for 17 countries with trend analysis, citation impact, and collaboration patterns.",
    image: "/lovable-uploads/0223f1b3-30f9-4af3-a021-991d8d380a95.png",
    tech: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    category: "Data Analytics",
    features: [
      "Interactive Streamlit dashboard",
      "Country comparison & trend analysis",
      "Citation impact metrics",
      "Collaboration pattern analysis"
    ],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/EDA-Scientific-Publications-by-Country"
  },
  {
    title: "Power BI Sales Dashboard",
    description: "Comprehensive sales analytics dashboard providing insights into market trends, KPIs, and performance metrics with interactive visualizations.",
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
    codeLink: "https://github.com/LikithsaiKovi/Chocolate-Sales-Dashboard"
  },
  {
    title: "Salesforce Volunteer & Donation Management",
    description: "Salesforce app for nonprofit operations: volunteer management, donation tracking, event participation reporting with automation and custom data models.",
    image: "/lovable-uploads/cc93f87b-2fa1-4aff-aa10-9ebc30e71c03.png",
    tech: ["Salesforce", "Apex", "Lightning", "Flows", "Custom Objects"],
    category: "Full Stack",
    features: [
      "Volunteer tracking & assignments",
      "Donation tracking & reporting",
      "Event participation dashboards",
      "Automation via Flows/Triggers"
    ],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/salesforce-capstone-volunteer-donation"
  },
  {
    title: "Weather Forecasting Dashboard",
    description: "Real-time weather application with comprehensive forecasting using OpenWeather API. Features current conditions, 5-day forecast, and location-based data.",
    image: "/lovable-uploads/4eca89fe-20e8-47b4-bc23-08c6f072c45c.png",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API", "Chart.js"],
    category: "Web Development",
    features: [
      "Real-time weather data",
      "5-day forecast",
      "Location-based search",
      "Responsive design"
    ],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/Weather-Dashboard-Project"
  }
];

const categories = ["All", "AI/ML", "Data Analytics", "Full Stack", "Web Development"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work spanning AI/ML, data analytics, full-stack development, and more
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === activeCategory ? "default" : "outline"}
              className={category === activeCategory
                ? "bg-neon text-neon-foreground hover:bg-neon/90"
                : "border-neon/30 text-neon hover:bg-neon hover:text-neon-foreground"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button
            variant="outline"
            size="lg"
            className="border-neon text-neon hover:bg-neon hover:text-neon-foreground"
            asChild
          >
            <a href="https://github.com/LikithsaiKovi" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <Card
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
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            {project.demoLink !== "#" && (
              <Button size="sm" variant="secondary" className="backdrop-blur-sm" asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <Eye className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
            {project.codeLink !== "#" && (
              <Button size="sm" variant="secondary" className="backdrop-blur-sm" asChild>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
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
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mr-2 shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          {project.demoLink !== "#" && (
            <Button size="sm" variant="outline" className="flex-1 border-neon/30 text-neon hover:bg-neon hover:text-neon-foreground" asChild>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          <Button size="sm" variant="outline" className="flex-1 border-neon/30 text-neon hover:bg-neon hover:text-neon-foreground" asChild>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Projects;
