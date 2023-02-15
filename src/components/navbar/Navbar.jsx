import React from 'react'
import './Navbar.scss'
import { Person, Mail } from '@material-ui/icons'

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'nav ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="intro" className="logo">
            <img src="assets/robert3.png" alt="" />
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+254 070 081 2847 </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span> mainarobert04@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
