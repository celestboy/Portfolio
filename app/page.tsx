"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const navbarOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <html lang="fr">
      <body>
        <Navbar />

        <main>
          <Header /> {/* Modifié ici */}
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </body>
    </html>
  );
}
