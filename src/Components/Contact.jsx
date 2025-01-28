import React from 'react'
import {CONTACT} from "../constants/index.js"


function Contact() {
  return (
    <>
      <div className="border-b border-neutral-700 pb-20">
        <h2 className='my-10 text-center text-4xl'>
            Get In Touch 
        </h2>
        <div className='text-center tracking-tighter'>
            <p className='my-2 '>{CONTACT.address}</p>
            <p className='my-2 '>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>{CONTACT.email}</a>

        </div>
      </div>
    </>
  )
}

export default Contact
