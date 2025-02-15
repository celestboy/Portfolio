"use client";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  school: string[],
  url: string;
  image: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Remake SASS",
      description: "Mon projet réalisé en HTML et SASS.",
      technologies: ["HTML", "SASS"],
      school: ["école"],
      url: "/projets/SASS/remake",
      image: "/images/preview/remake-sass.png",
    },
    // {
    //   title: "Remake Tesla",
    //   description: "Un remake inspiré du site Tesla, réalisé en HTML et SASS.",
    //   technologies: ["HTML", "CS", "JS"],
    //   school: ["perso", "ancien"],
    //   url: "/projets/anciens_remakes/tesla",
    //   image: "/images/preview/remake_tesla.png",
    // },
    // {
    //   title: "Remake Macdo",
    //   description: "Un remake inspiré du site de Macdo",
    //   technologies: ["HTML", "CSS"],
    //   school: ["perso", "ancien"],
    //   url: "/projets/anciens_remakes/mcdo",
    //   image: "/images/preview/remake_mcdo.png",
    // },
    {
      title: "Tailwindcss | CV - Carte de visite",
      description:
        "Un projet Tailwindcss reproduisant un CV et une carte de visite selon le format",
      technologies: ["HTML", "Tailwindcss"],
      school: ["école"],
      url: "/projets/tailwindcss/CV",
      image: "/images/preview/CV.png",
    },
    {
      title: "Tailwindcss | Mock debate",
      description:
        "Un projet Tailwindcss illustrant un comparaison entre 2 véhicules",
      technologies: ["HTML", "Tailwindcss"],
      school: ["école"],
      url: "/projets/tailwindcss/mock-debate",
      image: "/images/preview/mock-debate.png",
    },
    {
      title: "SASS | Mixin - variables",
      description: "Un projet SASS utilisant les mixins & variables",
      technologies: ["HTML", "SASS"],
      school: ["école"],
      url: "/projets/SASS/mixin-variables",
      image: "/images/preview/mixin-variables.png",
    },
    {
      title: "SASS | Carte format portrait",
      description: "Premier projet SASS (découverte)",
      technologies: ["HTML", "SASS"],
      school: ["école"],
      url: "/projets/SASS/carte",
      image: "/images/preview/carte.png",
    },
    {
      title: "Convertisseur de devises",
      description: "Convertisseur de devises (temps réel)",
      technologies: ["HTML", "CSS", "JS"],
      school: ["école"],
      url: "/projets/convertisseur-devises",
      image: "/images/preview/convertisseur-devises.png",
    },
    {
      title: "Projet personnel | Site publié",
      description:
        "(~2020) - Site vitrine publié en ligne pour une créatrice d'accessoires",
      technologies: ["HTML", "CSS", "publié"],
      school: ["perso", "ancien"],
      url: "http://fannai.fr",
      image: "/images/preview/fannai.png",
    },
    {
      title: "Tableau mondrian",
      description: "Reproduction d'un tableau mondrian",
      technologies: ["HTML", "CSS"],
      school: ["école"],
      url: "/projets/mondrian",
      image: "/images/preview/mondrian.png",
    },
  ];

  const handleProjectClick = (project: Project) => {
    window.open(project.url, "_blank");
  };

  return (
    <section id="projects" className="projects">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-school">
                {project.school.map((school, idx) => (
                  <span key={idx} className="school-tag">
                    {school}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
