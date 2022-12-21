import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Digg = () => (
  <div className="w-full pt-24">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image src="/assets/projects/digg-landing.png" fill className="absolute z-1 max-w-7xl mx-auto" />
      <div className="absolute top-[70%] max-w-7xl w-full left-[50%] right-[50%] translate-x-[-45%] translate-y-[-50%] text-white z-20">
        <h2>Digg</h2>
        <h3>Vuejs | Tailwind | GraphQL</h3>
      </div>
    </div>
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
        <h3 className="py-2 text-2xl">Overview</h3>
        <p>
          I joined Digg in the middle of 2022, as my first full time position after being a contractor for 18 months.
          During my time there, I made a number of small but important contributions to the site.
        </p>
        <p>
          First, I improved the accessibility and SEO of the site by comparing the site against Google's Page Speed
          Insights score, as well as Dequeue's AXE Dev Tool.
        </p>
        <p>
          Next, I implemented Cypress Snapshot Testing into the CI/CD pipeline, so that changes which would break the
          layout would be flagged for review, and not automatically deployed.
        </p>
        <p>
          The last thing that I worked on was porting the legacy JS implementation to a more modern Vuejs approach. We
          used Vue's composition API, as it was a bit newer and easier for us to configure. I ensured the new Vue
          microfrontends had feature parity with the original code before merging it with the main codebase.
        </p>
        <h3 className="py-2 text-2xl">Tech Stack</h3>
        <p>Vuejs | Tailwind | GraphQL | Cypress | Twig</p>
        <div className="shadow-xl shadow-gray-400 rounded-md bg-gradient-to-r from-[#00009c] to-[#6495ED] text-white w-fit px-4 py-2 text mt-4">
          <Link href="https://digg.com" target="_blank" rel="noreferrer nofollow">
            Demo
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Digg;
