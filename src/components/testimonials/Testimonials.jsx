import React from 'react'
import './Testimonials.scss'
import { ArrowForwardOutlined } from '@material-ui/icons'

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: 'Martin',
      title: 'Senior Developer',
      img: 'assets/man.avif',
      icon: 'assets/Twitter.avif',
      desc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, quis provident. Nesciunt nobis dolorem autem dolor quibusdam in, voluptatem sapien',
    },
    {
      id: 3,
      name: 'Robert',
      title: 'CEO of AlBI',
      img: 'assets/man.avif',
      icon: 'assets/youtube.avif',
      desc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, quis provident. Nesciunt nobis dolorem autem dolor quibusdam in, voluptatem sapiente?',
      featured: true,
    },
    {
      id: 3,
      name: 'Dennis Mark',
      title: 'Co-Founder',
      img: 'assets/biker.jpg',
      icon: 'assets/linkedin.avif',
      desc:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, quis provident. Nesciunt nobis dolorem autem dolor quibusdam in, voluptatem sapiente?',
    },
  ]
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'}>
            <div className="top" style={{cursor:"pointer"}}>
              <ArrowForwardOutlined className="left"style={{cursor:"pointer"}}  />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} alt="" className="right  " />
            </div>
            <div className="center">{d.desc}</div>
            <div className="right">
              <h3> {d.name} </h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
