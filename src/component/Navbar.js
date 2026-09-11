import "./NavbarStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import NinetyNineBadge from './NinetyNineBadge';

import  { useState } from "react";




function Navbar() {
   const [click, setClick] = useState(false) ;
   const handleClick = () => setClick(!click);
   const closeMenu = () => setClick(false);
   const goHome = () => { closeMenu(); window.scrollTo(0, 0); };

  return (
    <>
    <nav className="haeder">

    <img className="margina" src="./slike/margina.png" alt="" />

    <div className="nav-inner">

        <Link to="/" className="nav-logo" onClick={goHome}>
            <img className="logo" src="./slike/logo2.png" alt="logo" />
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/" onClick={goHome}>HOME</Link>
            </li>
            <li>
                <Link to="/about" onClick={closeMenu}>ABOUT ME</Link>
            </li>
            <li>
                <Link to="/galeri" onClick={closeMenu}>GALLERY</Link>
            </li>
            <li>
                <Link to="/project" onClick={closeMenu}>PROJECT</Link>
            </li>
            <li>
                <Link to="/contac" onClick={closeMenu}>CONTACT</Link>
            </li>

            <div className="header__socials mobile-only">
                <a href='https://github.com/Gudagit' target="_blank" rel="noreferrer"><BsGithub size={22} style={{color: "#1F1C1C"}} /></a>
                <a href='https://99designs.com/profiles/2993835' target="_blank" rel="noreferrer"><NinetyNineBadge size={22} /></a>
                <a href='https://www.instagram.com/designstarla/?hl=en' target="_blank" rel="noreferrer"><RiInstagramFill size={22} style={{color: "#1F1C1C"}} /></a>
                <a href='https://www.linkedin.com/in/ivana-gudovic-bb6171107' target="_blank" rel="noreferrer"><BsLinkedin size={22} style={{color: "#1F1C1C"}} /></a>
            </div>
        </ul>

        <div className="burger" onClick={handleClick}>
        { click ? (<FaTimes size={22} style={{color:"rgb(31, 28, 28)"}}/>): (<FaBars size={22} style={{color:"#1F1C1C"}}/>)}
        </div>

    </div>

    </nav>

    <div className="header__socials desktop-only">
        <a href='https://github.com/Gudagit' target="_blank" rel="noreferrer"><BsGithub size={20} style={{color: "#1F1C1C"}} /></a>
        <a href='https://99designs.com/profiles/2993835' target="_blank" rel="noreferrer"><NinetyNineBadge size={20} /></a>
        <a href='https://www.instagram.com/designstarla/?hl=en' target="_blank" rel="noreferrer"><RiInstagramFill size={20} style={{color: "#1F1C1C"}} /></a>
        <a href='https://www.linkedin.com/in/ivana-gudovic-bb6171107' target="_blank" rel="noreferrer"><BsLinkedin size={20} style={{color: "#1F1C1C"}} /></a>
    </div>
    </>
  )
}

export default Navbar
