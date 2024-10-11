import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    imgSrc: "image1.jpg",
    altText: "Hitch Hike 2.0",
    description:
      "A modern ride-sharing platform with real-time tracking and advanced matching algorithms.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveLink: "https://hitchhike2.vercel.app/",
    githubLink: "https://github.com/himanegi/hitch-hike-2.0",
  },
  {
    id: 2,
    imgSrc: "image2.jpg",
    altText: "Coin Canvas",
    description:
      "An interactive cryptocurrency visualization tool with real-time price updates and historical data analysis.",
    technologies: ["Handlebars", "Node.js", "Express", "MongoDB"],
    liveLink: "",
    githubLink: "https://github.com/himanegi/coin-canvas",
  },
  {
    id: 3,
    imgSrc: "image3.jpg",
    altText: "LeetSouls: Code Extractor",
    description:
      "AI-powered code analysis and optimization tool for improving algorithmic problem-solving skills.",
    technologies: ["C++", "Regex", "Javascript", "Extension API"],
    liveLink: "",
    githubLink: "https://github.com/himanegi/leetsouls",
  },
];

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
        <div className="text-2xl font-bold">HN</div>
        <nav className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(eval(`${item.toLowerCase()}Ref`))}
              className="hover:text-gray-600 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section
          ref={aboutRef}
          id="about"
          className="container mx-auto px-4 py-16 mb-20 scroll-m-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="px-20 md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-4">Himanshu Negi</h1>
              <h2 className="text-2xl text-gray-600 mb-4">
                Full Stack Web Developer
              </h2>
              <p className="text-lg mb-6">
                I am passionate about creating beautiful, functional, and
                user-friendly websites. With expertise in both front-end and
                back-end technologies, I bring ideas to life in the digital
                world.
              </p>
              <a
                href="https://drive.google.com/file/d/1kc6Y4RrdQBgxgDwgZAA1wBTcN09QqHc1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gray-800 text-white hover:bg-gray-700">
                  Download Resume
                </Button>
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-80 h-80 rounded-full bg-green-50 flex items-center justify-center overflow-hidden">
                <img
                  src="user.jpeg"
                  alt="Himanshu Negi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          ref={skillsRef}
          id="skills"
          className="container mx-auto px-4 py-16 mb-20 scroll-mt-16"
        >
          <h2 className="flex justify-center text-3xl font-bold mb-14">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Node.js",
              "Next.js",
              "Express",
              "MongoDB",
              "Selenium",
              "Github",
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

        <section
          ref={projectsRef}
          id="projects"
          className="rounded-xl py-16 mb-20 bg-gray-100 scroll-mt-16"
        >
          <div className="container mx-auto px-4">
            <h2 className="flex justify-center text-3xl font-bold mb-14">
              Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.altText}
                    </h3>
                    <p className="text-gray-600 mb-4 h-20 overflow-hidden">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between transition-opacity duration-300">
                      <a
                        href={project.liveLink || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center justify-center w-full"
                          disabled={!project.liveLink}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center justify-center w-full"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={contactRef}
          id="contact"
          className="container mx-auto px-4 py-16 mb-20"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              I am always open to new opportunities and collaborations. Feel
              free to reach out!
            </p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:himanegi2468@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="animate-bounce"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
              <a
                href="https://github.com/himanegi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="animate-bounce animation-delay-200"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>

              <a
                href="https://linkedin.com/in/himanegi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="animate-bounce animation-delay-400"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Himanshu Negi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
