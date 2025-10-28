import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, checkout, and payment integration",
      image: project1,
      tags: ["HTML5", "CSS3", "JavaScript", "PHP[Laravel]","MySQL"],
      liveLink: "https://e-commerce-platform.iceiy.com/",
      githubLink: "#",
    },
    {
      title: "Payroll Management App",
      description: "A web application for managing employee payrolls, tracking salaries, generating payslips, and handling tax deductions efficiently.",
      image: project2,
      tags: ["React", "Tailwind CSS", "JavaScript", "Python[Flask]", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather forecast application with location-based data and interactive maps",
      image: project3,
      tags: ["React", "API Integration", "Charts", "CSS"],
      liveLink: "#",
      githubLink: "#",
    },
  ];


  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="projects-header text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="project-card overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Projects;
