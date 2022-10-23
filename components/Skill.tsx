import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import sanity from '../public/images/react-native.png';

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className='  group relative flex cursor-pointer items-center'>
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='bg-gray-300 flex rounded-full items-center'
      >
        <Image
          src={sanity}
          alt={'sanity'}
          height={50}
          width={50}
          objectFit='cover'
          className='rounded-full border 
          border-gray-500 object-cover 
          xl:h-32 xl:w-32 filter 
          group-hover:opacity-70 flex-shrink-0
          transition duration-300 ease-in-out'
        />
      </motion.div>
    </div>
  );
};

export default Skill;
