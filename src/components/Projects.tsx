
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
  githubLink: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  demoLink,
  githubLink,
  className
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg overflow-hidden shadow-sm border border-border/50 card-hover",
      className
    )}>
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="bg-secondary/80 px-2 py-1 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a 
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary/90 transition-colors"
          >
            Live Demo
          </a>
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-4 py-2 rounded font-medium hover:bg-secondary transition-colors flex items-center gap-2"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce stores with inventory management, order processing, and analytics.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support, user authentication, and comment system.",
      tags: ["Node.js", "Express", "MongoDB", "React", "JWT"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project is a unique piece
            of development that I've built from the ground up.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
