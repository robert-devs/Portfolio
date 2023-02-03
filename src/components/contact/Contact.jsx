import React from 'react'
import "./Contact.scss"

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form >
          <input type="text" placeholder='Email' />
          <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

