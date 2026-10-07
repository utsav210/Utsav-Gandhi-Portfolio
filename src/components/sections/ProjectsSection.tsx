import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import ProjectCardReact from '../ProjectCardReact';
import SectionWrapper from '../SectionWrapper';

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="Systems I've architected and built.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCardReact key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
