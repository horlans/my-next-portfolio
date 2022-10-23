import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import myPic from '../public/assets/me.png';

type Props = {};

const About = (props: Props) => {
  return (
    <div className='relative mt-52 h-screen text-center flex flex-col md:text-left   max-w-7xl px-10 justify-center mx-auto items-center pt-10 space-y-5'>
      <div className='absolute top-24'>
        <h3 className=' uppercase tracking-[16px] text-2xl text-gray-300'>
          About
        </h3>
      </div>
      <div className='w-full flex flex-col sm:flex-row items-center justify-center space-y-5'>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.1,
          }}
          viewport={{ once: true }}
          className='w-[200px]  h-[200px] 
        md:mb-1 mb-0
        rounded md:rounded  
        md:w-[300px] md:h-[350px] '
        >
          <Image
            src={myPic}
            alt={'pic'}
            width={600}
            height={600}
            className='flex-shrink-0 
          object-cover rounded-full sm:rounded-md'
          />
        </motion.div>
        <div className='w-full h-full text-justify p-6 sm:w-2/3 text-gray-400'>
          <p>
            I am a professional frontend and backend developer with over five
            year experience in Python, React, Angular and React native mobile
            application development. I am currently a software and hardware
            developer with Xtremechanics Academy. I am open to full remote
            software jobs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
