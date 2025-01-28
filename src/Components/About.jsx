import React from 'react'
import about from "../assets/Photos/about.png"
import {ABOUT_TEXT} from "../constants/index.js"
import { motion } from "motion/react"


const container = (delay) =>({
  hidden:{x:-100, opacity:0},
  visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5 , delay:delay}
  }
});

function About() {
  return (
    <div className='border-b border-neutral-700 pb-4'>
      <h2 className='my-20 text-center text-4xl'>About 
        <motion.span 

        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay:0.3}}

        className='text-white font-thin ml-2'>{`"Me"`}</motion.span>
      </h2>

      <div className='flex flex-wrap'>
        <motion.div

        initial={{ opacity: 0 , x:-100 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.5}}

         className='w-full lg:w-1/2 lg:p-8'>
          <div className="flex items-center justify-center">
            <img src={about}alt="About" className='w-70 h-70 object-cover rounded-2xl'/>
          </div>
        </motion.div>

          <motion.div

              initial={{ opacity: 0 , x:100 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{ duration:0.5}}

           className='w-full lg:w-1/2 '>
            <div className='flex justify-center lg:justify-start'>
              <p className='my-2 max-w-xl py-6 '> 
                {ABOUT_TEXT}
              </p>
            </div>
          </motion.div>

      </div>
    </div>
  )
}

export default About
