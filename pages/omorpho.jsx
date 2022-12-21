import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Omorpho = () => (
  <div className="w-full pt-24">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image src="/assets/projects/omorpho-landing.png" fill className="absolute z-1 max-w-7xl mx-auto" />
      <div className="absolute top-[70%] max-w-7xl w-full left-[50%] right-[50%] translate-x-[-45%] translate-y-[-50%] text-white z-20">
        <h2>Omorpho</h2>
        <h3>React | Nextjs | Chord Commerce</h3>
      </div>
    </div>
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
        <h3 className="py-2 text-2xl">Overview</h3>
        <div className="flex flex-col gap-2">
          <p>
            We started working on Omorpho in mid 2021, and the project lasted through the year, wrapping up in early
            December.
          </p>
          <p>
            For this project, I worked with two other developers, as the scope was quite large. I was responsible for
            building the Product List Pages, Product Detail Pages, as well as the Cart. We worked closely with the
            client, as well as our designer to port the Figma design into code.
          </p>
          <p>
            We chose Nextjs, as we had used Gatsby on previous projects, and wanted to try something new. Our partner,
            Chord, uses Contentful to power their Order Management System, but we also hook into it for content like
            copy, images, and pages. Contentful is a good choice for this style of project because it exposes a fully
            featured GraphQL API.
          </p>
          <p>
            Like all of our Chord projects, we use ThemeUI for our styling, which is a superset of EmotionJS. I like
            Emotion as it has a really nice media query format. You define your screen sizes, then you can just put your
            declarations in bracket notation like
            <br />
            <code>fontSize: ['16px', '20px', '24px']</code>
          </p>
        </div>
        <h3 className="py-2 text-2xl">Challenges</h3>
        <div className="flex flex-col gap-2">
          <p>
            The timeline for this project was really tight, so there were some challenges leading up to the December
            launch.
          </p>
          <p>
            The first challenge I ran into was a feature request I received sometime in August. I cannot divulge the
            nature of the request on a public forum, but I can definitely go over the details on a call.
          </p>
          <p>
            The second challenge was performance. Given that this is an ecommerce site, there is a lot of analytics and
            other things that get loaded up front. These are all blocking resources, so we had to get clever with the
            rest of the site to improve site load speed. We implemented a lot of different things: code splitting, lazy
            loading below the fold assets, and image optimizations beyond what we normally would do.
          </p>
        </div>
        <h3 className="py-2 text-2xl">Tech Stack</h3>
        <p>Nextjs | React | Chord Commerce | EmotionJS | Contentful | Apollo</p>
        <div className="shadow-xl shadow-gray-400 rounded-md bg-gradient-to-r from-[#00009c] to-[#6495ED] text-white w-fit px-4 py-2 text mt-4">
          <Link href="https://omorpho.fit" target="_blank" rel="noreferrer nofollow">
            Demo
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Omorpho;
