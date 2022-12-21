import React from 'react';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import CustomLink from './CustomLink';

const Contact = () => (
  <div id="contact" className="w-full p-4 py-16 mt-4">
    <div className="max-w-7xl m-auto">
      <p className="text-xl tracking-widest uppercase text-[#00009c]">Contact</p>
      <h2 className="py-4">Drop me a line</h2>
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 bg-white">
          <div className="lg:p-4 h-full">
            <div>
              <Image className="rounded-xl" src="/assets/selfie2.jpeg" alt="majestic" width={400} height={300} />
              <h2 className="py-2">Steven McGrath</h2>
              <p>Front-End Developer</p>
              <p className="py-4">I am available for full-time positions. Drop me a line and let's chat!</p>
            </div>
            <div className="max-w-[330px]">
              <p className="uppercase pt-8">Connect With Me</p>
              <div className="flex items-center gap-8 py-4">
                <CustomLink href="https://www.linkedin.com/in/hi-im-steven/" external>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-inherit">
                    <FaLinkedinIn />
                  </div>
                </CustomLink>
                <CustomLink href="https://github.com/mcgraths7" external>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-inherit">
                    <FaGithub />
                  </div>
                </CustomLink>

                <CustomLink href={`mailto:talktome@stevenmcgrath.xyz?subject=RE: Let's Connect`}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-inherit">
                    <AiOutlineMail />
                  </div>
                </CustomLink>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-white">
          <div className="p-4">
            <form
              action="https://getform.io/f/2cb0571e-631c-49e4-a2ae-354a53fa1ec7"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="uppercase text-sm py-2">
                    Name
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="uppercase text-sm py-2">
                    Phone Number
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="tel"
                    name="phone"
                    placeholder="867-5309"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="email" className="uppercase text-sm py-2">
                  Email
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                  placeholder="you@domain.xyz"
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="subject" className="uppercase text-sm py-2">
                  Subject
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                  placeholder="Let's get down to business"
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="message" className="uppercase text-sm py-2">
                  Message
                </label>
                <textarea
                  name="message"
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  placeholder="I think you are great and I would love to work with you..."
                />
              </div>
              <button type="submit" className="w-full p-4 text-gray-100 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <CustomLink href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#00009c]" size={30} />
          </div>
        </CustomLink>
      </div>
    </div>
  </div>
);

export default Contact;
