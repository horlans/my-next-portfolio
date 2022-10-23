import React from 'react';
import Skill from './Skill';

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className='px-10 relative h-screen flex flex-col justify-center items-center  uppercase'>
      <div className='absolute top-24 text-2xl tracking-[20px] text-gray-400 font-bold mb-4'>
        <h3>skills</h3>
      </div>
      <div className='grid grid-cols-4 gap-4 md:w-1/4 justify-center items-center'>
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={false} />
        <Skill directionLeft={true} />
        <Skill directionLeft={false} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={false} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
      </div>
    </div>
  );
};

export default Skills;
