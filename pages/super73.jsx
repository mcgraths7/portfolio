import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Super73 = () => (
  <div className="w-full pt-24">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image src="/assets/projects/super73-landing.png" fill className="absolute z-1 max-w-7xl mx-auto" />
      <div className="absolute top-[70%] max-w-7xl w-full left-[50%] right-[50%] translate-x-[-45%] translate-y-[-50%] text-white z-20">
        <h2>Super73</h2>
        <h3>React | Nextjs | Chord Commerce</h3>
      </div>
    </div>
    <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
        <h3 className="py-2 text-2xl">Overview</h3>
        <div className="flex flex-col gap-2">
          <p>I had some downtime between August and Omorpho, so I helped out with a few features on Super73.</p>
          <p>
            My main contribution here was the sort and filter system on the Product Detail Page. I made a new option in
            Contentful to group products together using different parameters such as Color, Price, Bike Series, and
            Product Type
          </p>
        </div>
        <h3 className="py-2 text-2xl">Tech Stack</h3>
        <p>Gatsby | React | Chord Commerce | EmotionJS | Contentful</p>
        <div className="shadow-xl shadow-gray-400 rounded-md bg-gradient-to-r from-[#00009c] to-[#6495ED] text-white w-fit px-4 py-2 text mt-4">
          <Link href="https://super73.com" target="_blank" rel="noreferrer nofollow">
            Demo
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Super73;
