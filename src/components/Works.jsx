import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import live_demo_icon from '../assets/live_demo.svg'

import { fadeIn, textVariant } from '../utils/motion'





export const ProjectCard = ({index, name, description, tags, image, source_code_link, live_demo_link}) => {
  return (
<div class="flex justify-center hover:cursor-pointer w-full lg:w-[47%] h-[700px] items-center">
  <div class="relative group  shadow-lg rounded-lg overflow-hidden">
  <motion.img
    className='justify-between w-full h-[700px] transition-all duration-300 rounded-lg opacity-0 -bottom-10 group-hover:bottom-0 bg-black/20 group-hover:opacity-100 hover:cursor-pointer '
    variants={fadeIn("up", "spring", index * 0.5 , 0.75)}
    src={image}
    />

    <div class="absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col justify-end items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 class="text-xl m-4 font-semibold">More Info</h3>
      <p class=" text-lg leading-6 mb-8 ">{description}</p>

    <div className='flex flex-row items-end justify-end w-full gap-4 '>
      <a href={source_code_link} target="_blank">
      <img  className='w-10 h-10 ' src={github} />
      </a>
      <a href={live_demo_link} target="_blank">
      <img  className='w-10 h-10 ' src={live_demo_icon} />
      </a>    </div>
    
    </div>
  </div>
</div>
  )
}



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Projects
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          here
        </h2>
      </motion.div>
      <div className='flex w-full'>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3cl leading-[30px]'
        >
        Explore  diverse collection of creations crafted with passion and expertise.
        Each project embodies our commitment to innovation, quality, and creativity.
        From stunning designs to cutting-edge solutions, we take pride in delivering excellence.
        </motion.p>

      </div>

      <div className='flex flex-col justify-between mt-20 lg:flex-row lg:flex-none lg:flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
          key={`project${index}`}
          index={index}
          {...project}
              />       
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work')