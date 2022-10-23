import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact-me';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div
      className='text-gray-300 bg-[rgb(29,29,29)] h-screen snap-mandatory space-y-6 snap-y 
    overflow-y-scroll 
    overflow-x-hidden z-0 
    mx-auto justify-center --scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-slate-400 scrollbar-thin'
    >
      <Head>
        <title>My Portfolio</title>
      </Head>

      {/* header */}
      <Header />
      {/* hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      {/* about */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* experience   */}
      {/* skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* contact me */}
      <section id='contact-me' className='snap-start'>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
