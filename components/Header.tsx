"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Header = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero" id="about">
      <div className="hero-content">
        <motion.h1
          className="animate-hero"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Développeur Web Full Stack
        </motion.h1>
        <motion.p
          className="animate-hero"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          En recherche de stage & alternance
        </motion.p>
        <motion.div
          className="animate-hero"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <button
            className="btn-primary"
            onClick={() => scrollToSection("projects")}
          >
            Voir mes projets
          </button>
        </motion.div>
      </div>
      <motion.div
        className="scroll-icon"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("compétences")}
        style={{ cursor: "pointer" }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </header>
  );
};

export default Header;
