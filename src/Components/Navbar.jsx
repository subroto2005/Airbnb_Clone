import React, { useState } from 'react'
import logo from '../assets/p.jpg'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOtherHouses } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { PiFarmFill } from "react-icons/pi";
import { MdPool } from "react-icons/md";
import { FaTent } from "react-icons/fa6";
import { MdOutlineCabin } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { MdForest } from "react-icons/md";


function Navbar() {
const [visible,setVisible]=useState(false)
  
return (
    <nav className='mainnav'>
       <div className={`hamburger ${visible ? "show" : "hide"}`}>
                <div className="hammodules">Login</div>
                <div className="hammodules">Sign-up</div>
                <div className="hammodules">List your home</div>
                <div className="hammodules">help center</div>
        </div>

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
            <div className="navsvgs">
                <h2>Trending</h2>
                <FaArrowTrendUp />
            </div>
            <div className="navsvgs">
                <h2>Houses</h2>
                <MdOtherHouses />
            </div>
            <div className="navsvgs">
                <h2>Rooms</h2>
                <IoBed />
            </div>
            <div className="navsvgs">
                <h2>FarmHouse</h2>
                <PiFarmFill />
            </div>
            <div className="navsvgs">
                <h2>Pool Houses</h2>
                <MdPool />
            </div>
            <div className="navsvgs">
                <h2>Tent House</h2>
                <FaTent />
            </div>
            <div className="navsvgs">
                <h2>Cabins</h2>
                <MdOutlineCabin />
            </div>
            <div className="navsvgs">
                <h2>Shops</h2>
                <AiTwotoneShop />
            </div>
            <div className="navsvgs">
                <h2>Forest Houses</h2>
                <MdForest />
            </div>
        </nav>
    </nav>
  )
}

export default Navbar
