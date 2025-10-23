import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import cvFile from "@/assets/Chibuike_Resume-1.pdf";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="animate-fade-in flex-shrink-0">
            <img
              src={profilePhoto}
              alt="Professional headshot"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-accent shadow-elegant"
              loading="eager"
            />
          </div>
          
          <div className="animate-fade-in text-center md:text-left" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Hi, I'm <span className="bg-gradient-accent bg-clip-text text-transparent">Okafor Chibuike</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4">FullStack Developer</p>
            <p className="text-lg text-gray-300 mb-8">
              Crafting end-to-end web solutions, from interactive websites to robust applications, using modern technologies
            </p>

            <div className="flex gap-4 justify-center md:justify-start mb-8">
              {/* <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant"
              >
                View My Work
              </Button> */}
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cvFile;
                  link.download = "Chibuike_Resume-1.pdf";
                  link.click();
                }}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant"
              >
                Download CV
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-white/20 text-black hover:bg-white/10"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/Chibuike1984"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/chibuike-goodluck-3005a2359"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:gchibuike1984@gmail.com"
                className="text-white hover:text-accent transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ArrowDown size={32} />
        </button> */}
      </div>
    </section>
  );
};

export default Hero;
