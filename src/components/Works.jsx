import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45, scale: 1, speed:450
      }} className="bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full">
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-fit rounded-2x1'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open (source_code_link, "_blank")} className='black-gradient rounded-full flex justify-center items-center cursor-pointer w-10 h-10'>
              <img src={github} alt="github" className='w-1/2 h-1/2 object contain'  />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => 
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}     
            </p>
          )}
        </div>
        <div>
          <button onClick={() => window.open (live_demo, "_blank")} className='mt-5 w-full py-2 bg-primary text-white rounded-2x1'>📽️ View Demo</button>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 max-w-3x1 leading-[30px] text-secondary text-[17px]'>
          Below you can find the projects I have worked on. Over the course of my career as a developer, I have worked on a variety of projects, ranging from web development to machine learning. I am always looking for new projects to work on, so if you have a project in mind, feel free to contact me.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => 

          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project} />
        )}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");