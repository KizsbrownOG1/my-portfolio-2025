import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {

  const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "jQuery", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "CodeIgniter", "Python", "Flask", "REST APIs", "GraphQL"],
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "PostgreSQL","SQLite","Git", "GitHub",],
  },
];

return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="skills-header text-4xl font-bold mb-4 text-center">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-gradient-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="skill-card p-6 hover:shadow-card transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
