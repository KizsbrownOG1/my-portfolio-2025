import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";


const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful, responsive interfaces that users love",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <div className="h-1 w-20 bg-gradient-accent mx-auto mb-12"></div>

          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/3 about-image">
              <img
                src={aboutPhoto}
                alt="Developer at work"
                className="w-full h-auto rounded-lg shadow-card object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-2/3 about-text">
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                I'm a passionate full-stack developer with expertise in building modern web applications.
                With a focus on creating elegant solutions to complex problems, I combine technical skills
                with creative design to deliver exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in development has equipped me with a diverse skill set and the ability to 
                adapt to new technologies quickly. I believe in writing clean, maintainable code and 
                creating intuitive user interfaces that make a difference.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="about-card p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
