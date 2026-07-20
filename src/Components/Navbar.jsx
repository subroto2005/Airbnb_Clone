import React, { useState } from 'react'
import logo from '../assets/p.jpg'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

function Navbar() {
const [visible,setVisible]=useState(false)
  
return (
    <nav className='mainnav'>
        {visible ? (<div className="hamburger">
                <div className="hammodules">Login</div>
                <div className="hammodules">Sign-up</div>
                <div className="hammodules">List your home</div>
                <div className="hammodules">help center</div>
        </div>) : (<div></div>)}

        <nav className="navone">
            <div className="logo one">
                <img src={logo} alt="could not load image" width="45px" height="45px" />
                <h1>Private Property Rental</h1>
            </div>

            <form onSubmit={(e)=>{e.preventDefault()}} className='one'>
                <input type="text" placeholder='Search Destination' />
                <button className="search">Search <CiSearch id='searchsymbol' size={25}/></button>
            </form>

            <div className="endnav one">
                <button className="listhome">List Your Home</button>
                <button className="profile" onClick={()=>{setVisible((prev)=>!prev)}}><RxHamburgerMenu id="ham" /> <CgProfile id="profilepic" /></button>
            </div>
        </nav>
        
        <nav className="navtwo">

        </nav>
    </nav>
  )
}

export default Navbar
