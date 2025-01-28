import React from 'react'
import {HERO_CONTENT} from "../constants/index.js"
import dp from "../assets/Photos/dp.jpg"

function Hero() {
  return (
    <>
    <div className='border-b border-neutral-700 pb-4 lg:mb-35 '>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-5xl font-thin tracking-tight lg:mt-10 lg:text-7xl'>Saikat Singha</h1>
                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent'>Frontend Developer</span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tight '>{HERO_CONTENT}</p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8 '> 
                <div className='flex justify-center'>
                    <img src={dp} alt="Main img" className="w-90 h-90 object-cover rounded-2xl" />

                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Hero
