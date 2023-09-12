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
        <h1>My name is</h1>
        {/* <h3 className='name'></h3> */}
        <img className='starla' src={Starla} alt='Starla' />
        <h3 className='name'> i'm FREELANCER </h3>
        <h2>Logo Designer and Web Developer</h2>      
            <Link to ="/galeri" className='btn'>PROJECT</Link>
            <Link to="/contac" className='btn'>CONTACT</Link>
      </div>
    </div>
  )
}

export default SlikezaHome