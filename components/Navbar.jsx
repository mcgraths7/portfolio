import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import CustomLink from './CustomLink';

const Navbar = ({ isOpen, toggleMenu }) => (
  <header className="fixed w-full shadow-xl z-50 bg-white h-24">
    <div className="flex justify-between items-center w-full px-4 py-2">
      <h1>
        <Link href="/">
          <Image src="/assets/stevenmcgrath1.svg" width={100} height={100} />
        </Link>
      </h1>
      <nav name="primary-navigation">
        <ul className="hidden md:flex gap-4">
          <li className="text-small font-sans uppercase hover:underline">
            <Link href="/#home">Home</Link>
          </li>
          <li className="text-small font-sans uppercase hover:underline">
            <Link href="/#about">About</Link>
          </li>
          <li className="text-small font-sans uppercase hover:underline">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="text-small font-sans uppercase hover:underline">
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="text-small font-sans uppercase hover:underline">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className={isOpen ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''} />
    <div
      className={
        isOpen
          ? 'md:hidden fixed right-0 top-0 w-[75vw] sm:w-[60vw] md:w-[45vw] h-full bg-[#ecf0f3] p-4 ease-in duration-500'
          : 'md:hidden fixed right-[-100%] top-0 w-[75vw] sm:w-[60vw] md:w-[45vw] h-full bg-[#ecf0f3] p-4 ease-in duration-500'
      }
    >
      <div>
        <div className="flex w-full items-center justify-between">
          <Image src="/assets/stevenmcgrath1.svg" width={50} height={50} />
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2 shadow-md shadow-gray-400 cursor-pointer absolute right-4 bottom-4 hover:scale-110 ease-in transition-all duration-300"
            disabled={!isOpen}
          >
            <AiOutlineClose size={25} />
          </button>
        </div>
        <div className="py-4 flex flex-col gap-2">
          <p>Developing modern web applications since 2020</p>
          <p>Let's build something amazing together</p>
        </div>
      </div>
      <nav name="mobile-navigation" className="py-4">
        <ul className="flex flex-col gap-4 uppercase">
          <li className="py-1 text-sm" onClick={toggleMenu}>
            <Link href="/#home">Home</Link>
          </li>
          <li className="py-1 text-sm" onClick={toggleMenu}>
            <Link href="/#about">About</Link>
          </li>
          <li className="py-1 text-sm" onClick={toggleMenu}>
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="py-1 text-sm" onClick={toggleMenu}>
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="py-1 text-sm" onClick={toggleMenu}>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
        <div className="pt-40">
          <p className="uppercase tracking-widest text-[#00009c] font-bold">Let's Connect</p>
          <div className="flex items-center w-full sm:w-80 gap-4 py-2">
            <div className="rounded-full shadow-md shadow-gray-400 p-2">
              <CustomLink href="https://linkedin.com/in/hi-im-steven" external>
                <FaLinkedinIn />
              </CustomLink>
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-2">
              <CustomLink href="https://github.com/mcgraths7" external>
                <FaGithub />
              </CustomLink>
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-2">
              <CustomLink href={`mailto:talktome@stevenmcgrath.xyz?subject=RE: Let's Connect`}>
                <AiOutlineMail />
              </CustomLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Navbar;
