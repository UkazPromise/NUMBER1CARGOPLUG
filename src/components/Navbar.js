import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-gray-800 text-white'>
      <div className='flex justify-between items-center mx-4 h-16'>
        <span className='flex flex-col items-center'>
          <p className='font-extrabold text-xl text-blue-500'>NUMBER1CARGOPLUG</p>
          <ul className='hidden md:flex h-6 space-x-4 ml-4'>
            <li className='text-xs font-bold'>Cargo</li>
            <li className='text-xs font-bold'>Logistics</li>
          </ul>
        </span>
        <div className='hidden md:flex space-x-4'>
          <ul className='flex space-x-4'>
            <li className='py-4 text-lg font-bold text-blue-300 hover:text-white hover:bg-blue-700 hover:h-16'>Home</li>
            <li className='py-4 text-lg font-bold text-blue-300 hover:text-white hover:bg-blue-700 hover:h-16'>About</li>
            <li className='py-4 text-lg font-bold text-blue-300 hover:text-white hover:bg-blue-700 hover:h-16'>Contact</li>
          </ul>
          <button className='border rounded-xl bg-green-700 w-24 h-8 font-semibold text-white my-4'>Login</button>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className='text-xl text-blue-500' />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <ul className='flex flex-col items-center space-y-4'>
            <li className='py-4 text-lg font-bold text-blue-300 hover:text-white hover:bg-blue-700 hover:h-16'>Home</li>
            <li className='py-4 text-lg font-bold text-blue-300 hover:text-white hover:bg-blue-700 hover:h-16'>About</li>
            <li className='py-4 text-lg font-bold text-blue-300 hover:text-white hover:bg-blue-700 hover:h-16'>Contact</li>
            <button className='border rounded-xl bg-green-700 w-24 h-8 font-semibold text-white my-4'>Login</button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
