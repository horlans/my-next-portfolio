import Image from 'next/image';
import React from 'react';
import sanity from '../public/images/nextjs.png';

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <div
      className='h-screen relative overflow-hidden flex-col sm:flex-row z-0
    max-w-full flex justify-evenly items-center '
    >
      <div className='absolute top-24 text-2xl tracking-[20px] text-gray-400 font-bold mb-4'>
        <h3 className='uppercase'>projects</h3>
      </div>
      <div
        className='relative 
      w-full flex
       overflow-x-scroll 
       overflow-y-hidden snap-x 
      snap-mandatory z-20 --scrollbar scrollbar-thin scrollbar-track-gray-400/20
       scrollbar-thumb-slate-400'
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className='w-screen  flex-shrink-0 
            snap-center h-screen flex 
            flex-col justify-center 
            items-center space-y-5 p-20 md:p-40'
          >
            <Image
              src={sanity}
              alt={'sanity'}
              height={100}
              width={200}
              objectFit='cover'
              className='flex-shrink-0'
            />
            <div className='space-y-6 px-0 md:px-10 max-w-6xl '>
              <h4 className='text-3xl text-center underline uppercase'>
                project title
              </h4>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
                placeat, totam neque inventore, illum accusamus distinctio quod
                consectetur iure, quasi natus fuga. Veniam, repellendus aliquid.
                Facere consequuntur assumenda quos optio?
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute w-full top-[40%] bg-[#FA7EEE]/5 left-0 h-[200px] -skew-y-12' />
    </div>
  );
};

export default Projects;
