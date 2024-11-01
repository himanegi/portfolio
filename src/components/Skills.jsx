import { Badge } from "@/components/ui/badge";
import { forwardRef } from "react";

export const Skills = forwardRef(function Skills(props, ref) {
  return (
    <>
      <section
        ref={ref}
        id="skills"
        className="container mx-auto px-4 py-16 mb-20 scroll-mt-16"
      >
        <h2 className="flex justify-center text-3xl font-bold mb-14">Skills</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Node.js",
            "Next.js",
            "Express.js",
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
    </>
  );
});
