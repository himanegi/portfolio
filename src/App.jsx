import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export default function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 bg-white z-10">
        <div className="text-2xl font-bold">JD</div>
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="hover:text-gray-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="hover:text-gray-600 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="hover:text-gray-600 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="hover:text-gray-600 transition-colors"
          >
            Contact
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section ref={aboutRef} id="about" className="mb-20 pt-16 -mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-4">Jane Doe</h1>
              <h2 className="text-2xl text-gray-600 mb-4">
                Full Stack Web Developer
              </h2>
              <p className="text-lg mb-6">
                I am passionate about creating beautiful, functional, and
                user-friendly websites. With expertise in both front-end and
                back-end technologies, I bring ideas to life in the digital
                world.
              </p>
              <Button className="bg-gray-800 text-white hover:bg-gray-700">
                Download CV
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-green-50 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=256&width=256"
                  alt="Jane Doe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section ref={skillsRef} id="skills" className="mb-20 pt-16 -mt-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "GraphQL",
              "Git",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm py-1 px-3"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section ref={projectsRef} id="projects" className="mb-20 pt-16 -mt-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="overflow-hidden">
                <img
                  src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Project {project}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies
                    used.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section ref={contactRef} id="contact" className="mb-20 pt-16 -mt-16">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg mb-6">
            I am always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
