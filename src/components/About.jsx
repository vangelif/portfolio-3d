import React from 'react'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Hello, Vangelis here! I am an ex-Maritime professional and Mandarin teacher & translator turned to software development. 
      Currently, I am completing coursework at Microverse, a remote software dev organization where we are pair-programming and we are assigned real-world projects.
      In my capstone project we used HTML/CSS and JavaScript and built a Chinese Culture web course that I am truly proud of. I combined my love for the Mandarin language alongside my other love for coding and came up with that jewel!
      At the the age of 27 I was assigned to set up an office in Singapore and at the age of 32 I was head of Procurement in another firm, but my passion for languages be it Mandarin, Spanish, JavaScript or Ruby make me the ideal candidate that any prudent hiring manager would like to interview. 

      Front-End: JavaScript, React, Redux, jQuery, HTML5, CSS3
      Back-End: Ruby, Rails, MySQL
      Tools & Methods: Git, Github, TDD, Chrome Dev Tools
      Professional: Remote Pair-Programming, Mentoring, Planning
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")