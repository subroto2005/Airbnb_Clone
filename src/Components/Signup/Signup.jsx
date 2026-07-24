import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className='signup' onSubmit={(e)=>{alert('Signup Successfull')}}>
      <form>
        <h2>SignUp Page</h2>
        <div className="signupform">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className='listlogin' id="username" required/>
        </div>

        <div className="signupform">
          <label htmlFor="emailid">Email</label>
          <input type="email" name="email" className='listlogin' id="emailid" required/>
        </div>

        <div className="signupform">
          <label htmlFor="passw" >Password</label>
          <input type="password" className='listlogin' id="passw" required/>
        </div>

        <div className="signupform">
          <label htmlFor="cnfpassw" >Confirm Password</label>
          <input type="password" className='listlogin' id="cnfpassw" required/>
        </div>

        <button type="submit" id="loginsubmitbutton" >SignUp</button>

      </form>
    </div>
  )
}

export default Signup
