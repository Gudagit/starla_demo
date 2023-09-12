import "./NavbarStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

import {BsGithub} from 'react-icons/bs'
import {SiAdobeillustrator} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/ri'

import  { useState } from "react";




function Navbar() {
   const [click, setClick] = useState(false) ;
   const handleClick = () => setClick(!click);
    
//      
    
  return (
   
    <nav className="haeder">
    
    <img className="margina" src="./slike/margina.png" alt="pozadina" />
    
    
    <ul className={click ? "nav-menu active" : "nav-menu"}>
    
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <Link to="/service">SERVICE</Link>
        </li>
        <li>
            <Link to="/review">REVIEW</Link>            
        </li>
        <li>
            <Link to="/galeri">GALLERY</Link>
        </li>
        {/* <li>
            <Link to="/blog">BLOG</Link>
        </li> */}
        <li>
            <Link to="/contac">CONTACT</Link>
        </li>
        <img className="logo" src="./slike/logo2.png"  alt="logo" />
    </ul>
    <div className="burger" onClick={handleClick}>
    { click ? (<FaTimes size={20} style={{color:"rgb(31, 28, 28)"}}/>): (<FaBars size={20} style={{color:"#1F1C1C"}}/>)}
        
        
    </div>

    <div className='header__socials'>
        <a href='https://github.com/Gudagit' target='_blank'><BsGithub size={25} style={{color: "#1F1C1C"}} /></a>
        <a href='https://99designs.com/profiles/2993835'><SiAdobeillustrator size={25} style={{color: "#1F1C1C"}} /></a>
        <a href='https://www.instagram.com/designstarla/?hl=en' target='_blank' ><RiInstagramFill size={25} style={{color: "#1F1C1C"}} /></a>
    </div>
    
    </nav>
  )
}

export default Navbar