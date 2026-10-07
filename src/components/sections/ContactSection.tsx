import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

const ContactSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center glass-panel p-12 md:p-20 rounded-3xl relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Let's build something <span className="text-gradient">intelligent.</span></h2>
        <p className="text-xl text-text-secondary mb-12 font-light leading-relaxed">
          Whether you're a recruiter looking for a forward-deployed engineer or a client needing an AI solution, my inbox is open.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl text-white bg-primary hover:bg-primary-light transition-all shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)]"
        >
          Say Hello
          <svg className="ml-3 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactSection;
