import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ title, backgroundImg, tech, projectUrl, via }) => (
  <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#00009c] to-[#6495ED]">
    <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} width="640" height="304" />
    <div className="hidden group-hover:block w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-2">
      <h3 className="text-lg text-white tracking-wider text-center">{title}</h3>
      <h3 className="text-lg text-white tracking-wider text-center">via {via}</h3>
      <p className="py-2 text-white text-center">{tech}</p>
      <Link
        href={projectUrl}
        className="block text-center py-2 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer w-fit mx-auto"
      >
        More Info
      </Link>
    </div>
  </div>
);

export default ProjectCard;
