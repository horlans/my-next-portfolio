import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
type Props = {};

const Header = (props: Props) => {
  return (
    <header className='sticky top-0  border-b-2 border-gray-500 max-w-5xl mx-auto p-5 z-20'>
      <div className=' flex flex-row justify-between items-center'>
        {/* logo */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0.2,
            scale: 0.6,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.4 }}
          className='flex flex-row items-center w-2/5 justify-start'
        >
          <h1 className='text-gray-500 font-bold uppercase text-4 tracking-[16px]'>
            smod
          </h1>
          {/* <SocialIcon network="email" bgColor="gray" fgColor="transparent" /> */}
        </motion.div>
        <div className='hidden md:flex  w-full text-gray-500'>
          <ul className='flex flex-row justify-between w-4/5  mx-auto ml-1xl'>
            <Link href='#about'>
              <li className='uppercase text-sm cursor-pointer hover:text-black ml-4'>
                About
              </li>
            </Link>
            <Link href={'#projects'}>
              <li className='uppercase text-sm cursor-pointer hover:text-black ml-4'>
                portfolio
              </li>
            </Link>
            <Link href={'#skills'}>
              <li className='uppercase text-sm cursor-pointer hover:text-black ml-4'>
                stacks
              </li>
            </Link>
            <Link href={'#contact-me'}>
              <li className='uppercase text-sm cursor-pointer hover:text-black ml-4'>
                contact me
              </li>
            </Link>
          </ul>
        </div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.4 }}
          className='hidden md:flex flex-row items-center justify-around w-2/6 mx-auto'
        >
          {/* social icons */}

          <SocialIcon
            url='https://facebook.com'
            bgColor='gray'
            fgColor='transparent'
            style={{ width: 24, height: 24 }}
          />
          <SocialIcon
            url='https://linkedin.com'
            bgColor='gray'
            fgColor='transparent'
            style={{ width: 24, height: 24 }}
          />
          <SocialIcon
            url='https://twitter.com'
            bgColor='gray'
            fgColor='transparent'
            style={{ width: 24, height: 24 }}
          />
          <SocialIcon
            url='https://github.com'
            bgColor='gray'
            fgColor='transparent'
            style={{ width: 24, height: 24 }}
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
