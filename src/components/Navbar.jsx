import React from 'react'
import logo from "../assets/logo.png"
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

function Navbar() {
  return (
    <div className='flex justify-between items-center py-2 px-7'>
        <div><img src={logo} alt="logo"/></div>
        <div>
            <ul className='flex justify-center items-center gap-8 font-medium'>
                <li className='text-red-900'>Why Fudo?</li>
                <li>Abous Us</li>
                <li>Services</li>
                {/* <li>Menu</li> */}
                {/* <li>Contact</li> */}
            </ul>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <button className='text-xl'><IoSearch /></button>
            <button className='text-xl'><FaShoppingCart /></button>
            <button className='flex items-center gap-1 bg-red-900 text-white px-3 py-2 rounded-lg font-medium'><MdLogin />Login</button>
        </div>
    </div>
  )
}

export default Navbar