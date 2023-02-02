import React from 'react'
import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import './works.scss'
import { useState } from 'react'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: '1',
      icon: 'assets/mobile.jpg',
      title: 'Web Design',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque totam soluta minima eius labore, similique voluptatibus assumenda error magni.',
    },
    {
      id: '2',
      icon: 'assets/mobile.jpg',
      title: 'mobile App',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque totam soluta minima eius labore, similique voluptatibus assumenda error magni.',
    },
    {
      id: '3',
      icon: 'assets/mobile.jpg',
      title: 'Branding',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque totam soluta minima eius labore, similique voluptatibus assumenda error magni.',
    }
  ]
  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="assets/mobile.jpg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowLeft
        style={{ color: 'cyan', alignItems: 'center' }}
        className="arrow left"
        onClick={() => handleClick('left')}
      />
      <ArrowRight
        style={{ color: 'cyan', alignItems: 'center' }}
        onClick={() => handleClick('right')}
        className="arrow right"
      />
    </div>
  )
}
