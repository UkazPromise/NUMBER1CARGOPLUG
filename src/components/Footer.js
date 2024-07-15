import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='bg-blue-950 h-full lg:h-72 mt-14'>
      <div className='lg:mx-40 lg:flex lg:space-x-20'>
        <div className='space-y-3 py-12'>
          <p className='text-2xl font-extrabold text-blue-400'>Get In Touch</p>
          <p className='text-white'>
          <FontAwesomeIcon icon={faLocationDot} className='text-white'/>13 Femi Fagbemi Street, 
          <br/>Shasha Akowonjo, Alimosho, Lagos.
          </p>
          <p className='text-white'><FontAwesomeIcon icon={faPhone} className='text-white'/>+234 903 438 4872</p>
          <p className='text-white'><FontAwesomeIcon icon={faEnvelope} className='text-white'/>info@triunecircle.com</p>
          <span className='flex space-x-2'>
            <FontAwesomeIcon icon={faXTwitter} className='text-white border rounded-full p-3'/>
            <FontAwesomeIcon icon={faFacebookF} className='text-white border rounded-full p-3'/>
            <FontAwesomeIcon icon={faLinkedinIn} className='text-white border rounded-full p-3'/>
            <FontAwesomeIcon icon={faInstagram} className='text-white border rounded-full p-3'/>
          </span>
        </div>
        <span className='py-12'>
          <p className='text-2xl font-extrabold text-blue-400'>Quick Link</p>
          <ul>
            <li className='text-white'><FontAwesomeIcon icon={faChevronRight} className='text-white'/>Home</li>
            <li className='text-white'><FontAwesomeIcon icon={faChevronRight} className='text-white'/>About Us</li>
            <li className='text-white'><FontAwesomeIcon icon={faChevronRight} className='text-white'/>Contact us</li>
          </ul>
        </span>
        <span className='py-12'>
          <p className='text-2xl font-extrabold text-blue-400'>Create Account</p>
          <p className='text-white'>You can create an account with us</p>
          <button className='text-white font-semibold border bg-blue-400 rounded h-8 w-16'>Sign Up</button>
        </span>
      </div>
    </div>
  )
}

export default Footer