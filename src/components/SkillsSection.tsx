import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  TestTube, 
  Settings, 
  Monitor, 
  GitBranch,
  Bug,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Testing Expertise",
      icon: <TestTube className="w-6 h-6" />,
      skills: [
        { name: "Test Automation", level: 95 },
        { name: "Functional Testing", level: 90 },
        { name: "Black Box Testing", level: 88 },
        { name: "Regression Testing", level: 92 },
        { name: "Unit Testing", level: 80 },
        { name: "Integration Testing", level: 85 }
      ],
      description: "Comprehensive testing methodologies and strategies"
    },
    {
      title: "Programming & Scripting",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Unix Shell Scripting", level: 88 },
        { name: "Perl Scripting", level: 85 },
        { name: "ADA Code Coverage", level: 80 },
        { name: "SQL Queries", level: 90 },
        { name: "Test Script Development", level: 92 }
      ],
      description: "Programming languages and scripting for automation"
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Oracle Secure Global Desktop", level: 95 },
        { name: "Postman (API Testing)", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Jira", level: 90 },
        { name: "Ubuntu", level: 82 },
        { name: "CCB (Change Control Board)", level: 80 }
      ],
      description: "Professional tools and development environments"
    },
    {
      title: "Domain Knowledge",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "CBTC Systems", level: 90 },
        { name: "Rail Automation", level: 88 },
        { name: "Onboard Components", level: 85 },
        { name: "Wayside Components", level: 83 },
        { name: "System Integration", level: 87 }
      ],
      description: "Specialized knowledge in railway and automation systems"
    }
  ];

  const methodologies = [
    { name: "Agile/Scrum", icon: <Zap className="w-5 h-5" /> },
    { name: "STLC", icon: <GitBranch className="w-5 h-5" /> },
    { name: "Test Planning", icon: <Bug className="w-5 h-5" /> },
    { name: "Quality Assurance", icon: <TestTube className="w-5 h-5" /> },
    { name: "Documentation", icon: <Database className="w-5 h-5" /> },
    { name: "Code Coverage", icon: <Code className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-primary font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${idx * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Methodologies */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-center mb-8">
            Methodologies & <span className="gradient-text">Best Practices</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {methodologies.map((method, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group cursor-pointer hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                      {method.icon}
                    </div>
                    <span className="font-medium text-sm">{method.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Strengths */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold mb-6">Core Strengths</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Logical Thinking",
              "Problem Solving",
              "Team Collaboration",
              "Report Creation",
              "Analytical Skills",
              "Documentation",
              "Quality Assurance",
              "Process Improvement"
            ].map((strength, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                {strength}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;