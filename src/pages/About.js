import React from 'react'

const About = () => {
  return (
    <div className='bg-slate-200 my-4'>
        <div className='mx-28'>
            <p className='font-extrabold text-4xl text-purple-700 py-2 text-center'>ABOUT US</p>
            <p className='font-extrabold text-2xl text-slate-600 py-2 text-center'>Trusted & Faster Logistic Service Provider</p>
            <div className='flex flex-col space-y-3'>
                <span className='flex space-x-4'>
                    <img src='logistics.png' alt='logistics warehouse' className='w-[750px] h-80'/>
                    <p className='text-medium text-slate-500'>NUMBER1CARGOPLUG Logistics is the best logistics  
                        <br/>services solutions provider that fit your needs. With our conducive and secured 
                        <br/>warehouse be rest assured that your good for delivery will reach the right destination                        
                        <br/> with no dent that is an assurance from NUMBER1CARGOPLUG .
                    </p>
                </span>
                <span className='flex space-x-4'>
                    <img src='truck delivery.png' alt='delivery guy' className='w-[750px] h-80'/>
                    <p className='text-medium text-slate-500'>NUMBER1CARGOPLUG Logistics is the best logistics  
                        <br/>services solutions provider that fit your needs. Request a pickup or delivery and
                        <br/> get it sorted in the fastest way possible.
                    </p>
                </span>
            </div>
            <div>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default About