import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
        <div className="text-center md:text-left mb-8 md:mb-0 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Himanshu Negi</h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
            Full Stack Web Developer
          </h2>
          <p className="text-base sm:text-lg mb-6">
            I am passionate about creating beautiful, functional, and
            user-friendly websites. With expertise in both front-end and
            back-end technologies, I bring ideas to life in the digital world.
          </p>
          <a
            href="https://drive.google.com/file/d/1kc6Y4RrdQBgxgDwgZAA1wBTcN09QqHc1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gray-800 text-white hover:bg-gray-700">
              Resume
            </Button>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-green-50 flex items-center justify-center overflow-hidden">
            <img
              src="user.jpg"
              alt="Himanshu Negi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
