"use client";
import { motion } from "framer-motion";
import { useState } from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { Icon: Github, link: "https://github.com/celestboy" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/celestin-godefroy/" },
    { Icon: Mail, link: "mailto:celestin.godefroy@gmail.com" },
  ];

  const [copied, setCopied] = useState(false);

  const copierTexte = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const texte = (e.target as HTMLParagraphElement).innerText; 
    
    navigator.clipboard.writeText(texte).then(() => {
      setCopied(true);
      
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contact" className="contact">
      <h2>Travaillons ensemble</h2>
      <p>N'hésitez pas à me contacter</p>
      <p id="mail" onClick={copierTexte} title="copier">celestin.godefroy@gmail.com</p>
      <div className="social-icons">
        {socialLinks.map(({ Icon, link }) => (
          <motion.a
            href={link}
            key={link}
            whileHover={{ scale: 1.2, rotate: 360 }}
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
