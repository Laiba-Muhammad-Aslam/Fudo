import React from 'react'
import about from "../assets/about.png"

export default function About() {
  return (
     <div className='flex justify-center gap-20 items-center py-15 about'>
         <div className='aboutimgContainer flex justify-center items-center'>
                <img src={about} alt="" className='about'/>
            </div>
            <div className='p-6 py-8'>
                <h6 className='text-red-900 font-medium py-4'>WHAT THEY SAY</h6>
                <h3 className='text-3xl font-medium'>What Our Customers Say About Us</h3>
                <p className='font-medium text-1xl py-4'>“Fudo is the best. Besides the many and delicious meals, the service is also very good, especially in the very  fast delivey. I highly recommend Fudo  to you”.</p>
                {/* <button className=' bg-red-900 text-white px-3 py-3 rounded-lg font-medium my-2'>Get Started</button> */}
            </div>
           
        </div>
  )
}
