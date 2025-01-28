import React from 'react'
import about from "../assets/Photos/about.png"
import {ABOUT_TEXT} from "../constants/index.js"


function About() {
  return (
    <div className='border-b border-neutral-700 pb-4'>
      <h2 className='my-20 text-center text-4xl'>About 
        <span className='text-white font-thin ml-2'>{`"Me"`}</span>
      </h2>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className="flex items-center justify-center">
            <img src={about}alt="About" className='w-70 h-70 object-cover rounded-2xl'/>
          </div>
        </div>
          <div className='w-full lg:w-1/2 '>
            <div className='flex justify-center lg:justify-start'>
              <p className='my-2 max-w-xl py-6 '> 
                {ABOUT_TEXT}
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
