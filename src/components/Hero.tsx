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
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-light transition-colors">
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-surface-hover text-white font-medium hover:bg-surface-hover transition-colors">
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>

            <div className="flex items-center gap-5 text-text-secondary">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 -ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors p-2">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Visual Element - AI Pipeline Concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square max-w-[500px] ml-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface to-background border border-surface-hover rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center p-8">
                {/* Abstract Node Network */}
                <div className="w-full h-full relative font-mono text-xs text-text-muted flex flex-col justify-between">
                  <div className="flex justify-between items-center w-full">
                    <div className="p-3 border border-surface-hover rounded bg-surface text-text-secondary">USER_INTENT</div>
                    <div className="h-px bg-surface-hover flex-1 mx-2" />
                    <div className="p-3 border border-primary/30 rounded bg-primary/5 text-primary">PLANNER_AGENT</div>
                  </div>
                  
                  <div className="flex justify-center my-4 opacity-50">
                    <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <div className="p-3 border border-surface-hover rounded bg-surface">RETRIEVAL (RAG)</div>
                    <div className="p-3 border border-surface-hover rounded bg-surface">TOOL_EXECUTION</div>
                    <div className="p-3 border border-surface-hover rounded bg-surface">LLM_CORE</div>
                  </div>
                  
                  <div className="flex justify-center my-4 opacity-50">
                    <div className="w-px h-16 bg-gradient-to-t from-primary/50 to-transparent" />
                  </div>

                  <div className="flex justify-center items-center w-full">
                    <div className="h-px bg-surface-hover w-12 mr-2" />
                    <div className="p-3 border border-green-500/30 rounded bg-green-500/5 text-green-400">STRUCTURED_OUTPUT</div>
                    <div className="h-px bg-surface-hover w-12 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
