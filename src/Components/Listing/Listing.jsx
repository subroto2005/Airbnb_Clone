import React, { useContext } from 'react'
import './Listing.css'
import { useState } from 'react';
import { data } from '../../Context/CardContext';
import { useNavigate } from 'react-router-dom';

function Listing() {
  const navigate=useNavigate()
  const {setCards} =useContext(data)

  function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const title = formData.get("tit");
  const desc = formData.get("desc");
  const img1 = formData.get("img1");
  const img2 = formData.get("img2");
  const img3 = formData.get("img3");
  const price=formData.get("price");
  const loc=formData.get("loc");
  setCards((prev)=>[...prev,{id:Date.now(),name:title,image1:URL.createObjectURL(img1),image2:URL.createObjectURL(img2),image3:URL.createObjectURL(img3),value:price}])

  alert("Listing Added Suceesfully")

  navigate("/")
}

  return (
    <div className='listing'>
      <form  onSubmit={handleSubmit}>
        <h2>Add Your Listing</h2>
        <div className="listingform">
          <label htmlFor="tit">Title</label>
          <input type="text"  name="tit" className='listlogin' id="tit" required />
        </div>

        <div className="listingform">
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" className='listlogin' id="desc" required></textarea>
        </div>
        
        <div className="listingform">
          <label htmlFor="img1">Image1</label>
          <input type="file" name="img1" className='listlogin imglist' id="img1" required/>
        </div>

        <div className="listingform">
          <label htmlFor="img2">Image2</label>
          <input type="file" name="img2" className='listlogin imglist' id="img2" required/>
        </div>

        <div className="listingform">
          <label htmlFor="img2">Image3</label>
          <input type="file" name="img3" className='listlogin imglist' id="img3" required/>
        </div>

        <div className="listingform">
          <label htmlFor="price" >Price</label>
          <input type="text" className='listlogin'  name="price" id="price" required/>
        </div>

        <div className="listingform">
          <label htmlFor="loc" >Location</label>
          <input type="loc" className='listlogin' name="loc" id="loc" required/>
        </div>

        <button type="submit" id="loginsubmitbutton" >Add</button>

      </form>
    </div>
  )
}

export default Listing
