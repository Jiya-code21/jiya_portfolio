import { Code, User, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="space-y-16">
          {/* Education Section */}
          <article className="max-w-2xl mx-auto">
            <div className="gradient-border p-6 card-hover flex items-center gap-6">
              <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-xl mb-2">Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ST. C.F Andrews School - Schooling <br />
                  GLA University, Mathura - B.Tech in Computer Science (2023–2027)
                </p>
              </div>
            </div>

            <hr className="border-primary border-t-2 mt-8" />
          </article>

          {/* Description and Contact Buttons */}
          <section className="max-w-3xl mx-auto text-left space-y-6">
            <h3 className="text-2xl font-semibold">
              Motivated Web Developer Learning and Growing with Modern Technologies
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Passionate about building responsive, accessible, and high-performance web applications using modern technologies. Continuously learning and growing in the field of web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <a href="#contact" className="cosmic-button" aria-label="Get In Touch">
                Get In Touch
              </a>

              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label="Download CV"
              >
                Download CV
              </a>
            </div>
          </section>

          {/* Skills Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="gradient-border p-6 card-hover flex items-center gap-6">
              <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
                <Code className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Creating responsive websites and web applications with modern frameworks.
                </p>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover flex items-center gap-6">
              <div className="p-3 rounded-full bg-primary/20 flex-shrink-0">
                <User className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Frontend Development</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Building interactive, user-friendly web interfaces with modern JavaScript frameworks and tools.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
