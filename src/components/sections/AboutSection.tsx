import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Activity, Layers } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';

const principles = [
  { title: 'Evidence over Claims', desc: 'Focusing on measurable engineering impact.', icon: Activity },
  { title: 'Outcomes over Tech', desc: 'Solving problems, not forcing frameworks.', icon: Target },
  { title: 'Security by Design', desc: 'Building robust, red-teamed AI pipelines.', icon: Shield },
  { title: 'Simplicity First', desc: 'Avoiding over-engineering for maintainability.', icon: Layers }
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="Engineering Philosophy" subtitle="How I approach building intelligent systems.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            With a background intersecting <strong className="text-white font-medium">Generative AI, Agentic AI, Machine Learning, and Cybersecurity</strong>, I focus on building systems that are not just intelligent, but secure, performant, and reliable. My current research explores AI-safety principles applied to multi-agent LLM pipelines.
          </p>
          <p>
            Whether it's reducing API latency by 40% or architecting an intent-driven LangGraph workflow, I prioritize engineering discipline over hype.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div 
                  key={index} 
                  className="p-6 rounded-2xl border border-surface-border bg-surface/80 backdrop-blur hover:bg-surface-hover/80 hover:border-primary/50 transition-colors group cursor-default shadow-lg"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold mb-2 tracking-wide">{principle.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{principle.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
