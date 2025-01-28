import React from 'react'
import {CONTACT} from "../constants/index.js"
import { motion } from "motion/react"


function Contact() {
  return (
    <>
      <div className="border-b border-neutral-700 pb-20">
        <motion.h2
        initial={{ opacity: 0 , y:-50 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.5}}
         className='my-10 text-center text-4xl'>
            Get In Touch 
        </motion.h2>
        <motion.div
        initial={{ opacity: 0 , y:50 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.5}}
         className='text-center tracking-tighter'>
            <p className='my-2 '>{CONTACT.address}</p>
            <p className='my-2 '>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>{CONTACT.email}</a>

        </motion.div>
      </div>
    </>
  )
}

export default Contact
