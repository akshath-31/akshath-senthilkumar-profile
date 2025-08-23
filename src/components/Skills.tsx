import { Code, Brain, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: [
        "Python",
        "Machine Learning",
        "C++",
        "Full Stack Development",
        "Project Management",
        "Data Analysis",
        "AI Development"
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Leadership",
        "Teamwork",
        "Adaptability",
        "Strong Work Ethic",
        "Communication",
        "Problem Solving",
        "Time Management"
      ]
    },
    {
      title: "Core Strengths",
      icon: Brain,
      skills: [
        "Curiosity",
        "Rapid Prototyping",
        "Analytical Thinking",
        "Innovation",
        "Attention to Detail",
        "Critical Thinking",
        "Research"
      ]
    },
    {
      title: "Interests",
      icon: Lightbulb,
      skills: [
        "Cricket",
        "Technology Trends",
        "AI Research",
        "Digital Transformation",
        "Collaborative Projects",
        "Continuous Learning",
        "Impact Creation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="hero-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technical expertise and personal strengths
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="card-glow rounded-2xl p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="skill-badge px-4 py-3 rounded-lg text-sm font-medium text-center"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skill Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="card-glow rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <p className="text-muted-foreground">Programming Languages</p>
            </div>

            {/* Projects */}
            <div className="card-glow rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>

            {/* Hackathons */}
            <div className="card-glow rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Hackathons Participated</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;