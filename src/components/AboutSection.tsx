import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, TestTube, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "Test Automation",
      description: "Expert in functional, black box, regression, unit & integration testing"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Scripting",
      description: "Proficient in Unix Shell, Perl scripting, and ADA code coverage testing"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Skills",
      description: "Writing and executing complex SQL queries for data validation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Strong analytical skills with excellent team collaboration abilities"
    }
  ];

  const languages = [
    { name: "English", level: "Professional Working" },
    { name: "Hindi", level: "Native" },
    { name: "Marathi", level: "Native" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate and detail-oriented Test Professional with extensive experience 
            in the IT industry, currently working at Siemens in the CBTC and Rail Automation domain.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My role involves hands-on testing, scripting, and automation to ensure high-quality 
                  delivery of complex systems. I have good knowledge of onboard and wayside components 
                  testing, making me well-versed in both theoretical and practical aspects of rail automation.
                </p>
                <p>
                  With strong analytical and problem-solving abilities, I excel at test case creation, 
                  documentation, and logical thinking. My experience spans across various testing 
                  methodologies and tools, always striving for excellence in quality assurance.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                    {lang.name} - {lang.level}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibent mb-6 text-primary">Core Strengths</h3>
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <blockquote className="text-2xl font-medium text-muted-foreground italic max-w-4xl mx-auto">
            "Quality is never an accident; it is always the result of intelligent effort."
          </blockquote>
          <cite className="text-primary font-semibold mt-4 block">— My Testing Philosophy</cite>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;