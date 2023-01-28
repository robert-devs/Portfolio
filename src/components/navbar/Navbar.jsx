import React from 'react'
import "./Navbar.css"
import {Person,Mail} from '@material-ui/icons';

export default function Navbar() {
  return (
    <div className='nav active' id='navbar'>
      <div className="wrapper">
        <div className="left">
          <a href="intro" className='logo'>Genius</a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+254 8930</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>sdk@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className='line 1'></span>
            <span className='line 2'></span>
            <span className='line 3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
