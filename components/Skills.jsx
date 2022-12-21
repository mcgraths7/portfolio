import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => (
  <div className="w-full md:h-screen p-4 py-16" id="skills">
    <div className="max-w-7xl m-auto">
      <h2 className="py-4 uppercase text-xl tracking-widest text-[#00009c]">Skills</h2>
      <h3 className="py-2 text-3xl">What I can do</h3>
      <div className=" py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <SkillCard imageSrc="/assets/skills/react.png" label="React" />
        <SkillCard imageSrc="/assets/skills/javascript.png" label="JavaScript" />
        <SkillCard imageSrc="/assets/skills/nextjs.png" label="Nextjs" />
        <SkillCard imageSrc="/assets/skills/html.png" label="HTML" />
        <SkillCard imageSrc="/assets/skills/css.png" label="CSS" />
        <SkillCard imageSrc="/assets/skills/tailwind.png" label="Tailwind" />
        <SkillCard imageSrc="/assets/skills/node.png" label="Nodejs" />
        <SkillCard imageSrc="/assets/skills/github1.png" label="Github" />
        <SkillCard imageSrc="/assets/skills/aws.png" label="AWS" />
        <SkillCard imageSrc="/assets/skills/mongo.png" label="Mongo" />
      </div>
    </div>
  </div>
);

export default Skills;
