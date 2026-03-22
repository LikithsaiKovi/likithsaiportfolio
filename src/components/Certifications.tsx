import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AnimateIn, { StaggerContainer, StaggerItem } from "./AnimateIn";

import googleCert from "@/assets/cert-google-data-analytics.png";
import nptelCert from "@/assets/cert-nptel-python.png";
import suvidhaCert from "@/assets/cert-suvidha-internship.jpg";
import openaiCert from "@/assets/cert-openai-genai.png";
import accentureCert from "@/assets/cert-accenture-forage.png";
import nxtwaveCert from "@/assets/cert-nxtwave-genai.jpg";
import ccbpCert from "@/assets/cert-ccbp-xpm.png";
import novitechCert from "@/assets/cert-novitech-analytics.png";
import questCert from "@/assets/cert-quest-2024.jpg";
import infotactCert from "@/assets/cert-infotact-internship.png";
import kaggleCert from "@/assets/cert-kaggle-ai-agents.png";

const certifications = [
  { title: "Google Data Analytics Professional Certificate", issuer: "Coursera", date: "Sep 2025", image: googleCert, link: "https://coursera.org/verify/professional-cert/TEVUY0JAKWHZ", skills: ["Data Analytics", "SQL", "Tableau", "R Programming", "Data Visualization"] },
  { title: "Data Analytics with Python", issuer: "NPTEL - IIT Roorkee", date: "Jan-Apr 2025", image: nptelCert, link: "#", skills: ["Python", "Data Analysis", "Statistical Analysis", "Data Processing"] },
  { title: "Data Science Internship", issuer: "Suvidha Foundation", date: "Apr-May 2025", image: suvidhaCert, link: "https://www.suvidhafoundationedutech.org/verify", skills: ["Data Science", "Machine Learning", "Real-world Projects"] },
  { title: "Generative AI Mastery Workshop", issuer: "OpenAI Academy - NxtWave", date: "Sep 2025", image: openaiCert, link: "#", skills: ["Generative AI", "AI Tools", "Prompt Engineering", "AI Applications"] },
  { title: "Data Analytics and Visualization Job Simulation", issuer: "Accenture via Forage", date: "Mar 2025", image: accentureCert, link: "#", skills: ["Data Visualization", "Storytelling", "Client Presentation", "Project Management"] },
  { title: "Generative AI Mega Workshop 2.0", issuer: "NxtWave - CCBP 4.0 Academy", date: "Sep 2024", image: nxtwaveCert, link: "#", skills: ["AI Tools", "Product Development", "Pitch Creation", "Innovation"] },
  { title: "XPM 4.0 Fundamentals", issuer: "CCBP 4.0 Academy - NxtWave", date: "Dec 2024", image: ccbpCert, link: "https://certificates.ccbp.in/academy/xpm-4-0-fundamentals?id=LSAQILEYYY", skills: ["Personal Identity", "Integrity", "Goal Setting", "Performance Mindset"] },
  { title: "Data Analytics 30 Days MasterClass", issuer: "NoviTech R&D", date: "Mar-Apr 2025", image: novitechCert, link: "#", skills: ["Data Analytics", "Statistical Analysis", "Business Intelligence"] },
  { title: "Quest 2024 - Certificate of Accomplishment", issuer: "JNTUH", date: "2024", image: questCert, link: "#", skills: ["Technical Excellence", "Project Completion", "Innovation", "Problem Solving"] },
  { title: "Data Analytics Internship", issuer: "Infotact Solutions", date: "Dec 2025 - Mar 2026", image: infotactCert, link: "#", skills: ["Data Analytics", "Problem Solving", "Real-world Projects"] },
  { title: "5-Day AI Agents Intensive Course with Google", issuer: "Kaggle & Google", date: "Dec 2025", image: kaggleCert, link: "#", skills: ["AI Agents", "Google AI", "Machine Learning", "LLMs"] },
];

const Certifications = () => (
  <section id="certifications" className="py-24 relative noise-bg">
    <div className="absolute inset-0 gradient-mesh opacity-50" />
    <div className="container mx-auto px-4 relative z-10">
      <AnimateIn className="text-center mb-16">
        <p className="text-neon font-mono text-sm tracking-widest uppercase mb-3">Credentials</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Certifications & <span className="text-gradient">Achievements</span>
        </h2>
      </AnimateIn>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.06}>
        {certifications.map((cert, index) => (
          <StaggerItem key={index}>
            <Dialog>
              <DialogTrigger asChild>
                <Card className="glass-card cursor-pointer hover:border-neon/30 transition-all duration-500 hover-lift group rounded-xl h-full">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <Award className="w-6 h-6 text-neon flex-shrink-0" />
                      <span className="text-xs text-muted-foreground font-mono">{cert.date}</span>
                    </div>
                    <div className="aspect-video mb-4 rounded-xl overflow-hidden bg-muted/50">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 className="font-semibold mb-1.5 line-clamp-2 group-hover:text-neon transition-colors text-sm">{cert.title}</h3>
                    <p className="text-muted-foreground text-xs mb-3">{cert.issuer}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-neon/8 text-neon border border-neon/20 rounded-lg text-xs font-mono">{skill}</span>
                      ))}
                      {cert.skills.length > 3 && <span className="px-2 py-0.5 text-muted-foreground text-xs">+{cert.skills.length - 3}</span>}
                    </div>
                    <div className="flex items-center text-neon text-xs mt-3 group-hover:gap-1.5 transition-all">
                      <span>View Certificate</span>
                      <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto glass-card rounded-2xl">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
                  </div>
                  <img src={cert.image} alt={cert.title} className="w-full rounded-xl border border-border/50" />
                  <div>
                    <h4 className="font-semibold mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-neon/8 text-neon border border-neon/20 rounded-xl text-sm font-mono">{skill}</span>
                      ))}
                    </div>
                  </div>
                  {cert.link !== "#" && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neon hover:underline text-sm">
                      Verify Certificate <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default Certifications;
