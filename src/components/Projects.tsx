import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";
import { motion, AnimatePresence } from "framer-motion";

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
    tech: ["Node.js", "Python", "TensorFlow", "MongoDB", "Groq API", "Docker"],
    category: "AI/ML",
    features: ["Voice-enabled multilingual AI chatbot", "ML crop yield prediction (~85–95%)", "Weather forecasting + crop recommendation", "IoT dashboard simulation"],
    demoLink: "https://agrigo.in",
    codeLink: "https://github.com/LikithsaiKovi/Agri-Go"
  },
  {
    title: "AgriGo-Analytics Dashboard",
    description: "Full-stack smart farming analytics dashboard with OTP-based JWT authentication, real-time WebSocket updates, weather data, crop/soil insights, and market trends.",
    image: "/lovable-uploads/4eca89fe-20e8-47b4-bc23-08c6f072c45c.png",
    tech: ["React 18", "TypeScript", "Tailwind", "Node.js", "MongoDB", "WebSocket"],
    category: "Full Stack",
    features: ["Real-time weather data + forecasts", "Crop analytics + soil monitoring", "JWT + OTP authentication", "Real-time WebSocket updates"],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/AgriGo-Analytics"
  },
  {
    title: "ReachInbox OneBox (AI Email Manager)",
    description: "AI-powered email productivity tool with IMAP ingestion, auto-categorization, reply suggestions, real-time updates and analytics.",
    image: "/lovable-uploads/cc93f87b-2fa1-4aff-aa10-9ebc30e71c03.png",
    tech: ["React", "Node.js", "WebSocket", "Groq AI", "Docker"],
    category: "AI/ML",
    features: ["IMAP integration (multi-account)", "AI categorization & reply suggestions", "Real-time WebSocket updates", "Analytics dashboard + CSV/JSON export"],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/ReachInbox-OneBox"
  },
  {
    title: "Kasparro ETL Backend",
    description: "Production-style ETL backend with FastAPI, scheduled runs, PostgreSQL, and Docker + Railway deployment.",
    image: "/lovable-uploads/4eca89fe-20e8-47b4-bc23-08c6f072c45c.png",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "Railway"],
    category: "Full Stack",
    features: ["FastAPI REST API with Swagger", "ETL pipeline + normalization", "Automated hourly scheduling", "Filtering + pagination APIs"],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/kasparro-backend-VenkataLikithSai-Kovi"
  },
  {
    title: "Retail Analytics – RFM Segmentation",
    description: "End-to-end RFM customer segmentation with PostgreSQL Customer 360 data model and reusable SQL views.",
    image: "/lovable-uploads/0223f1b3-30f9-4af3-a021-991d8d380a95.png",
    tech: ["Python", "PostgreSQL", "SQL", "Pandas"],
    category: "Data Analytics",
    features: ["RFM feature engineering", "Customer segmentation", "Star-schema data model", "Customer 360 SQL views"],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/Project-1-Data-Analysis-Retail-Analytics"
  },
  {
    title: "Demand Forecasting System",
    description: "Demand forecasting pipeline with time-series backtesting and KPI-driven evaluation.",
    image: "/lovable-uploads/0223f1b3-30f9-4af3-a021-991d8d380a95.png",
    tech: ["Python", "Scikit-learn", "XGBoost", "Time Series"],
    category: "Data Analytics",
    features: ["Time-series forecasting", "Backtesting (MAE/RMSE/MAPE)", "Model comparison", "Inventory recommendations"],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/Project-3-Intelligent-Demand-Forecasting-Business-Optimization-System-"
  },
  {
    title: "Scientific Publications EDA",
    description: "Interactive Streamlit dashboard analyzing publications (2003–2025) for 17 countries.",
    image: "/lovable-uploads/0223f1b3-30f9-4af3-a021-991d8d380a95.png",
    tech: ["Python", "Streamlit", "Pandas", "Matplotlib"],
    category: "Data Analytics",
    features: ["Interactive Streamlit dashboard", "Country comparison & trends", "Citation impact metrics", "Collaboration patterns"],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/EDA-Scientific-Publications-by-Country"
  },
  {
    title: "Power BI Sales Dashboard",
    description: "Sales analytics dashboard with market trends, KPIs, and interactive visualizations.",
    image: "/lovable-uploads/0223f1b3-30f9-4af3-a021-991d8d380a95.png",
    tech: ["Power BI", "DAX", "Excel", "Data Modeling"],
    category: "Data Analytics",
    features: ["Sales trend analysis", "KPI monitoring", "Interactive filters", "Automated reporting"],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/Chocolate-Sales-Dashboard"
  },
  {
    title: "Salesforce Volunteer & Donation Mgmt",
    description: "Salesforce app for nonprofit operations: volunteer management, donation tracking, event reporting.",
    image: "/lovable-uploads/cc93f87b-2fa1-4aff-aa10-9ebc30e71c03.png",
    tech: ["Salesforce", "Apex", "Lightning", "Flows"],
    category: "Full Stack",
    features: ["Volunteer tracking", "Donation tracking & reporting", "Event dashboards", "Automation via Flows"],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/salesforce-capstone-volunteer-donation"
  },
  {
    title: "Weather Forecasting Dashboard",
    description: "Real-time weather app with 5-day forecast and location-based data using OpenWeather API.",
    image: "/lovable-uploads/4eca89fe-20e8-47b4-bc23-08c6f072c45c.png",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API", "Chart.js"],
    category: "Web Development",
    features: ["Real-time weather data", "5-day forecast", "Location-based search", "Responsive design"],
    demoLink: "#",
    codeLink: "https://github.com/LikithsaiKovi/Weather-Dashboard-Project"
  },
];

const categories = ["All", "AI/ML", "Data Analytics", "Full Stack", "Web Development"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimateIn className="text-center mb-16">
          <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">My work</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </AnimateIn>

        {/* Category Filter */}
        <AnimateIn className="flex flex-wrap justify-center gap-2 mb-12" delay={0.1}>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                category === activeCategory
                  ? "bg-neon text-neon-foreground shadow-[0_0_20px_hsl(var(--neon)/0.3)]"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-neon/30"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </AnimateIn>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <AnimateIn className="text-center">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button variant="outline" size="lg" className="border-neon/30 text-neon hover:bg-neon hover:text-neon-foreground rounded-xl font-medium" asChild>
            <a href="https://github.com/LikithsaiKovi" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <Card className="glass-card hover:border-neon/30 transition-all duration-500 hover-lift group overflow-hidden rounded-xl h-full">
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/5 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-3">
              {project.demoLink !== "#" && (
                <Button size="sm" className="bg-neon/90 text-neon-foreground backdrop-blur-sm rounded-xl" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-4 h-4 mr-1" /> Demo
                  </a>
                </Button>
              )}
              <Button size="sm" className="glass-effect text-foreground backdrop-blur-sm rounded-xl" asChild>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" /> Code
                </a>
              </Button>
            </div>
          </div>
          <Badge className="absolute top-3 left-3 bg-neon/20 text-neon border-neon/30 backdrop-blur-sm font-mono text-xs">
            {project.category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-neon transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">{project.description}</p>

          {/* Features */}
          <ul className="text-xs text-muted-foreground space-y-1.5 mb-4">
            {project.features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-neon rounded-full mr-2 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} className="px-2 py-0.5 bg-muted/50 text-muted-foreground rounded-lg text-xs font-mono">{t}</span>
            ))}
            {project.tech.length > 5 && <span className="px-2 py-0.5 text-muted-foreground text-xs">+{project.tech.length - 5}</span>}
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {project.demoLink !== "#" && (
              <Button size="sm" variant="outline" className="flex-1 border-neon/20 text-neon hover:bg-neon hover:text-neon-foreground rounded-lg text-xs h-8" asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1" /> Live Demo
                </a>
              </Button>
            )}
            <Button size="sm" variant="outline" className="flex-1 border-neon/20 text-neon hover:bg-neon hover:text-neon-foreground rounded-lg text-xs h-8" asChild>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 mr-1" /> Code
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default Projects;
