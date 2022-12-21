import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <div id="projects" className="w-full p-4 py-16 mt-4">
    <div className="max-w-7xl m-auto">
      <p className="text-xl tracking-widest uppercase text-[#00009c]">Projects</p>
      <h2 className="py-4">What I have Built</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Digg V5"
          backgroundImg="/assets/projects/digg-landing.png"
          projectUrl="/digg"
          tech="Vuejs | Tailwind | GraphQL"
          via="Digg.com"
        />
        <ProjectCard
          title="Omorpho"
          backgroundImg="/assets/projects/omorpho-landing.png"
          projectUrl="/omorpho"
          tech="Nextjs | React | GraphQL | EmotionJS | Chord Commerce | Apollo"
          via="Lumber, LLC"
        />
        <ProjectCard
          title="August"
          backgroundImg="/assets/projects/august-landing.png"
          projectUrl="/august"
          tech="Gatsbyjs | React | GraphQL | EmotionJS | Chord Commerce"
          via="Lumber, LLC"
        />
        <ProjectCard
          title="Super73"
          backgroundImg="/assets/projects/super73-landing.png"
          projectUrl="/super73"
          tech="Gatsbyjs | React | GraphQL | EmotionJS | Chord Commerce"
          via="Lumber, LLC"
        />
      </div>
    </div>
  </div>
);

export default Projects;
