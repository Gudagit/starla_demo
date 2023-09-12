import "./pozadina2.css"
import React from 'react'
import { Link } from "react-router-dom"

function Pozadina2() {
  return (
    <div className="hiro-pozadina">
    <img className='pozadina2' src='./slike/pozadina2.png' />
      <div className="heading">
      {/* <img className="pozadina2" src="./slike/pozadina2.png" /> */}
        <div className="text">
          <h1>SERVICE</h1>
          <p>chose best for you</p>
        </div> 
      <div className="container">  
        <div className="card">
            <div className="imgBx">
              <img src="../slike/icon_02.png"/>
            </div>
            <div className="contenet">              
              <h3>LOGO</h3>
              <h4>Based on your Ideas and my visions you will get unique and high quality logo!</h4>
              <Link to="/contac" className="btn">MORE</Link>
            </div>
        </div>  
        <div className="card">
            <div className="imgBx">
            <img src="../slike/icon_03.png"/>
            </div>
            <div className="contenet">
              <h3>BRAND</h3>
              <h4>If you are not sure about which logo will fit your business the best. I will help you create a unique and creative brand identity!</h4>
              <Link to="/" className="btn">Read More</Link>
            </div>
        </div>
        <div className="card">
            <div className="imgBx">
            <img src="../slike/icon_01.png"/>
            </div>
            <div className="contenet">
              <h3>WEB</h3>
              <h4>Create web design and overall UI/UX development</h4>
              <Link to="/" className="btn">Read More</Link>
            </div>
        </div>
       
      </div>          
      </div>
    </div>
  )
}

export default Pozadina2