import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/p.jpg'
import { NavLink } from 'react-router-dom';
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
const [justify,setJustify]=useState('center')
const navtwo=useRef(null)

useEffect(()=>{
    const updateJustify = () => {
      const nav = navtwo.current;
      if (!nav) return;

      setJustify(
        nav.scrollWidth > nav.clientWidth ? "flex-start" : "center"
      );
    };

    updateJustify();
    window.addEventListener("resize", updateJustify);

    return () => window.removeEventListener("resize", updateJustify);
},[])

return (
    <nav className='mainnav'>
       <div className={`hamburger ${visible ? "show" : "hide"}`}>
            <NavLink to='/login'><div className="hammodules">Login</div></NavLink> 
            <NavLink to='/signup'><div className="hammodules">Sign-up</div></NavLink>
            <NavLink to='/listyourhome'><div className="hammodules">List your home</div></NavLink>
             <NavLink to='/helpcenter'><div className="hammodules">Help Center</div></NavLink>
        </div>

        <nav className="navone">
            <NavLink id="logonav" to='/'>
            <div className="logo one">
                <img src={logo} alt="could not load image" width="45px" height="45px" />
                <h1>Private Property Rental</h1>
            </div>
            </NavLink>

            <form onSubmit={(e)=>{e.preventDefault()}} className='one'>
                <input type="text" placeholder='Search Destination' />
                <button className="search"><span id="searchtext">Search</span> <CiSearch id='searchsymbol' size={25}/></button>
            </form>

            <div className="endnav one">
                <button className="listhome">List Your Home</button>
                <button className="profile" onClick={()=>{setVisible((prev)=>!prev)}}><RxHamburgerMenu id="ham" /> <CgProfile id="profilepic" /></button>
            </div>
        </nav>
        
        <nav className="navtwo" ref={navtwo} style={{ justifyContent: justify }}>
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
