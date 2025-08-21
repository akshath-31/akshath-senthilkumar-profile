import { BarChart3, Brain, Globe, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights through advanced visualization and statistical analysis.",
      features: [
        "Data visualization and reporting",
        "Statistical modeling and analysis",
        "Trend identification and forecasting",
        "Custom dashboard development"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description: "Build intelligent systems that learn, adapt, and provide predictive capabilities for your business needs.",
      features: [
        "Predictive modeling and analytics",
        "Machine learning algorithm development",
        "AI-powered automation solutions",
        "Natural language processing applications"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Create responsive, modern websites with clean design and optimal user experience.",
      features: [
        "Responsive web design",
        "Modern frontend development",
        "Full-stack application development",
        "Performance optimization"
      ],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="hero-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions that bridge the gap between complex technology and real-world applications
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card-glow rounded-2xl p-8 group cursor-pointer"
                >
                  {/* Service Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <div className="pt-4">
                      <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group/link">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <div className="card-glow rounded-2xl p-8 lg:p-12 text-center">
              <h3 className="text-3xl font-semibold mb-4">
                Ready to Transform Your Ideas?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to turn your vision into reality. Whether it's data insights, 
                AI solutions, or web development, I'm here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-300 glow-effect"
                >
                  Start a Project
                </button>
                <button
                  onClick={() => {
                    const element = document.querySelector("#projects");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border border-border hover:border-primary/50 hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;