import React from 'react'
import {motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

import { testimonials } from '../constants'
import { styles } from '../styles'



export const FeedbackCard = ({index, testimonial , name, designation, company, image}) => {
  return (
    <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75, "easeOut")}
    className='bg-black-200  p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='mt-1'>
        <p className='text-white tracking-wide font-semibold text-[18px]'>
          {testimonial}
        </p>
      </div>
      <div className='flex items-center justify-between gap-1 mt-7'>
        <div className='flex flex-col flex-1'>
          <p className=' text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>


          <img 
          src={image}
          alt={`feedback-by-${name}`}
          className='object-contain w-10 h-10 mt-2 rounded-full'
          />

        </div>
      </div>


    </motion.div>
  )
}


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px] '>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div
        variants={textVariant()}
        >
          <p className={styles.sectionSubText}>
            what other say
          </p>
          <h2 className={styles.sectionHeadText}>
            testimonails.
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 `}>
        {testimonials.map((testimonial, index)=>(
          <FeedbackCard
          key={testimonial.name}
          index={index}
          {...testimonial}
          />
        ))}

      </div>
    </div>
  ) 
}

export default SectionWrapper(Feedbacks, "feedback")