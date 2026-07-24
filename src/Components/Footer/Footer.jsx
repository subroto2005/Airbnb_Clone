import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <div className="footertop">
        <div className="box">
            <span className="contact">Contact Us</span>
            <span className="rem">+91 9020387654</span>
            <span className="rem">abc123@gmail.com</span>
            <span className="rem">Gorakhpur,Uttar Pradesh</span>
        </div>

        <div className="box">
            <span className="contact">Our Services</span>
            <span className="rem">Home</span>
            <span className="rem">Add Listing</span>
            <span className="rem">Rent</span>
        </div>

        <div className="box">
            <span className="contact">Ouick Link</span>
            <span className="rem">Knowledge Base</span>
            <span className="rem">FAQ</span>
            <span className="rem">Contact</span>
        </div>

        <div className="box">
            <span className="contact">Private Property Rental</span>
            <NavLink to="/helpcenter"><button id="contactbutton">Contact Us</button></NavLink>
        </div>
      </div>

      <div className="footerbottom">
        <span>Privacy Policy</span>
        <span>||</span>
        <span>Use of terms</span>

      </div>
    </div>
  )
}


export default Footer
