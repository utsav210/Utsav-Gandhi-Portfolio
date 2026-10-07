import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/portfolio';
import SectionWrapper from '../SectionWrapper';

const ServicesSection = () => {
  return (
    <SectionWrapper id="services" title="What I Can Build" subtitle="Freelance & Consulting Services">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-hover p-8 md:p-10 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 17-3-5 3-5"/><path d="m19 17 3-5-3-5"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-text-secondary mb-8 leading-relaxed font-light">{service.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {service.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-background border border-surface-border text-xs font-mono text-text-muted group-hover:border-primary/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
