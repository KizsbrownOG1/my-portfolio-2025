import { Github, Linkedin, Mail } from "lucide-react";
import footerPhoto from "@/assets/favicon.ico";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={footerPhoto}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-accent"
              loading="lazy"
            />
            <p className="text-sm">
              © {new Date().getFullYear()} Chibuike. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Chibuike1984"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/chibuike-goodluck-3005a2359"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:gchibuike1984@gmail.com"
              className="hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
