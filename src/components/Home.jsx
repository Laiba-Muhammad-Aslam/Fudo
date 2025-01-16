import React from 'react'
import home from "../assets/home.png"
import '../App.css'
import Footer from './Footer'

export default function Home() {
  return (
    <div className='flex justify-center gap-20 items-center py-20'>
        <div>
            <h1 className='text-6xl font-medium'>Be The Fastest <br/> In Delivering Your <br/> <span className='text-red-900'>Food</span></h1>
            <p className='font-medium text-1xl py-4'>Our job is to filling your tummy with delicious food <br/> and  with fast and free delivery</p>
            <button className=' bg-red-900 text-white px-3 py-2 rounded-lg font-medium'>Get Started</button>
        </div>
        <div className='homeimgContainer bg-red-900 flex justify-center items-center'>
            <img src={home} alt="" className='homeimg'/>
        </div>
    </div>
  )
}
