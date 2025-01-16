import React from 'react'
import noPage from "../assets/404.avif"

function Nopage() {
  return (
    <div className='flex items-center justify-center nopage'>
        <img src={noPage} alt="404Page" />
    </div>
  )
}

export default Nopage