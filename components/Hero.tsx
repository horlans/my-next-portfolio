import React from 'react';
import Image from 'next/image';
import myPic from '../public/assets/pic1.jpg';
import BackgroundCircles from './BackgroundCircles';
import { useTypewriter } from 'react-simple-typewriter';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ['Hello there'],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div className='p-5 max-w-6xl mx-auto text-gray-400 h-screen'>
      <div className='flex sm:flex-row h-screen  items-center justify-center space-y-8 overflow-hidden w-full flex-col-reverse sm:text-4'>
        <div className=' flex flex-col  w-1/2 items-center justify-center mx-auto h-full '>
          <span className='p-4  '>
            <h1>{text},</h1>

            <h1 className='sm:text-5xl font-bold '>I am Olarewaju Samuel</h1>

            <h1 className='tracking-[18px] pt-4 text-[12px]'>
              {' '}
              A Full-stack Developer
            </h1>
          </span>
        </div>
        <div className=' relative h-screen flex flex-col items-center w-1/2 justify-center overflow-hidden'>
          <div className='sm:flex hidden'>
            <BackgroundCircles />
          </div>
          <Image
            src={myPic}
            alt='pic'
            width='200px'
            height='200px'
            className='relative  mx-auto rounded-full  object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
