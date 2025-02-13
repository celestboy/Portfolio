"use client";
import { Code2, Globe, Wrench, Library, Server } from "lucide-react";

const SkillsSection = () => {
  const domains = [
    {
      title: "Frontend Development",
      icon: <Code2 className="domain-icon" />,
      skills: [
        {
          name: "HTML/CSS",
          level: 95,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "JS",
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Intégration Web",
          level: 95,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
      ],
    },
    {
      title: "UI/UX & Design",
      icon: <Globe className="domain-icon" />,
      skills: [
        {
          name: "Responsive Design",
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Accessibilité (WCAG)",
          level: 90,
          logo: "https://www.w3.org/WAI/WCAG22/wcag2.2AA",
        },
        {
          name: "Mobile-first",
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
      ],
    },
    {
      title: "Programming & Scripting",
      icon: <Wrench className="domain-icon" />,
      skills: [
        {
          name: "Python",
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Typescript",
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "PHP",
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Library className="domain-icon" />,
      skills: [
        {
          name: "Next.js",
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Node.js",
          level: 75,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "TailwindCSS",
          level: 90,
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
        {
          name: "SASS",
          level: 95,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
        {
          name: "API REST",
          level: 80,
          logo: "./images/rest-api.png",
        },
      ],
    },
    {
      title: "Other",
      icon: <Server className="domain-icon" />,
      skills: [
        {
          name: "Git",
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "VS Code",
          level: 95,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "mySQL",
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      title: "AI & Emerging Tech",
      icon: <Globe className="domain-icon ai-icon" />,
      skills: [
        {
          name: "ChatGPT",
          logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg",
        },
        {
          name: "Claude.ia",
          logo: "https://cdn.brandfetch.io/claude.ai/logo.svg",
        },
        { name: "Deepseek", logo: "./images/deepseek.jpg" },
        { name: "Bolt", logo: "./images/bolt.jpg" },
      ],
    },
  ];

  return (
    <section id="compétences" className="skills-section">
      <h2 className="skills-title">Compétences :</h2>
      <div className="domains-grid">
        {domains.map((domain) => (
          <div
            key={domain.title}
            className={`domain-block ${
              domain.title === "AI & Emerging Tech" ? "ai-block" : ""
            }`}
          >
            <div className="block-header">
              <div className="block-icon">{domain.icon}</div>
              <h3 className="block-title">{domain.title}</h3>
            </div>
            <div className="block-content">
              {domain.skills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-info">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="skill-logo"
                    />
                    <span className="skill-name">{skill.name}</span>
                    {"level" in skill && (
                      <span className="skill-level">{skill.level}%</span>
                    )}
                  </div>
                  {"level" in skill && (
                    <div className="skill-progress-container">
                      <div
                        className="skill-progress-bar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
