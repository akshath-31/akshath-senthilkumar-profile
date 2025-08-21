import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/akshath-31",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/akshathsenthilkumar",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:s.akshath31@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold hero-gradient">
              Akshath Senthilkumar
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Engineering student passionate about creating meaningful solutions through 
              data science, AI, and web development. Always excited to collaborate on 
              innovative projects.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Email:</strong>{" "}
                <a 
                  href="mailto:s.akshath31@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  s.akshath31@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-foreground">Phone:</strong>{" "}
                <a 
                  href="tel:+918925619800"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +91 8925619800
                </a>
              </p>
              <p>
                <strong className="text-foreground">Status:</strong>{" "}
                <span className="text-green-500">Available for opportunities</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Akshath Senthilkumar. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button
                onClick={() => scrollToSection("#home")}
                className="hover:text-primary transition-colors duration-300"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;