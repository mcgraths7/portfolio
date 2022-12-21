import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import CustomLink from './CustomLink';

const Main = () => (
  <div className="w-full h-screen text-center pt-24" id="home">
    <div className="max-w-7xl w-full h-full mx-auto p-4 flex justify-center items-center">
      <div>
        <div>
          <p className="uppercase text-md tracking-widest leading-6">Let's build something amazing together</p>
          <h2>
            Hey there, <span className="text-[#00009c]">Steven</span> here
          </h2>
          <h2>I've been a front-end web developer since 2020</h2>
          <p className="py-4 sm:max-w-[70%] m-auto">
            I've been a professional front-end web developer for about 2 years. During that time, I helped launch 4
            client sites (lead developer for 2, supported 2), and helped maintain and modernize Digg.com.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto">
            <div className="rounded-full shadow-md shadow-gray-400 p-6 hover:scale-110 ease-in duration-300 transition-all">
              <CustomLink href="https://linkedin.com/in/hi-im-steven" external>
                <FaLinkedinIn size={35} />
              </CustomLink>
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 hover:scale-110 ease-in duration-300 transition-all">
              <CustomLink href="https://github.com/mcgraths7" external>
                <FaGithub size={35} />
              </CustomLink>
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 hover:scale-110 ease-in duration-300 transition-all">
              <CustomLink href={`mailto:talktome@stevenmcgrath.xyz?subject=RE: Let's Connect`}>
                <AiOutlineMail size={35} />
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Main;
