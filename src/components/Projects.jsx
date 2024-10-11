import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { forwardRef } from "react";

const projects = [
  {
    id: 1,
    imgSrc: "image1.jpg",
    altText: "Hitch Hike 2.0",
    description:
      "A web application designed to connect drivers and passengers looking for rides. It aims to reduce the environmental impact by encouraging carpooling and sharing rides.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveLink: "https://hitchhike2.vercel.app/",
    githubLink: "https://github.com/himanegi/hitch-hike-2.0",
  },
  {
    id: 2,
    imgSrc: "image2.jpg",
    altText: "Coin Canvas",
    description:
      "An expense management tool that tracks transactions, manages investments, and visualizes financial data with charts, integrating cryptocurrency and stock market data.",
    technologies: ["Handlebars", "Node.js", "Express", "MongoDB"],
    liveLink: "",
    githubLink: "https://github.com/himanegi/coin-canvas",
  },
  {
    id: 3,
    imgSrc: "image3.jpg",
    altText: "LeetSouls: Code Extractor",
    description:
      "LeetSouls is a browser extension that extracts code from LeetCode contest problems and converts it into an editable C++ template, ready for use in your preferred IDE.",
    technologies: ["C++", "Regex", "Javascript", "Extension API"],
    liveLink: "",
    githubLink: "https://github.com/himanegi/leetsouls",
  },
];

export const Projects = forwardRef(function Projects(props, ref) {
  return (
    <>
      <section
        ref={ref}
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
    </>
  );
});
