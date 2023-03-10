import React from 'react'
import './Intro.scss'
import { init } from 'ityped'
import { ArrowDownward } from '@material-ui/icons'
import { useEffect } from 'react'
import { useRef } from 'react'
// import ArrowDownwardIcon from '@mui/icons-material/Ar';/

export default function Intro() {
  const textRef = useRef(null)
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 50,
      loop: true,
      // disableBackTyping: false,
      backDelay: 1500,
      strings: ['Developer', 'Designer'],
      onFinished: function () {},
    })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/img 1.jpg" alt="pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi There, i'm</h2>
          <h1> Robert Maina</h1>
          <h3>
            Freelancer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          {/* <img src={ArrowDown} alt="" /> */}
          <ArrowDownward
            style={{ color: 'rgb(255, 5, 88)', alignItems: 'center' }}
            className="img"
          />
        </a>
      </div>
    </div>
  )
}
