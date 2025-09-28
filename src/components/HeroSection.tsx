import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink, Mail } from "lucide-react";
import pratibhaImage from "@/assets/pratibha.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider">
                &lt; Hello, I'm /&gt;
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Pratibha</span>
                <br />
                <span className="text-foreground">Gupta</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Test Automation Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Passionate Test Professional with 4+ years of experience in the IT industry, 
                specializing in CBTC and Rail Automation systems at 
                <span className="text-primary font-semibold"> Siemens Mobility</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline-hero" 
                size="xl"
                onClick={() => window.open('mailto:misspratibha201@gmail.com', '_blank')}
              >
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative overflow-hidden rounded-2xl border border-border/50 backdrop-blur-sm">
                <img 
                  src={pratibhaImage}
                  alt="Pratibha Gupta - Test Automation Engineer"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary/10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-mono">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;