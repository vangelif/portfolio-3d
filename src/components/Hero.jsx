
import { styles } from "../styles"
import { motion } from 'framer-motion'
import { socialIcons } from "../constants"
// import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-120 h-80 violet-gradient' />
        </div>
        <div> 
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#915eff]'>Vangelis</span></h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            I build projects, using Ruby on Rails &<br className='sm:block hidden' /> React - Redux user interfaces, web applications and features
          </p>
          <p className={`${styles.heroSubText} mt-5 text-white-100`}>
            I am also honing my skills in AWS, MERN Stack & Three.js
            </p>
          <div className='p-2 flex gap-3 mt-5'>
            {socialIcons.map((icon, index) => (
              <a href={icon.link} target="_blank" rel="noreferrer" key={index}>
                <img src={icon.icon} alt={icon.name} className='w-[35px] h-[35px] object-contain' />
              </a>
            ))}
          </div>
        </div>

      </div>
      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#projects'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.25,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a> 

      </div>

    </section>
  )
}

export default Hero