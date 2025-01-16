import React from 'react'
import '../App.css'

function Card(props) {
  return (
    <div className='card'>
        <div className="cardimg">
            <img src={props.img} alt={props.alt} />
        </div>
        <div className="card-content pt-5">
            <h3 className='text-2xl font-medium pb-1'>{props.heading}</h3>
            <p className='font-medium text-wrap text-gray-600'>{props.desc}</p>
        </div>
    </div>
  )
}

export default Card