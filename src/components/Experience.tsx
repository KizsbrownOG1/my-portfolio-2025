import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Full-Stack Developer",
      organization: "Aventum Consulting (Remote)",
      period: "Feb 2025 - June 2025",
      description:
        "Built a large-scale Payroll and HR Management application, implementing payroll features, employee workflows, and reporting modules. Optimized PostgreSQL database performance and contributed to scalable architecture.",
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      organization: "Infytel Communication Ltd (Hybrid)",
      period: "Nov 2023 - Aug 2024",
      description:
        "Developed HR Management, Payroll, and CRM features for an internal EIS platform, optimized frontend components, and debugged the mobile-first employee portal.",
    },
    {
      type: "education",
      title: "HND in Computer Science",
      organization: "Lagos State Polytechnic",
      period: "2022 - 2024",
      description: "Focused on software engineering, algorithms, and web development.",
    },
    {
      type: "training",
      title: "Software Engineering Training",
      organization: "Hantek Digital Consult",
      location: "Lagos",
      period: "2022 - 2023",
      description:
        "Completed hands-on training in software development, covering web development, backend integration, and project-based application building.",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="text-accent-foreground" size={24} />;
      case "education":
        return <GraduationCap className="text-accent-foreground" size={24} />;
      case "training":
        return <BookOpen className="text-accent-foreground" size={24} />;
      default:
        return null;
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="experience-header text-4xl font-bold mb-4 text-center">Experience & Education</h2>
          <div className="h-1 w-20 bg-gradient-accent mx-auto mb-12"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item relative">
                  <div className="flex items-start gap-4">
                    <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-accent items-center justify-center flex-shrink-0 relative z-10">
                      {getIcon(exp.type)}
                    </div>
                    <Card className="flex-1 p-6 hover:shadow-card transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-accent font-medium mb-2">{exp.organization}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
