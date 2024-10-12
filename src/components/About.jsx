import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles'
import {services} from '../constants'
import { fadeIn, textVariant } from '../utils/motion' 
import  {SectionWrapper}  from '../hoc';
import personal_image from '../assets/IMG.jpg'


const About = () => {
  return (
    <>

      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("","",0.1,1)} className='flex flex-col lg:flex-row '>
        <p
        className='mt-4 text-secondary text-[17px] max-w-xl leading-[30px]'
        >
        I am a skilled and passionate freelance web developer with expertise in building full-stack web applications using <strong >React</strong> and <strong>Django</strong>. 
        With a strong foundation in computer science, I possess the knowledge and skills necessary to create dynamic and engaging online experiences.
        My experience includes developing responsive, user-friendly interfaces with <strong >React</strong> and efficient, robust back-end systems using <strong>Django</strong>. 
        I am committed to staying current with the latest technologies and best practices to deliver top-notch solutions for my clients.
        </p>

        <div className='flex flex-wrap items-center justify-center w-full mt-10 lg:mt-0 lg:ml-20'>
          <img className='rounded-full ' src={personal_image} />
        </div>
      </motion.div>
    </>
  )
}

export  default SectionWrapper(About, "about")