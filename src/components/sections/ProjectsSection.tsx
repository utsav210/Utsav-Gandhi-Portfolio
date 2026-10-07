import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import ProjectCardReact from '../ProjectCardReact';

const ProjectsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCardReact key={project.title} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsSection;
