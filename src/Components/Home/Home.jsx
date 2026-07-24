import React, { useContext } from 'react'
import { useState } from 'react'
import { data} from '../../Context/CardContext.jsx'
import './Home.css'
import Card from '../Card/Card.jsx'


function Home() {
  
  const {cards}=useContext(data)

  return (
    <div className="home">
      {cards.map((card) => (
    <Card
      key={card.id}
      image1={card.image1}
      image2={card.image2}
      image3={card.image3}
      name={card.name}
      value={card.value}
    / >
  ))}
    </div>
  )
}

export default Home
