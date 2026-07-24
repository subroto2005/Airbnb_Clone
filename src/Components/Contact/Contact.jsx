import React from 'react'
import './Contact.css'

function Contact() {

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    alert("Message sent!");
    form.reset();
  }
};
  return (
     <div className='contactus'>
      <form  action="https://formspree.io/f/xqergkar" method="POST" onSubmit={handleSubmit} >
        <h2>Contact Page</h2>
        <div className="contactusform">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className='contactlist' id="username" required/>
        </div>

        <div className="contactusform">
          <label htmlFor="emailid">Email</label>
          <input type="email" name="email" className='contactlist' id="emailid" required/>
        </div>

        <div className="contactusform">
          <label htmlFor="mess" >Message</label>
          <textarea name="mess" id="mess" name="mess" className='contactlist'></textarea>
        </div>

        <button type="submit" id="contactsubmit" required>Submit</button>

      </form>
    </div>
  )
}

export default Contact
