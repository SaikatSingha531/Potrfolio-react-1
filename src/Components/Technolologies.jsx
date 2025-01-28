import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

function Technolologies() {
  return (
    <>
      <div className='border-b border-neutral-700 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>

            <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <FaHtml5 className='text-5xl text-[#FF6B08]'/>
            </div>

            <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
               <FaCss3Alt className='text-5xl text-[#2D54FD]'/>
            </div> 

            <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
               <RiTailwindCssFill className='text-5xl text-[#10BBD1]'/>
            </div> 

            <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
               <FaBootstrap className='text-5xl text-[#7C18F8]'/>
            </div>

            <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <RiJavascriptFill  className='text-5xl text-[#F8DD43]'/>
            </div>


            <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <RiReactjsLine className='text-5xl text-cyan-400'/>
            </div>

        </div>
      </div>
    </>
  )
}

export default Technolologies
