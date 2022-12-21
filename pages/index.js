import React from 'react';
import Head from 'next/head';
import { Barlow } from '@next/font/google';

import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const barlow = Barlow({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <Head>
        <title>Steven McGrath | Frontend Developer</title>
        <meta name="description" content="Steven McGrath is a Frontend Developer specializing in React + Nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={barlow.className}>
        <main className="relative">
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}
