import React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '../../data/portfolio';
import SectionWrapper from '../SectionWrapper';

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" title="Professional Experience">
      <div>
        <div className="max-w-5xl space-y-12">
          {experience.map((job, index) => (
            <motion.div 
              key={job.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 border-l border-surface-border group"
            >
              <div className="absolute w-4 h-4 bg-surface border-2 border-primary rounded-full -left-[9px] top-10 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(79,70,229,0.5)]" />
              
              <div className="glass-panel p-8 md:p-10 rounded-3xl hover:border-primary/30 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary-light transition-colors">{job.role}</h3>
                    <p className="text-text-primary text-lg mt-2 font-medium">{job.company} <span className="text-text-muted ml-2">— {job.location}</span></p>
                  </div>
                  <span className="inline-flex text-primary font-mono text-sm bg-primary/10 px-4 py-2 rounded-full self-start">{job.timeline}</span>
                </div>
                
                <ul className="space-y-4 mt-8">
                  {job.points.map((point, i) => (
                    <li key={i} className="text-text-secondary flex items-start font-light leading-relaxed">
                      <span className="text-primary/50 mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(79,70,229,0.8)]" />
                      <span className="text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
