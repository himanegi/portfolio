import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export function Contact() {
  const contactRef = useRef(null);
  return (
    <>
      <section
        ref={contactRef}
        id="contact"
        className="container mx-auto px-4 py-16 mb-20"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            I am always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:himanegi2468@gmail.com">
              <Button variant="outline" size="icon" className="animate-bounce">
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
    </>
  );
}
