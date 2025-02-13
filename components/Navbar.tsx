"use client";
import { motion } from "framer-motion";

const Navbar = () => {
  const menuItems = [
    { label: "À propos", target: "about" },
    { label: "Compétences", target: "compétences" },
    { label: "Projets", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul>
        {menuItems.map((item) => (
          <motion.li
            key={item.target}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={`#${item.target}`}
              onClick={(event) => handleSmoothScroll(event, item.target)}
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;