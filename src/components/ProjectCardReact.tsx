import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    role: string;
    outcome: string;
    problem: string;
    solution: string;
    technologies: string[];
    highlights: string[];
    github?: string;
    demo?: string;
  };
  index: number;
}

const ProjectCardReact: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-hover p-8 flex flex-col h-full relative group"
    >
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="mb-6 flex justify-between items-start gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">{project.title}</h3>
          <p className="text-sm font-mono text-primary/80">{project.role}</p>
        </div>
        <div className="flex gap-3 text-text-muted">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub Repository">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Live Demo">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="space-y-4 mb-6 flex-grow">
        <div>
          <p className="text-text-primary font-medium leading-relaxed mb-4">{project.outcome}</p>
          
          <div className="space-y-3 text-sm text-text-secondary font-light">
            <div>
              <strong className="text-white font-medium">Problem:</strong> {project.problem}
            </div>
            <div>
              <strong className="text-white font-medium">Approach:</strong> {project.solution}
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-surface-border">
          <h4 className="text-sm font-semibold text-white mb-4">Engineering Highlights</h4>
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="text-sm text-text-secondary flex items-start leading-relaxed">
                <span className="text-primary mr-3 mt-0.5">▹</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-6 flex flex-wrap gap-2">
        {project.technologies.map(tech => (
          <span key={tech} className="px-2.5 py-1 rounded bg-background border border-surface-border text-xs font-mono text-text-secondary">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCardReact;
