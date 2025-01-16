import React from 'react'
import Card from './Card'
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import '../App.css'

export default function Services() {
  return (
   <div className='flex justify-center gap-10 items-center py-15 flex-col services'>
    <div className="servicesHeader">
    <h6 className='text-red-900 font-medium py-4 text-center'>WHAT WE SERVE</h6>
    <h3 className='text-3xl font-medium text-center'>Your Favorite Food Delivery Partner</h3>
    </div>

    <div className="card-container flex justify-between">
      {/* first Card  */}
      <Card img={img1} alt="easy to order" heading="Easy To Order" desc="You only need a few steps in ordering food"/>

      {/* second card  */}
      <Card img={img2} alt="Fastest Delivery" heading="Fastest Delivery" desc="Delivery that is always ontime even faster"/>

      {/* Third Card  */}
      <Card img={img3} alt="Best Quality" heading="Best Quality" desc="Not only fast for us quality is also number one"/>
    </div>
   </div>
  )
}
