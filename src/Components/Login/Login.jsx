import React from 'react'
import  './Login.css'

function Login() {
  return (
    <div className='login' onSubmit={(e)=>{alert('Login Successfull')}}>
      <form>
        <h2>Login Page</h2>
        <div className="loginform">
          <label htmlFor="emailid">Email</label>
          <input type="email" name="email" className='listlogin' id="emailid" required/>
        </div>

        <div className="loginform">
          <label htmlFor="passw" >Password</label>
          <input type="password" className='listlogin' id="passw" required/>
        </div>

        <button type="submit" id="loginsubmitbutton" >Login</button>

      </form>
    </div>
  )
}

export default Login
