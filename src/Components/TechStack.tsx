import { useEffect, useRef, useState } from "react";
import "./TechStack.css";

interface TechItem {
  id: number;
  name: string;
  icon: string;
  color: string;
}

const TechStack = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const techItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const techItems: TechItem[] = [
    {
      id: 1,
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      id: 2,
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      id: 4,
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      id: 5,
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      color: "#7952B3",
    },
    {
      id: 6,
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      id: 7,
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      color: "#FFCA28",
    },
    {
      id: 8,
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      id: 9,
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
    },
    {
      id: 10,
      name: "npm",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      color: "#CB3837",
    },
    {
      id: 11,
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      id: 12,
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      color: "#38BDF8",
    },
    {
      id: 13,
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000",
    },
    {
      id: 14,
      name: "Supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      color: "#3ECF8E",
    },
    {
      id: 15,
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
    },
    {
      id: 17,
      name: "Solidity",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
      color: "#AA6746",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const techId = parseInt(entry.target.getAttribute("data-id") || "0");
          if (entry.isIntersecting) {
            setVisibleItems((prev) =>
              prev.includes(techId) ? prev : [...prev, techId]
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    techItemsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      techItemsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="tech-stack-container" id="technologies">
      <div className="cosmos-background">
        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
        <div className="comet"></div>
      </div>

      <div className="section-title">
        <h2>Tech Stack</h2>
        <div className="title-underline"></div>
      </div>

      <p className="tech-intro">
        Technologies and tools I work with to build digital experiences
      </p>

      <div className="tech-grid">
        {techItems.map((tech, index) => (
          <div
            key={tech.id}
            className={`tech-item ${
              visibleItems.includes(tech.id) ? "visible" : ""
            }`}
            ref={(el) => {
              techItemsRef.current[index] = el;
            }}
            data-id={tech.id}
            style={{
              animationDelay: `${index * 0.1}s`,
              boxShadow: visibleItems.includes(tech.id)
                ? `0 0 15px ${tech.color}33`
                : "none",
            }}
          >
            <div className="tech-icon-wrapper">
              <img src={tech.icon} alt={tech.name} className="tech-icon" />
              <div
                className="tech-glow"
                style={{
                  background: `radial-gradient(circle, ${tech.color}33 0%, transparent 70%)`,
                }}
              ></div>
            </div>
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>

      <div className="orbit">
        <div className="orbit-circle"></div>
        <div className="orbit-planet"></div>
      </div>
    </section>
  );
};

export default TechStack;
