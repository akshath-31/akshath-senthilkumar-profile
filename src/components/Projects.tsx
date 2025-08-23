import { ExternalLink, Github, Clock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Based System",
      description: "Innovative Fin-Tech AI solution built during hackathon with a 5-member team in 24 hours. Demonstrated rapid prototyping and collaborative development skills.",
      technologies: ["Python", "Machine Learning", "AI", "Team Collaboration"],
      status: "completed",
      duration: "48 hours",
      team: "5 members",
      highlights: [
        "Rapid prototyping under pressure",
        "Team collaboration and leadership",
        "Innovative AI implementation",
        "Successful presentation and demo"
      ]
    },
    {
      title: "Data Science Projects",
      description: "Comprehensive data analysis and visualization projects completed during internship at ArcticTern Consultancy Services.",
      technologies: ["Python", "Data Analysis", "Visualization", "Statistical Modeling", "Digital Marketing"],
      status: "completed",
      duration: "3 months",
      team: "Professional Team",
      highlights: [
        "Advanced data visualization",
        "Statistical analysis and modeling",
        "Client-focused solutions",
        "Professional development experience"
      ]
    },
    {
      title: "Full Stack Web Applications",
      description: "Modern web applications with responsive design and clean user interfaces. Focus on performance and user experience.",
      technologies: ["React", "TypeScript", "Node.js", "Modern Web"],
      status: "ongoing",
      duration: "Ongoing",
      team: "Solo & Team",
      highlights: [
        "Responsive design implementation",
        "Modern development practices",
        "Performance optimization",
        "User-centered design"
      ]
    },
    {
      title: "Machine Learning Solutions",
      description: "Predictive models and intelligent systems for various applications. Focus on practical AI implementations.",
      technologies: ["Python", "ML Algorithms", "AI", "Data Science"],
      status: "coming-soon",
      duration: "In Planning",
      team: "Solo",
      highlights: [
        "Advanced ML algorithms",
        "Practical AI applications",
        "Model optimization",
        "Real-world problem solving"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Zap className="h-4 w-4 text-green-500" />;
      case "ongoing":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "ongoing":
        return "In Progress";
      default:
        return "Coming Soon";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="hero-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work in AI, data science, and web development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card-glow rounded-2xl p-8 group">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        {getStatusIcon(project.status)}
                        <span>{getStatusText(project.status)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{project.team}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex gap-4">
                  {project.status === "completed" && (project.title === "AI-Based System" || project.title === "Data Science Projects") ? (
                    <div className="text-center text-muted-foreground text-sm py-2">
                      Project completed successfully
                    </div>
                  ) : project.status === "completed" ? (
                    <>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </>
                  ) : project.status === "ongoing" ? (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Clock className="h-4 w-4 mr-2" />
                      In Development
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="flex-1" disabled>
                      <Clock className="h-4 w-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="card-glow rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">More Projects Coming Soon</h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                I'm constantly working on new projects and exploring innovative solutions. 
                Stay tuned for updates on my latest work in AI, data science, and web development.
              </p>
              <Button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="glow-effect"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;