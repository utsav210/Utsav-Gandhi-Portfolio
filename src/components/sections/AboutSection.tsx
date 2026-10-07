import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="Engineering Philosophy" subtitle="How I approach building intelligent systems.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="space-y-6 text-text-secondary text-lg leading-relaxed font-light"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p>
            I don't merely know AI technologies. I understand problems, architect solutions, build systems, integrate AI into real applications, and deliver production-oriented software.
          </p>
          <p>
            With a background intersecting <strong className="text-white font-medium">Generative AI, Machine Learning, and Cybersecurity</strong>, I focus on building systems that are not just intelligent, but secure, performant, and reliable. My current research explores AI-safety principles applied to multi-agent LLM pipelines.
          </p>
          <p>
            Whether it's reducing API latency by 40% or architecting an intent-driven LangGraph workflow, I prioritize engineering discipline over hype.
          </p>
        </motion.div>
        
        <motion.div 
          className="glass-panel p-8 rounded-2xl border-l-4 border-l-primary relative overflow-hidden group"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2" />
          
          <h3 className="font-mono text-primary mb-6 text-sm tracking-widest uppercase">## CORE_PRINCIPLES</h3>
          <ul className="space-y-5 font-mono text-sm">
            {['Evidence over Claims', 'Outcomes over Technologies', 'Security by Design', 'Simplicity in Architecture'].map((principle, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-4 text-text-primary"
                whileHover={{ x: 5, color: '#818CF8' }}
              >
                <span className="text-primary opacity-70">{`>`}</span> {principle}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
