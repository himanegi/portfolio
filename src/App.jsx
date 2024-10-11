import { useRef } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 bg-white z-10">
        <button className="text-2xl font-bold" onClick={scrollTop}>
          HN
        </button>
        <nav className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item == "About") scrollTop();
                else scrollToSection(eval(`${item.toLowerCase()}Ref`));
              }}
              className="hover:text-gray-600 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <About />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Himanshu Negi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
