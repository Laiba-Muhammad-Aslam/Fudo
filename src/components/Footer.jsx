import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
  return (
    <div className='flex footer p-10'>
        <div>
            <p className='text-gray-600'>Our job is to filling your tummy with delicious food and  with fast and free delivery.</p>
            <div className='flex gap-4 py-5'>
            <FaInstagram className='text-red-900' />
            <FaFacebook className='text-red-900'/>
            <IoLogoTwitter className='text-red-900' />
            </div>
        </div>
        <div>
            <ul>
                <li className='font-medium pb-3'>About</li>
                <li className='text-gray-600'>About Us</li>
                <li className='text-gray-600'>Features</li>
                <li className='text-gray-600'>News</li>
                <li className='text-gray-600'>Menu</li>
            </ul>
        </div>
        <div>
        <ul>
                <li className='font-medium pb-3'>Company</li>
                <li className='text-gray-600'>Why Fudo?</li>
                <li className='text-gray-600'>Partner with Us</li>
                <li className='text-gray-600'>FAQ</li>
                <li className='text-gray-600'>Blog</li>
            </ul>
        </div>
        <div>
        <ul>
                <li className='font-medium pb-3'>Support</li>
                <li className='text-gray-600'>Account</li>
                <li className='text-gray-600'>Support Center</li>
                <li className='text-gray-600'>Feedback</li>
                <li className='text-gray-600'>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer