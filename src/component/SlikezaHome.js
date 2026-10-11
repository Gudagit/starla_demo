import React from 'react'
import "./SlikezaHome.css"

import Starla from "../slikepotrebne/starla.png"
import { Link } from "react-router-dom"

function SlikezaHome() {
  return (
    <div className='hero'>
        <div className='mask'>
        <img className='pozadina' src="./slike/3.png" alt="pozadina" />
        </div>
      <div className='content'>
        <h1 className="hero-design">DESIGN</h1>
        <img className='starla' src={Starla} alt='Starla' />
        <h3 className='name'> I'm a FREELANCER </h3>
        <h2>Junior Software Developer and Logo Designer</h2>
        <div className='hero-buttons'>
            <Link to="/project" className='btn'>PROJECTS</Link>
            <a href={`${process.env.PUBLIC_URL}/cv/Ivana-Gudovic-Resume.pdf`} target="_blank" rel="noreferrer" className='btn'>RESUME</a>
            <Link to="/contac" className='btn'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default SlikezaHome
