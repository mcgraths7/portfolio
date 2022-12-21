import React from 'react';
import Image from 'next/image';

const SkillCard = ({ imageSrc, label }) => (
  <div className="flex items-center justify-between px-8 py-4 bg-white rounded-xl shadow-md shadow-gray-400 transition-all hover:scale-105 ease-in duration-150">
    <Image src={imageSrc} width={50} height={50} />
    <p>{label}</p>
  </div>
);
export default SkillCard;
