import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles'

const Tech = () => {
  return (
    <div className='relative z-0 mt-48 overflow-hidden whitespace-nowrap'>
      <h1 className={`${styles.sectionHeadText} mb-10 text-center`}>
        My Skills .
      </h1>
      {/* Outer container to hold the sliding content */}
      <div className='flex animate-slide'>
        {/* Inner content duplicated for seamless scrolling */}
        <div className='flex gap-10'>
          {technologies.map((technologie) => (
            <div key={technologie.name} className='flex flex-col items-center'>
              <img className='w-14 h-14' src={technologie.icon} alt={technologie.name} />
              <span className='text-[#f3f3f3]'>{technologie.name}</span>
            </div>
          ))}
          {technologies.map((technologie) => (
            <div key={`${technologie.name}-duplicate`} className='flex flex-col items-center'>
              <img className='w-14 h-14' src={technologie.icon} alt={technologie.name} />
              <span className='text-[#f3f3f3]'>{technologie.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(Tech, 'tech');
