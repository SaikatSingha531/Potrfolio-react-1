import React from 'react'
import {PROJECTS} from "../constants/index.js"
import { motion } from "motion/react"


function Projects() {
  return (
    <>
      <div className='border-b border-neutral-700 pb-4'>
        <motion.h2
        
        initial={{ opacity: 0 , y:-50 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.5}}

         className='my-20 text-center text-4xl '>Projects</motion.h2>
        <div>
            {PROJECTS.map((p , i)=>(
                <div key={i} className='mb-8 flex flex-wrap lg:justify-center '>
                    <motion.div

                      initial={{ opacity: 0 , x:-100 }}
                      whileInView={{ opacity:1, x:0 }}
                      transition={{ duration:0.5}}

                     className='w-full lg:w-1/4 cursor-help'>
                    <img src={p.image} alt={p.title} className='h-40 w-70 mb-6  rounded-md' />
                    </motion.div>

                    <motion.div 

                      initial={{ opacity: 0 , x:100 }}
                      whileInView={{ opacity:1, x:0 }}
                      transition={{ duration:0.5}}
                      
                    className='w-full max-w-xl lg:w-3/4'>
                     <h5 className='mb-2 font-semibold'>
                        {p.title}
                     </h5>
                       <h6 className='font-thin'>
                        {p.description}
                       </h6>
                       {p.technologies.map((tech , i)=>(
                        <span key={i} className='mr-2 rounded bg-black text-sm text-purple-800'>
                            {tech}
                        </span>
                       ))}
                    </motion.div>
                </div>
            ))}
        </div>
      </div>

    </>
  )
}

export default Projects
