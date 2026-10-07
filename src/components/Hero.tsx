import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-primary rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Opportunities
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Hi, I'm <span className="text-white">{personalInfo.name}</span>.<br/>
              <span className="text-gradient">{personalInfo.headline}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl leading-relaxed">
              {personalInfo.positioning}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.resume} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-surface-border text-white font-medium hover:bg-surface-hover hover:border-text-muted transition-colors"
              >
                <FileText className="w-4 h-4" />
                Resume
              </motion.a>
            </div>

            <div className="flex items-center gap-5 text-text-secondary">
              <motion.a whileHover={{ y: -3, scale: 1.1, color: '#ffffff' }} href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 -ml-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a whileHover={{ y: -3, scale: 1.1, color: '#06B6D4' }} href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a whileHover={{ y: -3, scale: 1.1, color: '#4F46E5' }} href={`mailto:${personalInfo.name} <${personalInfo.email}>`} className="p-2 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Visual Element - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mt-12 lg:mt-0 w-full flex justify-center lg:justify-end"
          >
            <div className="aspect-[4/5] w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] relative group">
              {/* Glowing Background Blob */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-700" />
              
              {/* Image Container */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-surface-border bg-surface shadow-2xl z-10"
              >
                <img 
                  src={`${import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '')}/profile.jpeg`} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle glass overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/20 pointer-events-none mix-blend-overlay" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
