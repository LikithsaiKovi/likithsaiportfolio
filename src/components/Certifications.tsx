import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import googleCert from "@/assets/cert-google-data-analytics.png";
import nptelCert from "@/assets/cert-nptel-python.png";
import suvidhaCert from "@/assets/cert-suvidha-internship.jpg";
import openaiCert from "@/assets/cert-openai-genai.png";
import accentureCert from "@/assets/cert-accenture-forage.png";
import nxtwaveCert from "@/assets/cert-nxtwave-genai.jpg";
import ccbpCert from "@/assets/cert-ccbp-xpm.png";
import novitechCert from "@/assets/cert-novitech-analytics.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera",
      date: "Sep 2025",
      image: googleCert,
      link: "https://coursera.org/verify/professional-cert/TEVUY0JAKWHZ",
      skills: ["Data Analytics", "SQL", "Tableau", "R Programming", "Data Visualization"]
    },
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL - IIT Roorkee",
      date: "Jan-Apr 2025",
      image: nptelCert,
      link: "#",
      skills: ["Python", "Data Analysis", "Statistical Analysis", "Data Processing"]
    },
    {
      title: "Data Science Internship",
      issuer: "Suvidha Foundation",
      date: "Apr-May 2025",
      image: suvidhaCert,
      link: "https://www.suvidhafoundationedutech.org/verify",
      skills: ["Data Science", "Machine Learning", "Real-world Projects"]
    },
    {
      title: "Generative AI Mastery Workshop",
      issuer: "OpenAI Academy - NxtWave",
      date: "Sep 2025",
      image: openaiCert,
      link: "#",
      skills: ["Generative AI", "AI Tools", "Prompt Engineering", "AI Applications"]
    },
    {
      title: "Data Analytics and Visualization Job Simulation",
      issuer: "Accenture via Forage",
      date: "Mar 2025",
      image: accentureCert,
      link: "#",
      skills: ["Data Visualization", "Storytelling", "Client Presentation", "Project Management"]
    },
    {
      title: "Generative AI Mega Workshop 2.0",
      issuer: "NxtWave - CCBP 4.0 Academy",
      date: "Sep 2024",
      image: nxtwaveCert,
      link: "#",
      skills: ["AI Tools", "Product Development", "Pitch Creation", "Innovation"]
    },
    {
      title: "XPM 4.0 Fundamentals",
      issuer: "CCBP 4.0 Academy - NxtWave",
      date: "Dec 2024",
      image: ccbpCert,
      link: "https://certificates.ccbp.in/academy/xpm-4-0-fundamentals?id=LSAQILEYYY",
      skills: ["Personal Identity", "Integrity", "Goal Setting", "Performance Mindset"]
    },
    {
      title: "Data Analytics 30 Days MasterClass",
      issuer: "NoviTech R&D",
      date: "Mar-Apr 2025",
      image: novitechCert,
      link: "#",
      skills: ["Data Analytics", "Statistical Analysis", "Business Intelligence"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and courses completed to enhance my skills in Data Science and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer border-border/50 hover:border-neon/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10 animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Award className="w-8 h-8 text-neon flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                    
                    <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-neon transition-colors">
                      {cert.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {cert.issuer}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-neon/10 text-neon border border-neon/30 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 text-muted-foreground text-xs">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-neon text-sm mt-4 group-hover:gap-2 transition-all">
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
                  </div>
                  
                  <div className="w-full">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full rounded-lg border border-border"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-neon/10 text-neon border border-neon/30 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-neon hover:underline"
                    >
                      Verify Certificate <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
