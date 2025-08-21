import { GraduationCap, Heart, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              About <span className="hero-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get to know the person behind the code
            </p>
          </div>

          {/* Bio Section */}
          <div className="card-glow rounded-2xl p-8 mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Hi, I'm <span className="text-primary font-semibold">Akshath Senthilkumar</span>, 
              an engineering student, builder, and explorer of new ideas. Whether it's coding 
              or working on collaborative projects, I love creating meaningful solutions that 
              make a difference.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Outside of tech, I'm deeply passionate about cricket and believe discipline 
              on the field translates into success everywhere else. I thrive on curiosity, 
              continuous learning, and turning innovative concepts into reality.
            </p>
          </div>

          {/* Education & Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="card-glow rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-sm text-primary font-medium mb-2">2023 - 2027</p>
              <p className="text-muted-foreground text-sm">
                B.Tech CSE (Data Science)
              </p>
              <p className="text-muted-foreground text-sm">
                SRM Institute of Science and Technology
              </p>
            </div>

            {/* Passion */}
            <div className="card-glow rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-sm text-primary font-medium mb-2">Beyond Code</p>
              <p className="text-muted-foreground text-sm">
                Cricket enthusiast who believes in discipline and teamwork
              </p>
              <p className="text-muted-foreground text-sm">
                Exploring the intersection of technology and real-world impact
              </p>
            </div>

            {/* Values */}
            <div className="card-glow rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Values</h3>
              <p className="text-sm text-primary font-medium mb-2">Core Principles</p>
              <p className="text-muted-foreground text-sm">
                Curiosity-driven learning and continuous growth
              </p>
              <p className="text-muted-foreground text-sm">
                Building meaningful solutions that create positive impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;