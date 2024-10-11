import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
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
        <About />
        <Skills />
        <Projects />

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
