import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => (
  <div className="footer section__padding" id="footer">
    <div className="footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer-socials">
      <h5>
        Facebook{' '}
        <span>
          <FaFacebook />
        </span>
      </h5>
      <h5>
        Twitter{' '}
        <span>
          <FaTwitter />
        </span>
      </h5>
      <h5>
        Instagram{' '}
        <span>
          <FaInstagram />
        </span>
      </h5>
      <h5>
        You-tube{' '}
        <span>
          <FaYoutube />
        </span>
      </h5>
    </div>

    <div className="footer-copyright">
      <p>@2023 GPT-3. All rights reserved.</p>
    </div>
  </div>
)

export default Footer
