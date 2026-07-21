import React from 'react'
import './Card.css'

function Card({image1,image2,image3,name,value}) {
  return (
    <div className='property'>
      <div className="images">
        <img src={image1} alt="Could not load" />
        <img src={image2} alt="Could not load" />
        <img src={image3} alt="Could not load" />
      </div>
      <span className="propname">{name}</span>
      <span className="propvalue">{value}</span>
    </div>
  )
}

export default Card
