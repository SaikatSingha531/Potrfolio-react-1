import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-3 text-white '>
        <div className=' flex flex-shrink-0 items-center select-none cursor-pointer  '>
           <span className='text-4xl lg:text-6xl font-semibold '> {`</>`} </span>
        </div>
        
        <div className='flex m-8 items-center justify-center gap-4 text-2xl lg:text-4xl cursor-pointer '>
            <FaGithub/>
            <FaLinkedin/>
            <FiInstagram/>
        </div>

    </nav>
  )
}

export default Navbar
