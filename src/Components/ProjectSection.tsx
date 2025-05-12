import { useEffect, useRef, useState } from "react";
import "./ProjectSection.css";
import DishPal from "../assets/dishpal-ai-img.png";
import NebX from "../assets/neb-x-img.png";
import NebAI from "../assets/neb-ai-img.png";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const ProjectSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "DishPal AI",
      description: "AI-powered recipe generator that creates dishes from your available ingredients. Features recipe saving and favorites.",
      technologies: ["React", "JavaScript", "OpenAI API", "CSS"],
      imageUrl: DishPal,
      githubUrl: "https://github.com/Nebulaz7/dishpal-ai",
      liveUrl: "https://dishpal-ai.vercel.app/",
    },
    {
      id: 2,
      title: "Digital Wallet App",
      description: "Neb-x",
      technologies: ["HTMl", "CSS", "Javascript", "Bootstrap"],
      imageUrl: NebX,
      githubUrl: "https://github.com/Nebulaz7/neb-x",
      liveUrl: "https://nebulaz7.github.io/neb-x",
    },
    {
      id: 3,
      title: "Neb AI",
      description: "An AI-Powered chatbot, that is always helpful.",
      technologies: ["React", "TypeScript", "Gemini Ai API", "Tailwind"],
      imageUrl: NebAI,
      githubUrl: "https://github.com/Nebulaz7/chatbot",
      liveUrl: "https://neb-ai.vercel.app/",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectId = parseInt(entry.target.getAttribute("data-id") || "0");
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => 
              prev.includes(projectId) ? prev : [...prev, projectId]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="projects-container" id="projects">
      <div className="section-title">
        <h2>My Projects</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${visibleProjects.includes(project.id) ? "visible" : ""}`}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            data-id={project.id}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span className="link-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </span>
                    Code
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span className="link-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </span>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;