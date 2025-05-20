
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="text-primary font-medium mb-4 animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins animate-fade-in" style={{animationDelay: '0.1s'}}>
            Harshdeep Singh
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Front-end Developer & Node.js Engineer
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: '0.3s'}}>
            I build exceptional digital experiences with modern technologies.
            Specializing in React and Node.js to create fast, responsive, and elegant solutions.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-primary" size={28} />
      </a>
    </section>
  );
};

export default Hero;
