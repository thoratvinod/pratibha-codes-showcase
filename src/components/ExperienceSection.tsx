import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Test Automation Engineer",
      company: "Siemens",
      duration: "December 2022 - Present",
      location: "Pune, Maharashtra, India",
      period: "2 years 10 months",
      description: [
        "Leading test automation initiatives for CBTC and Rail Automation systems",
        "Developing and maintaining automated test scripts using various testing tools",
        "Performing comprehensive testing of onboard and wayside components",
        "Collaborating with cross-functional teams to ensure high-quality delivery",
        "Creating detailed test documentation and reports for complex systems"
      ],
      technologies: ["Oracle Secure Global Desktop", "Unix Shell", "Perl", "ADA", "MySQL", "Postman", "Jira"]
    },
    {
      title: "Project Engineer",
      company: "Birlasoft",
      duration: "August 2021 - December 2022",
      location: "Pune, Maharashtra, India",
      period: "1 year 5 months",
      description: [
        "Executed functional and regression testing for various client projects",
        "Developed test cases and test plans for complex software applications",
        "Performed database testing using SQL queries for data validation",
        "Worked in Agile methodology following STLC processes",
        "Collaborated with development teams to identify and resolve defects"
      ],
      technologies: ["Black Box Testing", "Regression Testing", "SQL", "Agile", "STLC", "CCB"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering - BE",
      field: "Civil Engineering",
      institution: "Dr. Babasaheb Ambedkar Marathwada University (BAMU), Aurangabad",
      duration: "July 2017 - December 2020"
    },
    {
      degree: "Diploma of Education",
      field: "Civil Engineering",
      institution: "Government Polytechnic College",
      duration: "July 2014 - July 2017"
    },
    {
      degree: "10th Standard",
      field: "SSC Boards",
      institution: "Shree Deshikendra Vidhyalaya Latur",
      duration: "June 2013 - July 2014"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey in the IT industry, focusing on test automation and quality assurance
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                          <span className="text-primary">({exp.period})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <h4 className="font-semibold mb-3 text-foreground">Technologies & Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My educational background that laid the foundation for my career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg text-primary group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="font-semibold text-foreground">{edu.field}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;