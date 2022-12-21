import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomLink from '../components/CustomLink';

const August = () => (
  <div className="w-full pt-24">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image src="/assets/projects/august-landing.png" fill className="absolute z-1 max-w-7xl mx-auto" />
      <div className="absolute top-[70%] max-w-7xl w-full left-[50%] right-[50%] translate-x-[-45%] translate-y-[-50%] text-white z-20">
        <h2>August</h2>
        <h3>React | Gatsby | Chord Commerce</h3>
      </div>
    </div>
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
        <h3 className="py-2 text-2xl">Overview</h3>
        <div className="flex flex-col gap-2">
          <p>
            I started working on August as my first project at Lumber in late 2020, and the project wrapped up in early
            2021.
          </p>
          <p>
            For this project, I built the marketing site by myself, and the full ecommerce site with one other
            developer. I was responsible for building the Home Page, Product Detail Pages, as well as the Cart. The
            client communication was pretty sparse, so we had to take some creative liberties on aspects of the site
            that we did not get feedback on.
          </p>
          <p>
            We chose Gatsby, as our partner Chord had a scaffold in place for Gatsby, though we ended up scrapping most
            of it. Chord uses Contentful to power their Order Management System, but we also hook into it for content
            like copy, images, and pages. Contentful is a good choice for this style of project because it exposes a
            fully featured GraphQL API.
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
            The main challenge for the marketing site was this was my first client after joining Lumber, and I was given
            basically full control on what technologies to use. This may sound good, but I ended up just choosing flavor
            of the month things that I was only familar with on a surface level. This made it take a lot longer than it
            really should have, but it was a really good learning experience overall.
          </p>
          <p>
            The second challenge was for the actual ecommerce site: the client was pretty sparse in their communication.
            We had to take some creative liberties and make some assumptions on what they wanted.
          </p>
        </div>
        <h3 className="py-2 text-2xl">Accolades</h3>
        <p>
          A the marquee I built for August generated some chatter on Reddit over on{' '}
          <CustomLink
            href="https://www.reddit.com/r/css/comments/qcq6ma/hey_guys_how_can_i_recreate_the_animation_in_the/"
            external
          >
            /r/css
          </CustomLink>
        </p>
        <h3 className="py-2 text-2xl">Tech Stack</h3>
        <p>Nextjs | React | Chord Commerce | EmotionJS | Contentful | Apollo</p>
        <div className="shadow-xl shadow-gray-400 rounded-md bg-gradient-to-r from-[#00009c] to-[#6495ED] text-white w-fit px-4 py-2 text mt-4">
          <Link href="https://itsaugust.co" target="_blank" rel="noreferrer nofollow">
            Demo
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default August;
