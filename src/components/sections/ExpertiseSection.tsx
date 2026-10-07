import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';
import SectionWrapper from '../SectionWrapper';

const ExpertiseSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <SectionWrapper id="expertise" title="Technical Expertise" subtitle="Technologies and domains I work with in production.">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Object.entries(skills).map(([category, skillItems]) => (
          <motion.div 
            key={category} 
            variants={item}
            className="gradient-border p-8 h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold">
                {category.charAt(0).toUpperCase()}
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">{category.replace('_', ' ').toUpperCase()}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              {skillItems.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 rounded-md bg-surface-border/50 text-text-secondary text-sm font-medium hover:text-white hover:bg-surface-border transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default ExpertiseSection;
