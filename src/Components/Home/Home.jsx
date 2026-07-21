import React from 'react'
import './Home.css'
import Card from '../Card/Card.jsx'
import house from '../../assets/house.jpg'
import housekitchen from '../../assets/housekichen.jpg'
import houseliving from '../../assets/houseliving.jpg'
import roomhouse from '../../assets/roomhouse1.avif'
import roomhouse2 from '../../assets/roomhouse2.avif'
import roomhouse3 from '../../assets/roomhouse3.avif'
import room from '../../assets/room.jpg'
import room2 from '../../assets/room1.jpg'
import room3 from '../../assets/room2.jpg'
import village from '../../assets/village.avif'
import village2 from '../../assets/village1.avif'
import village3 from '../../assets/village2.avif'
import villa from '../../assets/villa.jpg'
import villa1 from '../../assets/villa1.jpg'
import villa3 from '../../assets/villa3.jpg'
import ski from '../../assets/ski.avif'
import ski1 from '../../assets/ski1.avif'
import ski2 from '../../assets/ski2.avif'
import roomnew from '../../assets/roomnew.avif'
import roomnew1 from '../../assets/roomnew1.avif'
import roomnew2 from '../../assets/roomnew2.avif'
import mountain from '../../assets/mountain.avif'
import mountain1 from '../../assets/mountain1.avif'
import mountain2 from '../../assets/mountain2.avif'
import air1 from '../../assets/air1.avif'
import air3 from '../../assets/air2.avif'
import air2 from '../../assets/air3.avif'
import farmhouse from '../../assets/farmhouse.jpg'
import farmhouse1 from '../../assets/farmhouse1.jpg'
import farmhouse2 from '../../assets/farmhouse2.jpg'
import huthouse from '../../assets/huthouse.jpg'
import huthouse1 from '../../assets/huthouse1.jpg'
import huthouse2 from '../../assets/huthouse2.jpg'
import hut1 from '../../assets/hut1.avif'
import hut2 from '../../assets/hut2.avif'
import hut3 from '../../assets/hut3.avif'


function Home() {
  return (
    <div className="home">
      <Card image1={house} image2={housekitchen} image3={houseliving} name="1BHK Villa in Lucknow" value="₹30000/Month"/>
      <Card image1={roomhouse} image2={roomhouse2} image3={roomhouse3} name="1BHK Modern Flat in Delhi" value="₹40000/Month"/>
      <Card image1={room} image2={room2} image3={room3} name="2BHK Flat in Maharasthra" value="₹35000/Month"/>
      <Card image1={village} image2={village2} image3={village3} name="2BHK Village house in Gorakhpur" value="₹40000/Month"/>
      <Card image1={villa} image2={villa1} image3={villa3} name="3BHK Villa in Jhansi" value="₹30000/Month"/>
      <Card image1={ski} image2={ski1} image3={ski2} name="2BHK Flat in Manali" value="₹20000/Month"/>
      <Card image1={roomnew} image2={roomnew1} image3={roomnew2} name="1BHK Villa in Jaipur" value="₹10000/Month"/>
      <Card image1={mountain} image2={mountain1} image3={mountain2} name="2BHK Mountain villa in Uttrakhand" value="₹20000/Month"/>
      <Card image1={air1} image2={air2} image3={air3} name="3BHK Villa in Delhi" value="₹10000/Month"/>
      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} name="2BHK Farmhouse in Goa" value="₹90000/Month"/>
      <Card image1={huthouse} image2={huthouse1} image3={huthouse2} name="1BHK Villa in Jammu & Kashmir" value="230000/Month"/>
      <Card image1={hut1} image2={hut2} image3={hut3} name="1BHK Village House in Punjab" value="₹10000/Month"/>
    </div>
  )
}

export default Home
