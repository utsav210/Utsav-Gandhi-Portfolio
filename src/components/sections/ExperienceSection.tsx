import React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '../../data/portfolio';
import SectionWrapper from '../SectionWrapper';

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" title="Professional Experience">
      <div>
        <div className="max-w-4xl space-y-16">
          {experience.map((job, index) => (
            <motion.div 
              key={job.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 border-l border-surface-border group"
            >
              <div className="absolute w-4 h-4 bg-surface border-2 border-primary rounded-full -left-[9px] top-1 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(79,70,229,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors">{job.role}</h3>
                <span className="text-primary font-mono text-sm mt-2 md:mt-0 bg-primary/10 px-3 py-1 rounded-full">{job.timeline}</span>
              </div>
              
              <p className="text-text-primary text-lg mb-6 font-medium">{job.company} — <span className="text-text-muted">{job.location}</span></p>
              
              <ul className="space-y-4">
                {job.points.map((point, i) => (
                  <li key={i} className="text-text-secondary flex items-start font-light leading-relaxed">
                    <span className="text-primary/50 mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            Education <span className="h-px bg-surface-border flex-1 ml-4" />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.degree}
                whileHover={{ y: -5 }}
                className="p-8 glass-panel rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
                <h4 className="text-lg font-bold text-white mb-2 leading-tight">{edu.degree}</h4>
                <p className="text-text-muted text-sm mb-6 uppercase tracking-wider font-semibold">{edu.institution} <span className="text-primary mx-2">|</span> {edu.timeline}</p>
                <div className="inline-block bg-background border border-surface-border p-3 rounded-lg text-text-secondary text-sm font-mono shadow-inner">
                  {edu.details}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
