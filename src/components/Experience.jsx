import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, slideIn } from "../utils/motion";
import { web } from '../assets'

import Tech from "./Tech";
import { useState, useEffect } from "react";

export const fadeInForExpCard1 = (direction, type, delay, duration, index) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x:-222,
      y: 0, 
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const fadeInForExpCard2 = (direction, type, delay, duration, index) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x:222,
      y: 0, 
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const fadeInForExpCardMobile = (direction, type, delay, duration, index) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x:0,
      y: 0, 
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const lineAnimation = () => {
  return {
    hidden: {
      scaleY: 0,
    },
    show: {
      scaleY: 1,
      transition: {
        duration: 1, // Duration of 5 seconds
        ease: 'easeIn', // Easing function
      },
    },
  };
};

const InfoBlock = () => {
  return (
    <div>
      <h2 className="m-4 text-2xl text-[#fdfdfd] font-semibold">
        Bachelor Degree LOL
      </h2>
      <h4 className="text-lg ml-4 mb-4 text-[#817c9a]">
        FST Tanger
      </h4>
      <ul className="ml-6 mb-4 text-[#a09eaa]">
        <li className="my-1 ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde, nobis minima voluptates neque pariatur perferendis</li>
        <li className="my-1 ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minima nostrum facilis illum odit excepturi, ex!</li>
        <li className="my-1 ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum voluptate dignissimos nisi officia deser</li>
      </ul>
    </div>
  );
};

const ExperienceCardPc = ({ experience, index }) => {
  return (
    <motion.div
      variants={
        index % 2 === 1
          ? fadeInForExpCard1("left", "tween", index / 10, 1, "easeIn", index)
          : fadeInForExpCard2("right", "tween", index / 10, 1, "easeIn", index)
      }
      className="flex flex-row items-center"
    >
      {index % 2 === 1 && (
        <div className="h-full bg-[#1d1836] shadow-lg border-b-4 border-white rounded-md mr-14 w-96">
          <InfoBlock />
        </div>
      )}

      <motion.div className="relative flex items-center justify-center w-20 h-20 bg-white border-solid rounded-full">
        <img className="w-[70px] h-[70px] rounded-full shadow-inner" src={web} alt="Experience Logo" />
      </motion.div>

      {index % 2 === 0 && (
        <div className="h-full bg-[#1d1836] border-b-4 border-white shadow-lg rounded-md ml-14 w-96">
          <InfoBlock />
        </div>
      )}
    </motion.div>
  );
};

const ExperienceCardMobile = ({ experience, index }) => {
  return (
    <motion.div
      variants={
        fadeInForExpCardMobile("left", "tween", index / 10, 1, "easeIn", index)
      }
      className="flex flex-row-reverse items-center justify-between w-full my-4"
    >
        <div className="h-full bg-[#1d1836] w-full shadow-lg border-b-4 border-white rounded-md">
          <InfoBlock />
        </div>

      <motion.div className="relative flex items-center justify-center w-20 h-20 bg-white border-solid rounded-full">
        <img className="w-16 h-16 rounded-full shadow-inner " src={web} alt="Experience Logo" />
      </motion.div>
    </motion.div>
  );
};

 const ExperienceCardPcVersion = () => {
  return(
    
    <div className='relative flex items-center justify-center h-full min-h-screen'>
    {/* Vertical Line */}
    <motion.div

      variants={lineAnimation()} 
      className="absolute w-1 h-[80%] transform -translate-x-1/2 bg-white left-10 lg:left-1/2"
    />
    
    {/* Timeline Cards */}
    <div className="relative z-10 flex flex-col items-center justify-around w-full">
      {experiences.map((experience, index) => (
        <ExperienceCardPc
          key={`experience-${index}`}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  </div>
  )
 }

 const ExperienceCardMobileVersion = () => {
  return(
    
    <div className='relative flex items-center justify-start w-full h-full min-h-screen'>
    {/* Vertical Line */}
    <motion.div

      variants={lineAnimation()} 
      className=" absolute w-1  h-[80%] transform -translate-x-1/2 bg-white left-10 "
    />
    
    {/* Timeline Cards */}
    <div className="z-10 flex flex-col items-end justify-end w-full ">
      {experiences.map((experience, index) => (
        <ExperienceCardMobile
          key={`experience-${index}`}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  </div>
  )
 }

const Experience = () => {

  const [width, setWidth] = useState(window.innerWidth)
  // this shit doesn;t work you should fix it 
  useEffect(()=>{
    window.addEventListener("resize", setWidth(window.innerWidth))
    return () => {
      window.addEventListener("resize", setWidth(window.innerWidth))
    }
  },[])
  const isMobile = width <= 768 ? true : false 


  return (
    <div className="">
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Career.
        </h2>
      </motion.div>

    {isMobile ? 
    <ExperienceCardMobileVersion />
      :
    <ExperienceCardPcVersion />
  }
    </div>
  );
};

export default SectionWrapper(Experience, "work");