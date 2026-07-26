import React, { useState } from 'react'
import './Chatbot.css'
import { TbMessage } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";


function Chatbot() {

  const[chatvisible,setChatVisible]=useState(true)

  return (

    <div className={`chatbot`} >
      <button className="messicon" onClick={()=>{ return setChatVisible(prev=>!prev); 
      }}>
        <TbMessage size={35}/>
      </button>

      <div className={`messbox  ${chatvisible ? 'show' : 'hide'}`}>
        <div className="messnav">
          <span className="svgicon"><TbMessage size={25}/></span>          
           <div className="topmess">
            <span>Rentra Bot</span>
            <span>AI assistant</span>
           </div>
        </div>

        <div className="messmidlle">
          <h2>Hello I am</h2>
          <span>Rentra</span>
        </div>

        <div className="messfooter">
          <input type="text" name="usermess" id="usermess" placeholder='Type a message..'/>
          <button><IoIosSend size={25}/></button>
        </div>

      </div>

    </div>
  )
}

export default Chatbot
