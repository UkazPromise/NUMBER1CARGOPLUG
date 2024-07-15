import React from 'react'
import Rates from '../pages/Rates'
import About from '../pages/About'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faShip, faTruck, faWarehouse } from '@fortawesome/free-solid-svg-icons'

const Body = () => {
  return (
    <>
        <div>
            <div className='lg:flex xl:flex my-2'>
                <div className='mr-5'>
                    <img src='deliveryguy.png' alt='delivery guy'/>
                </div>
                <div>
                    <p className='lg:text-5xl xl:text-5xl text-2xl  text-green-400 font-bold'>International Delivery</p>
                    <p className='lg:text-3xl text-2xl text-blue-500 font-bold'>at the best rate and the swiftest speed</p>
                    <span className='flex space-x-3'>
                        <button className='border rounded-xl bg-blue-400 w-24 h-8 font-semibold text-white my-4'>Get Rate</button>
                        <button className='border rounded-xl bg-red-400 text-xs w-[150px] lg:w-56 lg:h-8 font-semibold text-white my-4'>Create An Account</button>
                    </span>
                </div>
            </div>
        </div>
        <About/>
        <Rates/>
        <div>
            <p className='text-4xl font-bold text-purple-700 text-center py-2'>Our Services</p>
            <p className='text-2xl font-bold text-purple-500 text-center py-2'>NUMBER1CARGOPLUG Top Logistics services</p>
            <div className='lg:flex lg:space-x-4 mx-44'>
                <div>
                    <span className='flex border rounded-none bg-green-600 h-20'>
                    <FontAwesomeIcon icon={faPlane} className='py-8 pl-6 text-2xl'/>
                    <p className='py-6 px-2 font-bold text-white text-xl'>Air Freight</p>
                    </span>
                    <span>
                        <p className='text-center font-medium'>Air cargo is any property 
                            <br/>carried or to be carried in an 
                            <br/>aircraft. Air cargo comprises air 
                            <br/>freight, air express and airmail
                        </p>
                    </span>
                </div>
                <div>
                    <span className='flex border rounded-none bg-green-600 h-20'>
                    <FontAwesomeIcon icon={faShip} className='py-8 pl-6 text-2xl'/>
                    <p className='py-6 px-2 font-bold text-white text-xl '>Ocean Freight</p>
                    </span>
                    <span>
                        <p className='text-center font-medium'>Air cargo is any property 
                            <br/>carried or to be carried in an 
                            <br/>aircraft. Air cargo comprises air 
                            <br/>freight, air express and airmail
                        </p>
                    </span>
                </div>
                <div>
                    <span className='flex border rounded-none bg-green-600 h-20'>
                    <FontAwesomeIcon icon={faTruck} className='py-8 pl-6 text-2xl'/>
                    <p className='py-6 px-2 font-bold text-white text-xl'>Land Transport</p>
                    </span>
                    <span>
                        <p className='text-center font-medium'>Air cargo is any property 
                            <br/>carried or to be carried in an 
                            <br/>aircraft. Air cargo comprises air 
                            <br/>freight, air express and airmail
                        </p>
                    </span>
                </div>
                <div>
                    <span className='flex border rounded-none bg-green-600 h-20'>
                    <FontAwesomeIcon icon={faWarehouse} className='py-8 pl-6 text-2xl'/>
                    <p className='py-6 px-2 font-bold text-white text-xl'>Cargo storage</p>
                    </span>
                    <span>
                        <p className='text-center font-medium'>Air cargo is any property 
                            <br/>carried or to be carried in an 
                            <br/>aircraft. Air cargo comprises air 
                            <br/>freight, air express and airmail
                        </p>
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Body