import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { motion } from "motion/react"



const icons =(duration)=>({
  initial:{y:-10},
  animate :{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType:"reverse"
    }
  }
})

function Technolologies() {
  return (
    <>
      <div
       className='border-b border-neutral-700 pb-24'>
        <motion.h2
        
        initial={{ opacity: 0 , y:-50 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.5}}

         className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div 

            variants={icons(2.5)}
            initial="initial"
            animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <FaHtml5 className='text-5xl text-[#FF6B08]'/>
            </motion.div>

            <motion.div

             variants={icons(3)}
             initial="initial"
             animate="animate"

             className='rounded-2xl border-4 border-neutral-800 p-4 '>
               <FaCss3Alt className='text-5xl text-[#2D54FD]'/>
            </motion.div> 

            <motion.div 

             variants={icons(3.5)}
             initial="initial"
             animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4 '>
               <RiTailwindCssFill className='text-5xl text-[#10BBD1]'/>
            </motion.div> 

            <motion.div

             variants={icons(4)}
             initial="initial"
             animate="animate"

             className='rounded-2xl border-4 border-neutral-800 p-4 '>
               <FaBootstrap className='text-5xl text-[#7C18F8]'/>
            </motion.div>

            <motion.div

             variants={icons(4.5)}
             initial="initial"
             animate="animate"

             className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <RiJavascriptFill  className='text-5xl text-[#F8DD43]'/>
            </motion.div>


            <motion.div

             variants={icons(5)}
             initial="initial"
             animate="animate"

             className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <RiReactjsLine className='text-5xl text-cyan-400'/>
            </motion.div>

        </motion.div>
      </div>
    </>
  )
}

export default Technolologies
