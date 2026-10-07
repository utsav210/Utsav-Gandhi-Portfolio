import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: personalInfo.github,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      )
    },
    {
      name: "LinkedIn",
      url: personalInfo.linkedin,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    {
      name: "Email",
      url: `mailto:${personalInfo.name} <${personalInfo.email}>`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      )
    }
  ];

  return (
    <footer className="py-12 border-t border-surface-border mt-20 relative z-10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-muted text-sm font-medium flex items-center gap-2"
        >
          <span className="text-xl">©</span> {currentYear} {personalInfo.name}. 
          <span className="hidden sm:inline">All rights reserved.</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={link.name}
              whileHover={{ y: -3, scale: 1.1, color: '#818CF8' }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-surface-border/30 flex items-center justify-center text-text-secondary hover:bg-surface-border transition-colors shadow-sm hover:shadow-primary/20 hover:shadow-lg"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
        
      </div>
    </footer>
  );
};

export default Footer;
