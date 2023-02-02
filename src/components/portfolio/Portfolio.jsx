import React from 'react'
import { useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import {
  MobilePortfolio,
  WebPortfolio,
  featuredPortfolio,
  DesignPortfolio,
  ContentPortfolio,
} from '../data'
import './Portfolio.scss'
import { useEffect } from 'react'

export default function Portfolio() {
  const [selected, setSelected] = useState('Featured')
  const [data, setData] = useState([])
  const list = [
    {
      id: 'Featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ]
  useEffect(() => {
    switch (selected) {
      case 'Featured':
        setData(featuredPortfolio)
        break
      case 'web':
        setData(WebPortfolio)
        break
      case 'mobile':
        setData(MobilePortfolio)
        break
      case 'design':
        setData(DesignPortfolio)
        break
      case 'content':
        setData(ContentPortfolio)
        break

      default:
        setData(featuredPortfolio)
    }
  }, [selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
