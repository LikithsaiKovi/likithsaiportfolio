import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-12 border-t border-border/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-1">LIKITH<span className="text-neon">.</span></div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Kovi Venkata Likith Sai
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/LikithsaiKovi", icon: Github },
              { href: "https://linkedin.com/in/likithsaikovi", icon: Linkedin },
              { href: "mailto:sailikith511@gmail.com", icon: Mail },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-neon transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              Made with <Heart className="w-3.5 h-3.5 text-neon fill-neon" /> & React
            </span>
            <motion.button
              onClick={scrollToTop}
              className="p-2 glass-card rounded-xl text-neon hover:bg-neon/10 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        <div className="section-divider mt-8 mb-0" />
        <p className="text-center text-muted-foreground/60 text-xs mt-6 font-mono">
          Open to opportunities in AI, Data Science & Web Development
        </p>
      </div>
    </footer>
  );
};

export default Footer;
