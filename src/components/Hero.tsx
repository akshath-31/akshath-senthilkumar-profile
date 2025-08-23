import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, MessageCircle } from "lucide-react";


const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-electric-blue font-medium text-lg">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="hero-gradient">Akshath</span>
                <br />
                <span className="text-foreground">Senthilkumar</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Engineering Student | Developer | Explorer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                I enjoy building solutions that solve real problems and create impact. From data science to web development, I'm constantly exploring ways to turn ideas into reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="glow-effect bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection("#projects")}
              >
                <span>View Portfolio</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 hover:bg-primary/10"
                onClick={() => scrollToSection("#contact")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="glow-effect"
                asChild
              >
                <a
                  href="https://github.com/akshath-31"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="glow-effect"
                asChild
              >
                <a
                  href="https://linkedin.com/in/akshathsenthilkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                className="glow-effect"
                asChild
              >
                <a
                  href="https://drive.google.com/drive/folders/1_eDmQ8nYjFdSM8mq8UlStQT04LmuhuMo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img
                    src="https://i.postimg.cc/qvW4FM7Z/Linkedin-dp.jpg"
                    alt="Akshath Senthilkumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-accent/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;