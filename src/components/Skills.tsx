
import { cn } from "@/lib/utils";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  className?: string;
}

const SkillCategory = ({ title, skills, className }: SkillCategoryProps) => {
  return (
    <div className={cn("bg-card p-6 rounded-lg shadow-sm", className)}>
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    "React", "JavaScript", "TypeScript", "HTML5", "CSS3", 
    "Redux", "Tailwind CSS", "Material UI", "Responsive Design"
  ];
  
  const backendSkills = [
    "Node.js", "Express.js", "MongoDB", "RESTful APIs", 
    "SQL", "Authentication", "WebSockets"
  ];
  
  const toolsSkills = [
    "Git", "GitHub", "VS Code", "npm", "Webpack", 
    "Babel", "Docker", "Jest", "Postman"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are the main tools and technologies in my skill set:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCategory 
            title="Front-end Development" 
            skills={frontendSkills} 
            className="card-hover border border-border/50"
          />
          <SkillCategory 
            title="Back-end Development" 
            skills={backendSkills} 
            className="card-hover border border-border/50"
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={toolsSkills} 
            className="card-hover border border-border/50"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
