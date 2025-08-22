import { Briefcase, Award, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "internship",
      title: "Data Science & Digital Transformation Intern",
      company: "ArcticTern Consultancy Services Pvt. Ltd.",
      period: "2024",
      description: [
        "Worked on comprehensive data analysis and visualization projects",
        "Contributed to digital transformation initiatives for client solutions",
        "Developed insights through statistical modeling and data interpretation",
        "Collaborated with cross-functional teams on strategic technology implementations"
      ],
      icon: Briefcase
    },
    {
      type: "achievement",
      title: "AI-Based System Development",
      company: "Hackathon Project",
      period: "March 2025",
      description: [
        "Built an innovative AI-based system with a 5-member team in 48 hours",
        "Strengthened teamwork and rapid prototyping skills under pressure",
        "Enhanced presentation and communication abilities",
        "Demonstrated ability to deliver functional solutions in tight deadlines"
      ],
      icon: Award
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="hero-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional journey and key achievements
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/20 rounded-full border-4 border-background flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 card-glow rounded-2xl p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                          <p className="text-primary font-medium text-lg">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 lg:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-2xl">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Badge */}
                      <div className="mt-6">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'internship' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-accent/20 text-accent'
                        }`}>
                          {exp.type === 'internship' ? 'Professional Experience' : 'Achievement'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="card-glow rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Hackathon Participation</h3>
              <p className="text-muted-foreground text-lg">
                Actively participated in multiple hackathons with a focus on AI-based solutions, 
                consistently delivering innovative projects and strengthening collaborative problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;