import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl gradient-text mb-2">Pratibha Gupta</h3>
            <p className="text-muted-foreground text-sm">
              Test Automation Engineer • Quality Enthusiast
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary" />
            <span>by Pratibha</span>
          </div>

          {/* Right side */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Pratibha Gupta. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            "Quality is not an act, it is a habit." - Aristotle
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;