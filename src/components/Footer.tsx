import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold text-gradient mb-2">LIKITH.</div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Kovi Venkata Likith Sai. All rights reserved.
            </p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-neon/30 text-neon hover:bg-neon hover:text-neon-foreground"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            Open to opportunities in AI, Data Science, and Web Development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;