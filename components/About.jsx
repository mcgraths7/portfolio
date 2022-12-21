import React from 'react';
import Image from 'next/image';

import CustomLink from './CustomLink';

const About = () => (
  <div className="w-full mt-4 p-4 py-16" id="about">
    <div className="max-w-7xl m-auto md:grid grid-cols-3 gap-8 items-center">
      <div className="col-span-2">
        <h2 className="py-4 uppercase text-xl tracking-widest text-[#00009c]">About</h2>
        <h3 className="py-2 text-3xl">Who I am</h3>
        <div className="text-justify">
          <p className="py-2">
            My name is Steven McGrath, and I've been a professional front-end web Developer for about 2 years. My main
            tech stack is React + CSS with most of my backend work coming from writing lambda functions in Nodejs.
          </p>
          <p className="py-2">
            During my time at{' '}
            <CustomLink href="https://digg.com" external>
              Digg
            </CustomLink>
            , I participated in regular hackfests where we quickly prototyped new features which would later be
            refactored and and cleaned it up into production ready features. We also had regular code reviews where we
            would collaborate to make sure my changes were consistent with the style the company had developed.
            Additionally, I worked closely with our designer to go from idea to prototype to deployed feature.
          </p>
          <p className="py-2">
            At Lumber, I would work with our designe to transform Figma files into a finished product. I took the lead
            on two clients:{' '}
            <CustomLink href="https://omorpho.fit" external>
              Omorpho
            </CustomLink>{' '}
            and{' '}
            <CustomLink href="https://itsaugust.co" external>
              August
            </CustomLink>
            . Additionally, I took on a supporting role for&nbsp;
            <CustomLink href="https://super73.com" external>
              Super73
            </CustomLink>
          </p>
          <p className="py-2">
            In my spare time, I enjoy tabletop games, trying out new bars and restaurants, and staying active (hiking,
            biking, and I recently started lifting)
          </p>
          <p className="py-2 pb-4">
            <CustomLink href="/">Please take a look at some of my work</CustomLink>
          </p>
        </div>
      </div>
      <Image src="/assets/selfie.jpeg" width={400} height={300} className="rounded-lg mx-auto" />
    </div>
  </div>
);

export default About;
